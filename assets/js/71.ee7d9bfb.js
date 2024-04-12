(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{416:function(t,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2024-04-03-练习4-valgrind-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2024-04-03-练习4-valgrind-介绍"}},[t._v("#")]),t._v(" 2024.04.03-练习4：Valgrind 介绍")]),t._v(" "),a("h2",{attrs:{id:"_1-intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-intro"}},[t._v("#")]),t._v(" 1. Intro")]),t._v(" "),a("p",[t._v("Valgrind是一个编程工具，用于内存调试、内存泄漏检测，以及性能分析。它主要用于帮助开发者找出程序中的内存管理和线程使用错误，是Linux和macOS下常用的工具之一。Valgrind通过一个核心，提供了多种不同的工具，其中最著名的是Memcheck。Memcheck可以检测以下问题：")]),t._v(" "),a("ul",[a("li",[t._v("访问未初始化的内存")]),t._v(" "),a("li",[t._v("访问已经释放的内存")]),t._v(" "),a("li",[t._v("访问申请后未释放的内存（内存泄漏）")]),t._v(" "),a("li",[t._v("不当的堆栈使用")]),t._v(" "),a("li",[t._v("对"),a("code",[t._v("malloc")]),t._v("和"),a("code",[t._v("free")]),t._v("等堆管理函数的误用")])]),t._v(" "),a("p",[a("strong",[t._v("使用方法")])]),t._v(" "),a("p",[t._v("使用Valgrind的基本语法很简单。首先，确保你的程序是用调试信息编译的（通常是使用"),a("code",[t._v("gcc")]),t._v("的"),a("code",[t._v("-g")]),t._v("选项）。然后，使用下面的命令行格式运行Valgrind：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("valgrind "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" your_program "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("program_options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("其中，"),a("code",[t._v("[options]")]),t._v("是传递给Valgrind的选项（例如，选择不同的工具），"),a("code",[t._v("your_program")]),t._v("是你的程序的路径，"),a("code",[t._v("[program_options]")]),t._v("是传递给你的程序的任何选项。")]),t._v(" "),a("p",[a("strong",[t._v("示例：使用Memcheck检测内存泄漏")])]),t._v(" "),a("p",[t._v("假设你的可执行文件名为"),a("code",[t._v("my_program")]),t._v("，要使用Memcheck工具（Valgrind的默认工具），可以这样做：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("valgrind --leak-check"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("full ./my_program\n")])])]),a("ul",[a("li",[a("code",[t._v("-leak-check=full")]),t._v("选项告诉Memcheck提供每个内存泄漏的详细信息。")])]),t._v(" "),a("p",[t._v("Valgrind运行后，会在终端输出报告，其中包含了内存泄漏的信息、未初始化变量的使用等问题。")]),t._v(" "),a("h2",{attrs:{id:"_2-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-example"}},[t._v("#")]),t._v(" 2. Example")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Warning: This program is wrong on purpose. */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am %d years old.\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am %d inches tall.\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用 valgrind 运行，结果如下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Memcheck, a memory error detector\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Copyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2002")]),t._v("-2017, and GNU GPL'd, by Julian Seward et al.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Using Valgrind-3.18.1 and LibVEX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" rerun with "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copyright info\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Command: ./ex4\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Conditional jump or move depends on uninitialised value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x48EAAD6: __vfprintf_internal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vfprintf-internal.c:1516"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x48D479E: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printf.c:33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x109188: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  Uninitialised value was created by a stack allocation\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x109149: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Use of uninitialised value of size "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x48CE2EB: _itoa_word "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_itoa.c:177"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x48E9ABD: __vfprintf_internal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vfprintf-internal.c:1516"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x48D479E: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printf.c:33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x109188: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  Uninitialised value was created by a stack allocation\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x109149: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Conditional jump or move depends on uninitialised value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x48CE2FC: _itoa_word "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_itoa.c:177"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x48E9ABD: __vfprintf_internal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vfprintf-internal.c:1516"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x48D479E: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printf.c:33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x109188: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  Uninitialised value was created by a stack allocation\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x109149: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Conditional jump or move depends on uninitialised value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x48EA5C3: __vfprintf_internal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vfprintf-internal.c:1516"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x48D479E: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printf.c:33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x109188: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  Uninitialised value was created by a stack allocation\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x109149: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Conditional jump or move depends on uninitialised value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x48E9C05: __vfprintf_internal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vfprintf-internal.c:1516"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x48D479E: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printf.c:33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    by 0x109188: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  Uninitialised value was created by a stack allocation\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("    at 0x109149: main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex4.c:3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \nI am "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-16778360")]),t._v(" years old.\nI am "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" inches tall.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" HEAP SUMMARY:\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" use at exit: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" blocks\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("   total heap usage: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" allocs, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" frees, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4,096")]),t._v(" bytes allocated\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" All heap blocks were freed -- no leaks are possible\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" For lists of detected and suppressed errors, rerun with: "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("431815")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ERROR SUMMARY: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" errors from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" contexts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("suppressed: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("by 0x109188: main (ex4.c:8)：第八行 "),a("code",[t._v('printf("I am %d inches tall.\\n", height);')]),t._v(" 中有未初始化的量")]),t._v(" "),a("h2",{attrs:{id:"_3-附加题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-附加题"}},[t._v("#")]),t._v(" 3. 附加题")])])}),[],!1,null,null,null);a.default=r.exports}}]);