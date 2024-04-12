(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{299:function(l,v,_){l.exports=_.p+"assets/img/Vivado.3cc10be4.png"},300:function(l,v,_){l.exports=_.p+"assets/img/Vivado1.ffa29b16.png"},393:function(l,v,_){"use strict";_.r(v);var i=_(14),s=Object(i.a)({},(function(){var l=this,v=l._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[v("h1",{attrs:{id:"_2023-11-15-vivado"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2023-11-15-vivado"}},[l._v("#")]),l._v(" 2023.11.15-Vivado")]),l._v(" "),v("h2",{attrs:{id:"_1-rtl-schematic-synthesis-schematic"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-rtl-schematic-synthesis-schematic"}},[l._v("#")]),l._v(" 1. RTL Schematic & Synthesis Schematic")]),l._v(" "),v("p",[l._v("在 Vivado 或类似的 FPGA 开发环境中，您会遇到 RTL (Register Transfer Level) 分析中的 Schematic 和 Synthesis 过程中的 Schematic。它们虽然看起来相似，但代表了不同阶段的电路设计和功能。")]),l._v(" "),v("ol",[v("li",[v("p",[l._v("RTL Analysis Schematic:")]),l._v(" "),v("ul",[v("li",[l._v("这个 Schematic 是您用硬件描述语言（如 Verilog）编写的代码的直接可视化表示。")]),l._v(" "),v("li",[l._v("它展示了代码中定义的模块、它们的互联以及信号流。")]),l._v(" "),v("li",[l._v("RTL Schematic 重点在于逻辑功能的实现，而不是实际硬件如何实现这些功能。它更多地表示逻辑结构而非物理结构。")]),l._v(" "),v("li",[l._v("这是设计验证的早期阶段，您可以在这里检查逻辑错误或结构问题。")])]),l._v(" "),v("p",[v("img",{attrs:{src:_(299),alt:"Untitled"}})])]),l._v(" "),v("li",[v("p",[l._v("Synthesis Schematic:")]),l._v(" "),v("ul",[v("li",[l._v("经过综合后的 Schematic 是将 RTL 设计转换为实际 FPGA 内部资源（如查找表（LUTs）、寄存器和逻辑单元）的表示。")]),l._v(" "),v("li",[l._v("这个过程涉及优化、逻辑最小化、资源分配和时序分析。")]),l._v(" "),v("li",[l._v("Synthesis Schematic 展示了设计如何映射到 FPGA 的实际硬件上，包括使用的具体资源和连接。")]),l._v(" "),v("li",[l._v("这是设计流程的后期阶段，您可以在这里优化性能、资源使用和满足时序要求。")])]),l._v(" "),v("p",[v("img",{attrs:{src:_(300),alt:"Untitled"}})])])]),l._v(" "),v("p",[l._v("总结来说，RTL Schematic 关注于逻辑设计的表示，而 Synthesis Schematic 则关注于该设计在 FPGA 上的物理实现。理解两者的区别对于 FPGA 开发至关重要，因为这影响着您如何优化设计以及解决可能出现的问题。")]),l._v(" "),v("h2",{attrs:{id:"_2-project-汇总中的-lut-ff-io-bufg"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-project-汇总中的-lut-ff-io-bufg"}},[l._v("#")]),l._v(" 2. Project 汇总中的 LUT，FF，IO，BUFG")]),l._v(" "),v("p",[l._v("在 Vivado 或类似的 FPGA 设计项目中，您会遇到几个关键的资源指标，如 LUT、FF、IO 和 BUFG。这些指标是 FPGA 设计和资源利用的重要部分。下面是每个术语的简要解释：")]),l._v(" "),v("ol",[v("li",[l._v("LUT (Look-Up Table):\n"),v("ul",[v("li",[l._v("LUT 是 FPGA 中实现逻辑功能的基本单元。")]),l._v(" "),v("li",[l._v("它本质上是一个可编程的真值表，可以配置为执行各种逻辑操作（如 AND、OR、NOT、XOR 等）。")]),l._v(" "),v("li",[l._v("LUT 的大小和数量是 FPGA 性能和复杂性的关键决定因素。在设计中，LUT 的使用量通常是衡量设计复杂度的一个重要指标。")])])]),l._v(" "),v("li",[l._v("FF (Flip-Flop):\n"),v("ul",[v("li",[l._v("FF 是用于存储数据的基本存储元件，通常用于实现寄存器、计数器等。")]),l._v(" "),v("li",[l._v("在 FPGA 中，FF 通常与 LUT 配对使用，以实现存储和逻辑功能的组合。")]),l._v(" "),v("li",[l._v("FF 的数量通常表明了设计中的数据存储需求和时序复杂度。")])])]),l._v(" "),v("li",[l._v("IO (Input/Output Ports):\n"),v("ul",[v("li",[l._v("这些是 FPGA 与外界通信的端口，包括输入端口和输出端口。")]),l._v(" "),v("li",[l._v("IO 的数量和类型（如单端或差分）取决于 FPGA 的物理特性和您的设计需求。")]),l._v(" "),v("li",[l._v("在设计中，您需要确保 FPGA 有足够的 IO 端口来满足您的外部连接需求。")])])]),l._v(" "),v("li",[l._v("BUFG (Buffered Global Clock):\n"),v("ul",[v("li",[l._v("BUFG 是一种专用的时钟缓冲器，用于分配全局时钟信号。")]),l._v(" "),v("li",[l._v("在复杂的 FPGA 设计中，确保时钟信号的稳定和同步是非常重要的。BUFG 能够在整个芯片上稳定地分配时钟信号。")]),l._v(" "),v("li",[l._v("BUFG 的使用和配置对于实现有效的时钟管理和避免时钟偏移非常关键。")])])])]),l._v(" "),v("p",[l._v("理解这些资源对于 FPGA 设计至关重要，因为它们直接影响您的设计能否在特定的 FPGA 上实现，以及该设计的性能和效率。在 Vivado 的项目汇总中，这些参数帮助您评估设计对 FPGA 资源的利用情况。")]),l._v(" "),v("h2",{attrs:{id:"_3-fpga-的组成构造"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-fpga-的组成构造"}},[l._v("#")]),l._v(" 3. FPGA 的组成构造")]),l._v(" "),v("p",[l._v("FPGA (Field-Programmable Gate Array) 是一种高度灵活的可编程硬件，它由多个不同的元件构成，共同实现复杂的数字逻辑功能。以下是 FPGA 内部主要组成部分的概述：")]),l._v(" "),v("ol",[v("li",[l._v("查找表 (LUTs):\n"),v("ul",[v("li",[l._v("如您所述，LUTs 是 FPGA 的核心，用于实现基本的逻辑功能。它们通过存储预定义的输出值来模拟逻辑门的行为。")]),l._v(" "),v("li",[l._v("LUTs 可以通过编程来实现简单的逻辑操作（如 AND、OR、NOT）或更复杂的组合逻辑。")])])]),l._v(" "),v("li",[l._v("多路选择器 (MUXes):\n"),v("ul",[v("li",[l._v("虽然在传统的逻辑电路中，MUXes 是通过逻辑门实现的，但在 FPGA 中，它们通常与 LUTs 结合或独立实现。")]),l._v(" "),v("li",[l._v("MUXes 在 FPGA 设计中用于根据控制信号选择不同的输入路径，这对于创建复杂的数据路径和逻辑结构至关重要。")])])]),l._v(" "),v("li",[l._v("触发器 (Flip-Flops):\n"),v("ul",[v("li",[l._v("Flip-Flops 用于存储信息，是实现时序逻辑的关键元件。它们通常与 LUTs 配对，以构成可存储状态的逻辑单元。")])])]),l._v(" "),v("li",[l._v("编程互联资源 (Programmable Interconnects):\n"),v("ul",[v("li",[l._v("这些是连接 FPGA 内部不同部件的路径。它们可以被编程以形成任何所需的逻辑网络，从而将 LUTs、Flip-Flops 和其他资源连接起来。")])])]),l._v(" "),v("li",[l._v("输入/输出块 (I/O Blocks):\n"),v("ul",[v("li",[l._v("这些块连接 FPGA 和外部世界，提供数据输入和输出功能。它们可以配置为不同类型的接口（如单端或差分）。")])])]),l._v(" "),v("li",[l._v("专用硬件资源:\n"),v("ul",[v("li",[l._v("许多 FPGA 还包含专用的硬件资源，如 DSP (数字信号处理) 块、内存控制器、时钟管理模块（如 PLLs 和 BUFGs），以及其他特定功能块。")])])]),l._v(" "),v("li",[l._v("存储资源:\n"),v("ul",[v("li",[l._v("包括 RAM 块 (Block RAM) 或更小的存储单元，用于数据存储和缓冲。")])])])]),l._v(" "),v("p",[l._v("FPGA 的关键优势在于其高度可编程性和灵活性。设计师可以通过编程定义 LUTs、MUXes、Flip-Flops 以及互连的配置和组合方式，从而在没有物理改动硬件的情况下实现几乎任何数字逻辑设计。这种灵活性使得 FPGA 在快速原型制作、定制硬件加速和可重配置系统中非常有价值。")]),l._v(" "),v("p",[l._v("FPGA (Field-Programmable Gate Array) 是一种高度灵活的可编程硬件，它由多个不同的元件构成，共同实现复杂的数字逻辑功能。以下是 FPGA 内部主要组成部分的概述：")]),l._v(" "),v("ol",[v("li",[l._v("查找表 (LUTs):\n"),v("ul",[v("li",[l._v("如您所述，LUTs 是 FPGA 的核心，用于实现基本的逻辑功能。它们通过存储预定义的输出值来模拟逻辑门的行为。")]),l._v(" "),v("li",[l._v("LUTs 可以通过编程来实现简单的逻辑操作（如 AND、OR、NOT）或更复杂的组合逻辑。")])])]),l._v(" "),v("li",[l._v("多路选择器 (MUXes):\n"),v("ul",[v("li",[l._v("虽然在传统的逻辑电路中，MUXes 是通过逻辑门实现的，但在 FPGA 中，它们通常与 LUTs 结合或独立实现。")]),l._v(" "),v("li",[l._v("MUXes 在 FPGA 设计中用于根据控制信号选择不同的输入路径，这对于创建复杂的数据路径和逻辑结构至关重要。")])])]),l._v(" "),v("li",[l._v("触发器 (Flip-Flops):\n"),v("ul",[v("li",[l._v("Flip-Flops 用于存储信息，是实现时序逻辑的关键元件。它们通常与 LUTs 配对，以构成可存储状态的逻辑单元。")])])]),l._v(" "),v("li",[l._v("编程互联资源 (Programmable Interconnects):\n"),v("ul",[v("li",[l._v("这些是连接 FPGA 内部不同部件的路径。它们可以被编程以形成任何所需的逻辑网络，从而将 LUTs、Flip-Flops 和其他资源连接起来。")])])]),l._v(" "),v("li",[l._v("输入/输出块 (I/O Blocks):\n"),v("ul",[v("li",[l._v("这些块连接 FPGA 和外部世界，提供数据输入和输出功能。它们可以配置为不同类型的接口（如单端或差分）。")])])]),l._v(" "),v("li",[l._v("专用硬件资源:\n"),v("ul",[v("li",[l._v("许多 FPGA 还包含专用的硬件资源，如 DSP (数字信号处理) 块、内存控制器、时钟管理模块（如 PLLs 和 BUFGs），以及其他特定功能块。")])])]),l._v(" "),v("li",[l._v("存储资源:\n"),v("ul",[v("li",[l._v("包括 RAM 块 (Block RAM) 或更小的存储单元，用于数据存储和缓冲。")])])])]),l._v(" "),v("p",[l._v("FPGA 的关键优势在于其高度可编程性和灵活性。设计师可以通过编程定义 LUTs、MUXes、Flip-Flops 以及互连的配置和组合方式，从而在没有物理改动硬件的情况下实现几乎任何数字逻辑设计。这种灵活性使得 FPGA 在快速原型制作、定制硬件加速和可重配置系统中非常有价值。")])])}),[],!1,null,null,null);v.default=s.exports}}]);