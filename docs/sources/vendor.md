# 官方资料登记

访问日期统一为 **2026-10-25**。链接、版本和适用范围需在引用前再次确认；若原厂已发布新版本，以新版为准并更新本页。

## 计量、磁学与材料

<a id="UNIT-01"></a>
### UNIT-01 · SI 单位制手册

- **机构/版本：** BIPM，第 9 版（v4.01，2026-06）
- **资料：** [The International System of Units (SI Brochure)](https://www.bipm.org/en/si-brochure-9)
- **支持：** 磁通量 Wb、磁通密度 T（Wb/m²）、磁场强度 A/m 的 SI 定义。
- **边界：** 只支持单位与量纲，不支持具体材料或传感器性能。

<a id="MEAS-01"></a>
### MEAS-01 · 永磁材料磁性能与测量技术

- **机构/版本：** Arnold Magnetic Technologies，2021-07-23
- **资料：** [Magnetic Properties of Permanent Magnets & Measuring Techniques](https://www.arnoldmagnetics.com/wp-content/uploads/2021/11/White-Paper-Measurement-07.23.2021MS2a4.pdf)
- **支持：** Hall 探头测局部 B；Helmholtz 线圈与磁通计可测磁矩；磁滞仪测 B/J–H 曲线。
- **边界：** 单点表面场不能反推出 Br、HcJ 等材料参数；测量受探头位置、方向和敏感体积影响。

<a id="MAG-01"></a>
### MAG-01 · 磁学基础要素

- **机构/版本：** Arnold Magnetic Technologies，2013
- **资料：** [The Elements of Magnetics](https://www.arnoldmagnetics.com/wp-content/uploads/2017/10/Elements-of-Magnetics-Constantinides-CWRU-2013-psn-lo-res.pdf)
- **支持：** 易磁化轴、晶粒取向、各向异性与各向同性磁体的区别。
- **边界：** 不取向不等于单个晶粒没有磁晶各向异性；成品还受形状和充磁影响。

<a id="MAT-01"></a>
### MAT-01 · 铁氧体与磁芯参数定义

- **机构/版本：** TDK Electronics，2022-10
- **资料：** [Ferrites and accessories – General – Definitions](https://www.tdk-electronics.tdk.com/download/187036/dbcde584d155cc270f5d5dbf1efec233/pdf-generaldefinitions.pdf)
- **支持：** 初始磁化、饱和、Br、Hc、$B=\mu_0H+J$、磁滞/涡流/剩余损耗等定义。
- **边界：** 损耗比较必须注明频率、磁通摆幅、温度、波形和磁芯条件。

<a id="SOFT-01"></a>
### SOFT-01 · 软磁材料与冲压件

- **机构/版本：** VACUUMSCHMELZE，网页未标日期
- **资料：** [Soft Magnetic Materials and Stamped Parts](https://vacuumschmelze.com/products/soft-magnetic-materials-and-stamped-parts)
- **支持：** NiFe、CoFe、非晶、纳米晶等材料系列；低 Hc、高磁导率、高 Bs、电阻率等选型维度。
- **边界：** 性能依赖牌号、热处理、厚度、频率和机械应力；“软磁”不是机械硬度。

<a id="PM-01"></a>
### PM-01 · 稀土永磁的磁化损失

- **机构/版本：** Arnold Magnetic Technologies，2022-06
- **资料：** [Magnetization Losses in Rare Earth Permanent Magnets](https://www.arnoldmagnetics.com/wp-content/uploads/2022/06/AMT-Whitepaper-Magnetization-Losses-220629.pdf)
- **支持：** 可逆损失、不可逆损失与永久损失的区分；不可逆损失回温不恢复但可重新充磁。
- **边界：** 退磁由温度、负载线/形状和反向场共同决定；居里温度不是最高工作温度。

<a id="PM-02"></a>
### PM-02 · 高温电机中的 NdFeB

- **机构/版本：** Arnold Magnetic Technologies，2004
- **资料：** [NdFeB for High Temperature Motor Applications](https://www.arnoldmagnetics.com/wp-content/uploads/2017/10/NdFeB-for-high-temperature-motor-applications-Constantinides-and-Gulick-SMMA-2004-psn-hi-res.pdf)
- **支持：** NdFeB 高能积与高温退磁校核；铁氧体的 HcJ 温度系数可为正，因此低温也要校核。
- **边界：** 文中温度与曲线是特定牌号示例，不是通用限值。

<a id="PM-03"></a>
### PM-03 · 电机用高性能磁体

- **机构/版本：** Proterial，网页未标日期
- **资料：** [High-Performance Magnet for Motors](https://www.proterial.com/e/products/magnetic/magnet_motors.html)
- **支持：** NdFeB 的高磁性能定位与铁氧体的成本/应用定位。
- **边界：** 产品宣传页不能替代牌号数据表和退磁曲线。

## 电机与角度

<a id="MOTOR-01"></a>
### MOTOR-01 · FOC 中的机械角与电角度

- **机构/版本：** Microchip，MCAF R6 / v6.0.2，©2017–2020
- **资料：** [MCAF Documentation – FOC Introduction](https://microchiptech.github.io/mcaf-doc/6.0.2/algorithms/foc/introduction.html)
- **支持：** $\theta_e=N_p\theta_m$、$\omega_e=N_p\omega_m$；极对数与每机械转电周期数的关系。
- **边界：** 感应电机的定子同步电角度还涉及转差，不能直接把转子机械角乘以极对数当作所有电机状态。

<a id="ENC-01"></a>
### ENC-01 · Hall 磁角度传感器的理论模型

- **机构/版本：** Udo Ausserlechner / Infineon，*Progress In Electromagnetics Research B*, 49:77–106，2013，DOI 10.2528/PIERB13011011
- **资料：** [A Theory of Magnetic Angle Sensors with Hall Plates and Without Fluxguides](https://www.jpier.org/pierb/pier.php?paper=13011011)
- **支持：** Hall、AMR/GMR/TMR 感测方向的基本差异；AMR 的 180° 周期；装配误差如何进入角度信号。
- **边界：** 端轴、无磁通导向的理论模型；特定误差结论不能泛化到所有封装和磁路。

<a id="ENC-02"></a>
### ENC-02 · TLE5x09A16(D) AMR/GMR 角度传感器

- **机构/版本：** Infineon，V02_00，2024-08-06
- **资料：** [TLE5x09A16(D) Data Sheet (CN)](https://www.infineon.com/assets/row/public/documents/30/49/infineon-tle5x09a16-d-datasheet-cn.pdf)
- **支持：** AMR 0–180°、GMR 0–360°、差分正余弦输出及内部温度补偿的实现示例。
- **边界：** 气隙与精度指标仅适用于该系列规定的磁场、温度和测试条件。

<a id="ENC-03"></a>
### ENC-03 · TLE5501 TMR 角度传感器

- **机构/版本：** Infineon，V01_00
- **资料：** [TLE5501 Data Sheet (CN)](https://www.infineon.com/assets/row/public/documents/24/49/infineon-infineon-tle5501-ds--datasheet-cn.pdf)
- **支持：** TMR 惠斯通电桥、360° 差分正余弦输出、外部角度计算和温度/寿命条件。
- **边界：** 模拟前端不是完整编码器；带宽、ADC、诊断和校准需系统设计。

<a id="ENC-04"></a>
### ENC-04 · AS5600 12 位非接触电位器

- **机构/版本：** ams OSRAM（现 Infineon 文档库），v1-06，2018-06-20
- **资料：** [AS5600 Data Sheet](https://www.infineon.com/assets/row/public/documents/30/49/infineon-as5600-datasheet-en.pdf)
- **支持：** 指定磁体的 Bz 要求、AGC 调气隙、参考磁体偏心条件。
- **边界：** 0.5–3 mm 气隙与 6 mm 磁体的位移示例仅属于该型号，不是行业标准。

<a id="ENC-05"></a>
### ENC-05 · MLX9042x/MLX90376 磁体选择

- **机构/版本：** Melexis，Rev.3，2024
- **资料：** [Magnet Selection for Rotary Stray Field Immune Mode](https://www.melexis.com/en/documents/documentation/application-notes/application-note-magnet-selection-for-mlx9042x-mlx90376-rotary-stray-field-immune-mode)
- **支持：** 差分 Bz 形成正余弦、气隙/偏心带来的非线性、两极磁体选择。
- **边界：** 仅针对所列 Triaxis 型号、端轴和 SFI 模式。

<a id="ENC-06"></a>
### ENC-06 · A1335 片上线性化

- **机构/版本：** Allegro MicroSystems，AN296127，Rev.1，2022-03-22
- **资料：** [Advanced On-Chip Linearization in the A1335 Angle Sensor IC](https://dev.allegromicro.com/-/media/files/application-notes/an296127-a1335-advanced-on-chip-linearization.pdf?sc_lang=en)
- **支持：** IC 非线性、温漂、噪声与磁场幅值/非线性误差的拆分；封装与晶体气隙定义；谐波线性化。
- **边界：** ±20° 改善到 ±0.3° 是特定器件、磁体和实验条件，不是通用校准收益。

<a id="ENC-07"></a>
### ENC-07 · MagAlpha 端轴磁体选择

- **机构/版本：** Monolithic Power Systems，Rev.1.2，2017-01
- **资料：** [Selecting the Right Magnet for MagAlpha in End-of-Shaft Mounting](https://www.monolithicpower.com/pub/media/document/appnote_The%20right%20magnet%20for%20the%20MagAlpga%20at%20the%20end%20of%20the%20shaft%20rev1.2.pdf)
- **支持：** NdFeB/SmCo 温度系数、气隙、横向偏移和倾斜对端轴磁路的影响。
- **边界：** 推荐区域基于 Br≈1 T、指定 INL 与倾斜假设，只适用于 MagAlpha 端轴。

<a id="ENC-08"></a>
### ENC-08 · HAL 3930 三维位置传感器

- **机构/版本：** TDK-Micronas，DSH000212_003EN，2022-03-24
- **资料：** [HAL 3930 Data Sheet](https://www.micronas.tdk.com/de/system/files/downloads/files/HAL_3930_Stray-Field_Robust_3D_Position_Sensor_with_Digital_Output_Interfaces.pdf)
- **支持：** 3D Hall 矢量测量、杂散场补偿思路、磁场与温度诊断。
- **边界：** 均匀/梯度杂散场能力和精度必须按具体配置、算法和测试验证。

## 仿真方法

<a id="SIM-01"></a>
### SIM-01 · FEMM 4.2 用户手册

- **机构/版本：** David Meeker / FEMM，v4.2
- **资料：** [Finite Element Method Magnetics User's Manual](https://www.femm.info/Archives/doc/manual42.pdf)
- **支持：** 2D 平面/轴对称低频磁场；BH 曲线插值；永磁材料、开放边界和 Lua 参数化。
- **边界：** 无 3D，不能表示端部、倾斜和周向多极效应。

<a id="SIM-02"></a>
### SIM-02 · Ansys 静磁分析

- **机构/版本：** Ansys Mechanical，2025 R2
- **资料：** [5.7 Magnetostatic Analysis](https://ansyshelp.ansys.com/public/Views/Secured/corp/v252/en/wb_sim/ds_static_electromagnetic_analysis_type.html)
- **支持：** 3D 静磁流程、空气域、软磁 BH 与硬磁 Br/Hc/退磁曲线、网格对精度的影响。
- **边界：** 该页面是 Mechanical 静磁流程，不代表 Maxwell 没有 2D 能力。

<a id="SIM-03"></a>
### SIM-03 · Ansys Maxwell 自适应设置

- **机构/版本：** Ansys Maxwell，2024 R2
- **资料：** [Adaptive Setup for Non-Transient Solutions](https://ansyshelp.ansys.com/public/Views/Secured/Electronics/v242/en/Subsystems/Maxwell/Content/AdaptiveSetupforNonTransientSolutions.htm)
- **支持：** Percent Error 与 Max Passes 可终止自适应求解。
- **边界：** 全局求解收敛不证明传感器敏感体积内的场或角度误差已收敛。

<a id="SIM-04"></a>
### SIM-04 · Altair Flux 无限盒边界

- **机构/版本：** Altair Flux，2022.1
- **资料：** [Infinite Box Transformation](https://2022.help.altair.com/2022.1/flux/Flux/Help/english/UserGuide/English/topics/UtilisationDuneTransformationLaBoiteInfini.htm)
- **支持：** 无限盒假设无穷远零场；尺寸没有通用规则，应扩大并做敏感性检查。
- **边界：** 默认尺寸不是验证结论。

<a id="SIM-05"></a>
### SIM-05 · COMSOL 铁磁材料建模

- **机构/版本：** COMSOL，2018-01-23
- **资料：** [Modeling Ferromagnetic Materials in COMSOL Multiphysics](https://www.comsol.com/blogs/modeling-ferromagnetic-materials-in-comsol-multiphysics)
- **支持：** BH 饱和、剩磁、非线性永磁、温度与对称边界等建模思路。
- **边界：** 线性剩磁模型不包含完整退磁、磁滞和微观结构。

<a id="SIM-06"></a>
### SIM-06 · COMSOL 永磁模型

- **机构/版本：** COMSOL 6.3，2024
- **资料：** [Permanent Magnet Model](https://www.comsol.fr/model/download/1324601/models.acdc.permanent_magnet.pdf)
- **支持：** $B=\mu_0\mu_{rec}H+B_r$、永磁体几何、空气盒/无限元等实现示例。
- **边界：** 具体边界、网格和材料参数仍需按项目验证。

<a id="SIM-07"></a>
### SIM-07 · Ansys 电磁算例相关性

- **机构/版本：** Ansys LS-DYNA，2025 R1
- **资料：** [VM-LSDYNA-EMAG-010](https://ansyshelp.ansys.com/public/Views/Secured/corp/v251/en/lsdyna_vm/Hlp_V_VM_L_EMAG010.html)
- **支持：** 高梯度、弱场、探头相对尺寸会放大仿真与实测相关性误差。
- **边界：** 不是编码器静磁算例，只借鉴相关性方法。
