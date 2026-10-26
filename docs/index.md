<div class="kb-hero" markdown>
<span class="kb-kicker">MAGNETIC ENCODER · FIELD ENGINEERING</span>

# 磁编码器 FAE 知识库

把**磁学原理、材料选择、传感器机理、结构公差与现场验证**连成一条可核验的工程路径。

面向客户支持、编码器选型和磁路仿真建议，不替代目标器件数据手册、标准原文或项目实测。

[按任务查找](fae/index.md){ .md-button .md-button--primary }
[建立知识体系](subjects/index.md){ .md-button }
[查看来源规范](sources/index.md){ .md-button }

<span class="kb-meta">首版 v0.2 · 2026-10-26 · 22 篇学科文章 · 30 条公开资料 + 1 本教材</span>
</div>

## 从今天要解决的问题进入

<div class="kb-grid kb-grid--3" markdown>

<div class="kb-card" markdown>
<span class="kb-num">01</span>

### 客户要选型

把转速、精度、气隙、温度、接口和寿命转成可验证的选型边界，而不是只对型号参数表。

[进入选型工作流](fae/selection.md)
</div>

<div class="kb-card" markdown>
<span class="kb-num">02</span>

### 结构或磁路要评估

判断何时用 2D、何时必须上 3D，如何设置材料、边界、网格与敏感性，以及怎样和实测对齐。

[查看仿真建议](fae/simulation.md)
</div>

<div class="kb-card" markdown>
<span class="kb-num">03</span>

### 现场角度异常

从气隙、偏心、倾斜、磁体、安装、接口和校准逐层缩小问题，保留可复现证据。

[使用排障路径](fae/troubleshooting.md)
</div>

</div>

## 按学科补齐底层知识

<div class="kb-grid kb-grid--2" markdown>

<div class="kb-card" markdown>
<span class="kb-label">FOUNDATION</span>

### 磁学与磁性材料

从 B/H/M/J 与磁通开始，依次建立磁性起源、磁畴、各向异性、磁路和退磁场，再进入磁滞曲线、损耗与软磁、永磁材料。

[磁场与材料响应](subjects/field-and-measurement.md) · [技术磁化与磁滞](subjects/magnetization-and-hysteresis.md) · [永磁参数与工作点](subjects/permanent-magnet-parameters.md)
</div>

<div class="kb-card" markdown>
<span class="kb-label">SENSING</span>

### 角度检测与编码器

从 AMR/GMR/TMR 机理到 Hall 信号链，再讨论磁体安装、角度误差、机械角与电角度、输出与动态指标。

[磁电阻效应](subjects/magnetoresistance.md) · [磁场到角度](subjects/angle-sensing.md) · [角度误差机理](subjects/angle-error-mechanisms.md)
</div>

</div>

## 建议的学习与查阅路径

<div class="kb-path" markdown>

<div class="kb-step" markdown>
<span>STEP 1</span>

**先统一语言。** 读[磁场与材料响应](subjects/field-and-measurement.md)与[磁性起源](subjects/magnetic-origin-and-classes.md)，分清 B、H、M、J、Br、HcB、HcJ，知道数据手册中的数值是在什么条件下得到的。
</div>

<div class="kb-step" markdown>
<span>STEP 2</span>

**再理解磁体和曲线。** 读[技术磁化与磁滞](subjects/magnetization-and-hysteresis.md)、[永磁参数与工作点](subjects/permanent-magnet-parameters.md)和[温度稳定性与退磁](subjects/magnet-stability-and-demagnetization.md)，建立“工作点 + 温度 + 反向场”的退磁判断。
</div>

<div class="kb-step" markdown>
<span>STEP 3</span>

**最后连接系统。** 读[磁场到角度](subjects/angle-sensing.md)、[编码器磁体与安装](subjects/encoder-magnet-and-mounting.md)和[误差预算](fae/error-budget.md)，把磁体、气隙、偏心、倾斜和算法放在同一张误差链上。
</div>

</div>

需要按时间预算安排阅读顺序时，用[学习路径](subjects/learning-paths.md)；查符号和单位用[术语与符号](subjects/glossary.md)。

## 这个库怎样保证可信

| 标记 | 含义 | 使用方式 |
| --- | --- | --- |
| **教材定位** | 《磁学基础与磁性材料》第 2 版，标明书页与 PDF 页 | 用于概念、机理和经典结论；不替代最新器件资料 |
| **官方资料** | 标准/计量机构、原厂数据手册、应用笔记、官方软件文档 | 用于型号条件、参数定义和实现限制；必须带版本与适用型号 |
| **工程推导** | 由上述资料推导、但尚未在项目上实测 | 明确标为“待验证”，不写成普适定律 |
| **项目实测** | 有可追溯的样机、工装、温度与测量条件 | 只在脱敏且获准公开时进入案例库 |

!!! warning "引用边界"
    教材是扫描版，当前只完成目录与关键章节起始页核对；**不会声称已完成全书 OCR 或逐公式核验**。具体页码与结论在引用前继续复核，详见[教材登记](sources/book.md)。

## 首版覆盖

- **磁学基础：** 磁场与材料响应、磁性起源、磁畴、各向异性、磁路、退磁场
- **磁化与测量：** 磁滞回线、磁测量、矫顽力、损耗与温度
- **材料选择：** 软磁参数与家族、软磁铁氧体、永磁工作点、材料家族、退磁
- **传感系统：** AMR/GMR/TMR、角度信号链、磁体与安装、误差机理、机械角/电角度、输出与动态
- **FAE 工作流：** 选型、仿真建议、现场排障、脱敏案例模板
