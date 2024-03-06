(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{318:function(t,s,e){"use strict";e.r(s);var n=e(14),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2024-02-29-2-6-more-on-chiseltest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2024-02-29-2-6-more-on-chiseltest"}},[t._v("#")]),t._v(" 2024.02.29-2.6 More on ChiselTest")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("iotesters")]),t._v(" "),s("th",[t._v("ChiselTest")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("poke")]),t._v(" "),s("td",[t._v("poke(c.io.in1, 6)")]),t._v(" "),s("td",[t._v("c.io.in1.poke(6.U)")])]),t._v(" "),s("tr",[s("td",[t._v("peek")]),t._v(" "),s("td",[t._v("peek(c.io.out1)")]),t._v(" "),s("td",[t._v("c.io.out1.peek()")])]),t._v(" "),s("tr",[s("td",[t._v("expect")]),t._v(" "),s("td",[t._v("expect(c.io.out1, 6)")]),t._v(" "),s("td",[t._v("c.io.out1.expect(6.U)")])]),t._v(" "),s("tr",[s("td",[t._v("step")]),t._v(" "),s("td",[t._v("step(1)")]),t._v(" "),s("td",[t._v("c.clock.step(1)")])]),t._v(" "),s("tr",[s("td",[t._v("initiate")]),t._v(" "),s("td",[t._v("Driver.execute(...) { c =>")]),t._v(" "),s("td",[t._v("test(...) { c =>")])])])]),t._v(" "),s("h2",{attrs:{id:"modules-with-decoupled-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-with-decoupled-interfaces"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Modules with Decoupled Interfaces")])]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" QueueModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ioType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entries"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" MultiIOModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Flipped"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Decoupled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ioType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" out "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Decoupled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ioType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  out "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",[s("li",[s("strong",[s("code",[t._v("class QueueModule[T <: Data](ioType: T, entries: Int) extends MultiIOModule")])]),t._v(" 定义了一个泛型队列模块，其中**"),s("code",[t._v("T <: Data")]),s("strong",[t._v("表示")]),s("code",[t._v("T")]),s("strong",[t._v("是")]),s("code",[t._v("Data")]),s("strong",[t._v("类型或其子类型。")]),s("code",[t._v("ioType")]),s("strong",[t._v("是队列中数据的类型，")]),s("code",[t._v("entries")]),t._v("**是队列的大小。")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("Decoupled(ioType)")]),s("strong",[t._v("是一个Chisel提供的高级接口，自动包含了")]),s("code",[t._v("valid")])]),t._v("、**"),s("code",[t._v("bits")]),s("strong",[t._v("和")]),s("code",[t._v("ready")]),s("strong",[t._v("信号。")]),s("code",[t._v("valid")]),s("strong",[t._v("和")]),s("code",[t._v("bits")]),s("strong",[t._v("组合用于传输有效数据，而")]),s("code",[t._v("ready")]),s("strong",[t._v("信号用于流量控制。当你声明一个")]),s("code",[t._v("Decoupled")]),t._v("**接口时，这些信号都会被自动创建。")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("IO(Flipped(Decoupled(ioType)))")])]),t._v(" 创建了一个输入端口，**"),s("code",[t._v("Flipped")]),s("strong",[t._v("意味着通常的输入输出方向被反转（即原本是输出的")]),s("code",[t._v("valid")]),s("strong",[t._v("和")]),s("code",[t._v("bits")]),s("strong",[t._v("成为输入，原本是输入的")]),s("code",[t._v("ready")]),s("strong",[t._v("成为输出），")]),s("code",[t._v("Decoupled")]),t._v("**表示它是一个可以被反压的接口。")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("out <> Queue(in, entries)")])]),t._v(" 将输出端口**"),s("code",[t._v("out")]),s("strong",[t._v("连接到一个新建的")]),s("code",[t._v("Queue")]),s("strong",[t._v("实例，")]),s("code",[t._v("Queue(in, entries)")]),s("strong",[t._v("创建了一个队列，其中")]),s("code",[t._v("in")]),s("strong",[t._v("是输入端口，")]),s("code",[t._v("entries")]),s("strong",[t._v("是队列大小。")]),s("code",[t._v("<>")]),s("strong",[t._v("是连接操作符，表示双向连接。确保了数据可以从")]),s("code",[t._v("in")]),s("strong",[t._v("流向队列，经过处理后，再从队列流向")]),s("code",[t._v("out")]),t._v("**。")])]),t._v(" "),s("h3",{attrs:{id:"enqueuenow-and-expectdequeuenow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enqueuenow-and-expectdequeuenow"}},[t._v("#")]),t._v(" "),s("strong",[t._v("EnqueueNow and expectDequeueNow")])]),t._v(" "),s("p",[t._v("**"),s("code",[t._v("EnqueueNow")]),s("strong",[t._v("和")]),s("code",[t._v("expectDequeueNow")]),s("strong",[t._v("是用于测试队列行为的方法。")]),s("code",[t._v("EnqueueNow")]),s("strong",[t._v("用于立即将数据入队，而不需要等待队列准备好。")]),s("code",[t._v("expectDequeueNow")]),t._v("**用于立即从队列中出队数据，并验证其值是否符合预期。这两个方法都是在基于队列的测试中非常有用，使得测试代码可以直接控制和验证队列中数据的流动。这样，测试者可以确保队列正确地处理了入队和出队操作，并且数据的传输符合设计的预期。")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" QueueModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.")]),t._v("W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entries "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example testsequence showing the use and behavior of Queue")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setSourceClock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initSink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setSinkClock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" testVector "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Seq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabulate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("U "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    testVector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("testVector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foreach "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n      c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enqueueNow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expectDequeueNow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("There is some required boiler plate "),s("code",[t._v("initSource")]),t._v(", "),s("code",[t._v("setSourceClock")]),t._v(", etc that is necessary to ensure that the "),s("code",[t._v("ready")]),t._v(" and "),s("code",[t._v("valid")]),t._v(" fields are all initialized correctly at the beginning of the test.")]),t._v(" "),s("h3",{attrs:{id:"enqueueseq-and-dequeueseq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enqueueseq-and-dequeueseq"}},[t._v("#")]),t._v(" EnqueueSeq and DequeueSeq")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("EnqueueSeq")])]),t._v(" 允许你一次性将一个序列的元素批量入队，这对于测试需要连续多个数据处理的场景特别有用。"),s("strong",[s("code",[t._v("DequeueSeq")])]),t._v(", 相应地，用于一次性从队列中出队多个元素，并验证这些元素是否符合预期的序列。"),s("code",[t._v("enqueueSeq")]),t._v(" must finish before the "),s("code",[t._v("expectDequeueSeq")]),t._v(" can begin. This example would fail if the "),s("code",[t._v("testVector")]),t._v("'s size is made larger than the queue depth, because the queue would fill up and not be able to complete the "),s("code",[t._v("enqueueSeq")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"fork-and-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork-and-join"}},[t._v("#")]),t._v(" Fork and Join")]),t._v(" "),s("p",[t._v("**"),s("code",[t._v("fork")]),s("strong",[t._v("和")]),s("code",[t._v("join")]),s("strong",[t._v("用于创建并发测试，允许同时执行多个操作或测试场景。使用")]),s("code",[t._v("fork")]),s("strong",[t._v("可以启动一个并发的测试过程，这个过程可以与主测试流程同时运行。可以在")]),s("code",[t._v("fork")]),s("strong",[t._v("后使用多个测试命令定义并发执行的操作。随后，")]),s("code",[t._v("join")]),t._v("**用于等待所有并发启动的测试过程完成。这样，你可以在一个测试中执行多个并行操作，例如同时对多个模块输入不同的信号，或者同时观察多个输出。这在需要模拟复杂交互或并行处理时特别有用。")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" QueueModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.")]),t._v("W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entries "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example testsequence showing the use and behavior of Queue")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setSourceClock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initSink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setSinkClock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" testVector "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Seq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabulate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("U "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    fork "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enqueueSeq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("testVector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fork "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expectDequeueSeq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("testVector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("虽然**"),s("code",[t._v("fork")]),s("strong",[t._v("启动了两个并发过程，似乎表明")]),s("code",[t._v("c.in.enqueueSeq(testVector)")]),s("strong",[t._v("和")]),s("code",[t._v("c.out.expectDequeueSeq(testVector)")]),s("strong",[t._v("应该同时执行，但实际上，它们在逻辑上是有先后顺序的。")]),s("code",[t._v("enqueueSeq")]),s("strong",[t._v("首先向队列中填充数据，而")]),s("code",[t._v("expectDequeueSeq")]),s("strong",[t._v("则等待这些数据从队列中出现并验证它们。在ChiselTest中，")]),s("code",[t._v("fork")]),s("strong",[t._v("创建的并发线程会同时开始执行，但是")]),s("code",[t._v("expectDequeueSeq")]),t._v("**自然会在等待有数据可以出队之后才开始验证，确保了数据的正确流向和测试的逻辑顺序。")])])}),[],!1,null,null,null);s.default=a.exports}}]);