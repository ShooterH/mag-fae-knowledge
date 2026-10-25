const KB_SCRIPT_URL = document.currentScript
  ? new URL("../vendor/", document.currentScript.src)
  : new URL("/assets/vendor/", window.location.origin);

let mermaidLoader;

function ensureMermaid() {
  if (window.mermaid) return Promise.resolve(window.mermaid);
  if (mermaidLoader) return mermaidLoader;

  mermaidLoader = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = new URL("mermaid.min.js", KB_SCRIPT_URL).href;
    script.onload = () => resolve(window.mermaid);
    script.onerror = () => reject(new Error("Mermaid 资源加载失败"));
    document.head.appendChild(script);
  });
  return mermaidLoader;
}

function renderMath() {
  const content = document.querySelector(".md-content");
  if (!content || typeof window.renderMathInElement !== "function") return;

  window.renderMathInElement(content, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false }
    ],
    ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"],
    throwOnError: false
  });
}

async function renderMermaid() {
  const nodes = Array.from(document.querySelectorAll(".mermaid-source")).filter(
    (node) => !node.dataset.processed
  );
  if (!nodes.length) return;

  let mermaid;
  try {
    mermaid = await ensureMermaid();
  } catch (error) {
    console.error("Mermaid asset failed:", error);
    return;
  }

  const dark = document.body.getAttribute("data-md-color-scheme") === "slate";
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: dark ? "dark" : "default",
    flowchart: { curve: "basis", htmlLabels: false }
  });

  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    const code = node.querySelector("code");
    const source = (code ? code.textContent : node.textContent).trim();
    if (!source) continue;

    try {
      const id = `kb-mermaid-${Date.now()}-${index}`;
      const result = await mermaid.render(id, source);
      node.innerHTML = result.svg;
      node.classList.remove("mermaid-source");
      node.classList.add("mermaid");
      node.dataset.processed = "true";
    } catch (error) {
      console.error("Mermaid render failed:", error);
      node.textContent = source;
    }
  }
}

if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    renderMath();
    renderMermaid();
  });
} else {
  document.addEventListener("DOMContentLoaded", () => {
    renderMath();
    renderMermaid();
  });
}
