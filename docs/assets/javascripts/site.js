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

if (typeof document$ !== "undefined") {
  document$.subscribe(renderMath);
} else {
  document.addEventListener("DOMContentLoaded", renderMath);
}
