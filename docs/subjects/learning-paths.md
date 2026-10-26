# 学习路径

学科体系现在有 22 篇正式文章。本页把它们组织成三条路线，避免初学者从第一页顺序读到材料参数就放弃，也避免有经验的工程师被迫重读基础。

每篇文章开头都写了“本篇回答、先修、预计阅读”，结尾有自测和工程出口。遇到具体客户问题时，可以从 [工作任务](../fae/index.md) 或[排障路径](../fae/troubleshooting.md)进入，再回链到对应原理。

## 路线一：零基础快速建立全貌

适合刚接触磁编码器、需要在较短时间理解“磁体—磁场—传感器—角度—电机”主链的读者。跳过材料微观机理和高频软磁细节。

| 顺序 | 文章 | 读完能回答 | 时间 |
| ---: | --- | --- | ---: |
| 1 | [从磁场到材料响应：B、H、M、J 与磁通](field-and-measurement.md) | B 和 H 有什么区别？单位怎样换？为什么局部读数不是材料参数？ | 20 min |
| 2 | [磁性从哪里来](magnetic-origin-and-classes.md) | 为什么铁、铁氧体能表现磁性？居里温度是什么？ | 15 min |
| 3 | [磁畴与畴壁](magnetic-domains.md) | 一块宏观不显磁性的铁内部发生了什么？ | 15 min |
| 4 | [技术磁化与磁滞回线](magnetization-and-hysteresis.md) | 怎样从回线读出 Br、Hc、Bs？软磁和永磁关注点为何相反？ | 25 min |
| 5 | [永磁参数、退磁曲线与工作点](permanent-magnet-parameters.md) | 数据表的 Br 为什么不是气隙场？负载线怎样决定工作点？ | 30 min |
| 6 | [从磁场到角度：信号链](angle-sensing.md) | Hall 与 MR 测什么？atan2 怎样得到 0–360°？ | 25 min |
| 7 | [编码器磁体、充磁图形与安装几何](encoder-magnet-and-mounting.md) | 取向、充磁、气隙和偏心怎样改变角度信号？ | 30 min |
| 8 | [极对数、机械角、电角度与编码器读数](motor-angle.md) | 机械转 30° 为何电角度是 210°？四个“角”分别指什么？ | 20 min |

**约 3 小时。** 如果只想理解选型讨论，这八篇足够建立共同语言；磁路、损耗和材料家族可以按需回补。

## 路线二：磁体与材料选型

适合负责磁体选型、来料验收、退磁和温度校核的工程师。重点是读曲线、判断工作点、区分材料家族，而不是芯片算法。

| 顺序 | 文章 | 读完能回答 | 时间 |
| ---: | --- | --- | ---: |
| 1 | [从磁场到材料响应](field-and-measurement.md) | B/H/M/J、Br/HcB/HcJ 的符号和单位 | 20 min |
| 2 | [磁各向异性与磁致伸缩](anisotropy.md) | 易轴从哪来？装错方向会怎样？ | 20 min |
| 3 | [磁通、磁阻与磁路](magnetic-circuits.md) | 气隙为什么常占磁阻主导？类比何时失效？ | 20 min |
| 4 | [退磁场与形状效应](demagnetizing-field-and-shape.md) | 为什么同一牌号换形状就表现不同？ | 20 min |
| 5 | [技术磁化与磁滞回线](magnetization-and-hysteresis.md) | 怎样看回线、读参数、比较软硬磁 | 25 min |
| 6 | [反磁化与矫顽力](coercivity-mechanisms.md) | 形核、钉扎和转动怎样决定抗退磁能力？ | 20 min |
| 7 | [永磁参数、退磁曲线与工作点](permanent-magnet-parameters.md) | 负载线、工作点、膝点和温度曲线族 | 30 min |
| 8 | [永磁材料家族](permanent-magnets.md) | 铁氧体、AlNiCo、SmCo、NdFeB 如何取舍？ | 20 min |
| 9 | [温度稳定性与退磁](magnet-stability-and-demagnetization.md) | 可逆、不可逆、永久损失怎样区分和验证？ | 25 min |

**约 3.5 小时。** 需要软磁侧选材时，改读[软磁性能参数](soft-magnetic-parameters.md)→[金属软磁与非晶纳米晶](soft-magnetic-materials.md)→[软磁铁氧体](soft-ferrites.md)，并先读[动态磁化、损耗与温度](loss-and-temperature.md)。

## 路线三：传感、误差与系统

适合做编码器方案、误差预算、现场角度异常分析的工程师。重点是信号链、几何、误差机理和输出定义。

| 顺序 | 文章 | 读完能回答 | 时间 |
| ---: | --- | --- | ---: |
| 1 | [从磁场到材料响应](field-and-measurement.md) | 统一场、单位和局部读数边界 | 20 min |
| 2 | [磁通、磁阻与磁路](magnetic-circuits.md) | 磁体到气隙的集总估算 | 20 min |
| 3 | [永磁参数、退磁曲线与工作点](permanent-magnet-parameters.md) | 磁体工作点与气隙场的区别 | 30 min |
| 4 | [磁电阻效应：AMR、GMR 与 TMR](magnetoresistance.md) | 电阻为什么随场变化？三种机理差在哪？ | 25 min |
| 5 | [从磁场到角度：信号链](angle-sensing.md) | 桥路、ADC、atan2、校准和场窗口 | 25 min |
| 6 | [编码器磁体、充磁图形与安装几何](encoder-magnet-and-mounting.md) | 端轴/侧轴/离轴/多极环的场与公差 | 30 min |
| 7 | [角度误差从哪里来](angle-error-mechanisms.md) | 偏置、幅值、正交与 1×/2×/p× 谐波 | 25 min |
| 8 | [极对数、机械角、电角度与编码器读数](motor-angle.md) | 四个“角”和 p 倍误差放大 | 20 min |
| 9 | [分辨率、采样、带宽与输出定义](encoder-output-and-dynamics.md) | 位数、延迟、滤波、回绕和协议 | 20 min |

**约 3.5 小时。** 之后进入 [FAE 误差预算](../fae/error-budget.md)和[排障路径](../fae/troubleshooting.md)，把机理转成项目检查项。

## 按问题反查

| 你现在的问题 | 先读 | 再进入 |
| --- | --- | --- |
| 数据表的 Br、HcB、HcJ 看不懂 | [永磁参数与工作点](permanent-magnet-parameters.md) | [FAE 选型](../fae/selection.md) |
| 客户说“磁铁高温后退磁了” | [温度稳定性与退磁](magnet-stability-and-demagnetization.md) | [FAE 排障](../fae/troubleshooting.md) |
| 不知道选铁氧体还是 NdFeB | [永磁材料家族](permanent-magnets.md) | [FAE 选型](../fae/selection.md) |
| 电机软磁件发热 | [动态磁化、损耗与温度](loss-and-temperature.md) | [FAE 仿真](../fae/simulation.md) |
| 磁环装上去角度就不对 | [编码器磁体与安装](encoder-magnet-and-mounting.md) | [角度误差机理](angle-error-mechanisms.md) |
| 角度误差有规律的波动 | [角度误差机理](angle-error-mechanisms.md) | [FAE 误差预算](../fae/error-budget.md) |
| 电角度和编码器读数对不上 | [极对数、机械角与电角度](motor-angle.md) | [FAE 排障](../fae/troubleshooting.md) |
| 编码器高速时滞后 | [分辨率、采样、带宽与输出](encoder-output-and-dynamics.md) | [FAE 选型](../fae/selection.md) |
| 想查某个符号或单位 | [术语与符号](glossary.md) | 返回对应文章 |

## 学习顺序的两条原则

1. **先建立“量—曲线—工作点”的语言，再进入材料牌号。** 直接看牌号表容易把某一温度、某一几何下的典型值当成保证值。
2. **先分清材料和器件，再谈系统精度。** 教材能支撑机理和经典模型，不能支撑某型号的场窗口、INL 或校准收益；这些必须回到现行数据手册、仿真和实测。
