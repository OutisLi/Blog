(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{311:function(a,t,s){a.exports=s.p+"assets/img/20.0ec3fffd.png"},414:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2024-04-02-练习-2-用-make-来代替-python"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2024-04-02-练习-2-用-make-来代替-python"}},[a._v("#")]),a._v(" 2024.04.02-练习 2：用 Make 来代替 Python")]),a._v(" "),t("h2",{attrs:{id:"_1-使用-make"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-make"}},[a._v("#")]),a._v(" 1. 使用 Make")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" ex1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Wall"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" ex1\n")])])]),t("p",[a._v("第一个命令中你告诉 make，“我想创建名为 ex1 的文件”。于是 Make 执行下面的动作：")]),a._v(" "),t("ul",[t("li",[a._v("文件"),t("code",[a._v("ex1")]),a._v("存在吗？")]),a._v(" "),t("li",[a._v("没有。好的，有没有其他文件以"),t("code",[a._v("ex1")]),a._v("开头？")]),a._v(" "),t("li",[a._v("有，叫做"),t("code",[a._v("ex1.c")]),a._v("。我知道如何构建"),t("code",[a._v(".c")]),a._v("文件吗？")]),a._v(" "),t("li",[a._v("是的，我会运行命令"),t("code",[a._v("cc ex1.c -o ex1")]),a._v("来构建它。")]),a._v(" "),t("li",[a._v("我将使用"),t("code",[a._v("cc")]),a._v("从"),t("code",[a._v("ex1.c")]),a._v("文件来为你构建"),t("code",[a._v("ex1")]),a._v("。")])]),a._v(" "),t("p",[a._v("上面列出的第二条命令是一种向 make 命令传递“修改器”的途径。如果你不熟悉 Unix shell 如何工作，你可以创建这些“环境变量”，它们会在程序运行时生效。有时你会用一条类似于"),t("code",[a._v('export CFLAGS="-Wall"')]),a._v("的命令来执行相同的事情，取决于你所用的 shell。然而你可以仅仅把它们放到你想执行的命令前面，于是环境变量只会在程序运行时有效。")]),a._v(" "),t("p",[a._v("在这个例子中我执行了"),t("code",[a._v('CFLAGS="-Wall" make ex1')]),a._v("，所以它会给 make 通常使用的"),t("code",[a._v("cc")]),a._v("命令添加"),t("code",[a._v("-Wall")]),a._v("选项。这行命令告诉"),t("code",[a._v("cc")]),a._v("编译器要报告所有的警告（然而实际上不可能报告所有警告）。")]),a._v(" "),t("p",[a._v("实际上你可以深入探索使用 make 的上述方法，但是先让我们来看看"),t("code",[a._v("Makefile")]),a._v("，以便让你对 make 了解得更多一点。首先，创建文件并写入以下内容：")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("CFLAGS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-Wall -g\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("clean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    rm -f ex1\n")])])]),t("p",[a._v("将文件在你的当前文件夹上保存为"),t("code",[a._v("Makefile")]),a._v("。Make 会自动假设当前文件夹中有一个叫做"),t("code",[a._v("Makefile")]),a._v("的文件，并且会执行它。此外，一定要注意：确保你只输入了 TAB 字符，而不是空格和 TAB 的混合。")]),a._v(" "),t("p",[t("code",[a._v("Makefile")]),a._v("向你展示了 make 的一些新功能。首先我们在文件中设置"),t("code",[a._v("CFLAGS")]),a._v("，所以之后就不用再设置了。并且，我们添加了"),t("code",[a._v("-g")]),a._v("标识来获取调试信息。接着我们写了一个叫做"),t("code",[a._v("clean")]),a._v("的部分，它告诉 make 如何清理我们的小项目。")]),a._v(" "),t("p",[a._v("确保它和你的"),t("code",[a._v("ex1.c")]),a._v("文件在相同的目录中，之后运行以下命令：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" ex1\n")])])]),t("h2",{attrs:{id:"_2-makefile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-makefile"}},[a._v("#")]),a._v(" 2. Makefile")]),a._v(" "),t("h3",{attrs:{id:"_2-1-语法规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-语法规则"}},[a._v("#")]),a._v(" 2.1 语法规则")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("目标 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 依赖 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\t命令1\n\t命令2\n\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),t("p",[a._v("Makefile 的核心规则，类似于一位厨神做菜，目标就是做好一道菜，那么所谓的依赖就是各种食材，各种厨具等等，然后需要厨师好的技术方法类似于命令，才能作出一道好菜。同时这些依赖也有可能此时并不存在，需要现场制作，或者是由其他厨师做好，那么这个依赖就成为了其他规则的目标，该目标也会有他自己的依赖和命令。这样就形成了一层一层递归依赖组成了 Makefile 文件。Makefile 并不会关心命令是如何执行的，仅仅只是会去执行所有定义的命令，和我们平时直接输入命令行是一样的效果。")]),a._v(" "),t("p",[a._v("1、目标即要生成的文件。如果目标文件的更新时间晚于依赖文件更新时间，则说明依赖文件没有改动，目标文件不需要重新编译。否则会进行重新编译并更新目标文件。")]),a._v(" "),t("p",[a._v("2、默认情况下 Makefile 的第一个目标为终极目标。")]),a._v(" "),t("p",[a._v("3、依赖：即目标文件由哪些文件生成。")]),a._v(" "),t("p",[a._v("4、命令：即通过执行命令由依赖文件生成目标文件。注意每条命令之前必须有一个 tab 保持缩进，这是语法要求（会有一些编辑工具默认 tab 为 4 个空格，会造成 Makefile 语法错误）。")]),a._v(" "),t("p",[a._v("5、all：Makefile 文件默认只生成第一个目标文件即完成编译，但是我们可以通过 all 指定所需要生成的目标文件。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-变量"}},[a._v("#")]),a._v(" 2.2 变量")]),a._v(" "),t("p",[t("code",[a._v("$")]),a._v('符号表示取变量的值，当变量名多于一个字符时，使用"( )"')]),a._v(" "),t("p",[t("code",[a._v("$")]),a._v("符的其他用法")]),a._v(" "),t("p",[t("code",[a._v("$^")]),a._v(" 表示所有的依赖文件")]),a._v(" "),t("p",[t("code",[a._v("$@")]),a._v(" 表示生成的目标文件")]),a._v(" "),t("p",[t("code",[a._v("$<")]),a._v(" 代表第一个依赖文件")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("SRC "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wildcard")]),a._v(" *.c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOBJ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("patsubst")]),a._v(" %.c, %.o, "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("ALL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" hello.out\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("hello.out")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OBJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        gcc "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$^")]),a._v(" -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),a._v("(OBJ)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        gcc -c "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$^")]),a._v(" -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2-3-变量赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-变量赋值"}},[a._v("#")]),a._v(" 2.3 变量赋值")]),a._v(" "),t("p",[a._v('1、"'),t("strong",[a._v("=")]),a._v('"是最普通的等号，在 Makefile 中容易搞错赋值等号，使用 “=”进行赋值，变量的值是整个 Makefile 中最后被指定的值。')]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("VIR_A "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" A\nVIR_B "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("VIR_A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" B\nVIR_A "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" AA\n")])])]),t("p",[a._v("经过上面的赋值后，最后 VIR_B 的值是 AA B，而不是 A B，在 make 时，会把整个 Makefile 展开，来决定变量的值")]),a._v(" "),t("p",[a._v('2、"'),t("strong",[a._v(":=")]),a._v('" 表示直接赋值，赋予当前位置的值。')]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("VIR_A "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" A\nVIR_B "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("VIR_A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" B\nVIR_A "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" AA\n")])])]),t("p",[a._v("最后 BIR_B 的值是 A B，即根据当前位置进行赋值。因此相当于“=”，“：=”才是真正意义上的直接赋值")]),a._v(" "),t("p",[a._v('3、"'),t("strong",[a._v("?=")]),a._v('" 表示如果该变量没有被赋值，赋值予等号后面的值。')]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("VIR "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?=")]),a._v(" new_value\n")])])]),t("p",[a._v("如果 VIR 在之前没有被赋值，那么 VIR 的值就为 new_value。")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("VIR "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" old_value\nVIR "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?=")]),a._v(" new_value\n")])])]),t("p",[a._v("这种情况下，VIR 的值就是 old_value")]),a._v(" "),t("p",[a._v('4、"'),t("strong",[a._v("+=")]),a._v('"和平时写代码的理解是一样的，表示将符号后面的值添加到前面的变量上')]),a._v(" "),t("h3",{attrs:{id:"_2-4-预定义变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-预定义变量"}},[a._v("#")]),a._v(" 2.4 预定义变量")]),a._v(" "),t("p",[a._v("CC：c 编译器的名称，默认值为 cc。cpp c 预编译器的名称默认值为$(CC) -E")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("CC "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" gcc\n")])])]),t("p",[a._v("回显问题，Makefile 中的命令都会被打印出来。如果不想打印命令部分 可以使用@去除回显")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("@")]),a._v("echo "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"clean done!"')]),a._v("\n")])])]),t("p",[t("code",[a._v("@")]),a._v("符号：在"),t("code",[a._v("Makefile")]),a._v("中，当你在命令行前加上"),t("code",[a._v("@")]),a._v("符号，它告诉"),t("code",[a._v("make")]),a._v("在执行这个命令时不要将命令本身输出到标准输出（即不在控制台显示命令）。通常，"),t("code",[a._v("make")]),a._v("会打印每个命令到标准输出，然后执行它。通过在命令前加上"),t("code",[a._v("@")]),a._v("符号，你可以避免显示命令，只显示命令的输出或者执行结果。这可以让你的构建输出看起来更简洁。")]),a._v(" "),t("h3",{attrs:{id:"_2-5-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-函数"}},[a._v("#")]),a._v(" 2.5 函数")]),a._v(" "),t("p",[a._v("通配符 "),t("code",[a._v("SRC = $(wildcard ./*.c)")]),a._v(" 匹配目录下所有.c 文件，并将其赋值给 SRC 变量。")]),a._v(" "),t("p",[t("code",[a._v("OBJ = $(patsubst %.c, %.o, $(SRC))")]),a._v(" 这个函数有三个参数，意思是取出 SRC 中的所有值，然后将.c 替换为.o 最后赋值给 OBJ 变量。")]),a._v(" "),t("p",[a._v("示例：如果目录下有很多个.c 源文件，就不需要写很多条规则语句了，而是可以像下面这样写")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("SRC "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wildcard")]),a._v(" *.c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOBJ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("patsubst")]),a._v(" %.c, %.o, "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("ALL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" hello.out\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("hello.out")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OBJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        gcc "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OBJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" -o hello.out\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),a._v("(OBJ)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        gcc -c "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OBJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("这里先将所有.c 文件编译为 .o 文件，这样后面更改某个 .c 文件时，其他的 .c 文件将不在编译，而只是编译有更改的 .c 文件，可以大大提高大项目中的编译速度。")]),a._v(" "),t("h3",{attrs:{id:"_2-6-伪目标-phony"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-伪目标-phony"}},[a._v("#")]),a._v(" 2.6 伪目标 .PHONY")]),a._v(" "),t("p",[a._v("伪目标只是一个标签，clean 是个伪目标没有依赖文件，只有用 make 来调用时才会执行")]),a._v(" "),t("p",[a._v("当目录下有与 make 命令 同名的文件时 执行 make 命令就会出现错误。")]),a._v(" "),t("p",[a._v("解决办法就是使用伪目标")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("SRC "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wildcard")]),a._v(" *.c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOBJ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("patsubst")]),a._v(" %.c, %.o, "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("ALL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" hello.out\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("hello.out")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OBJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        gcc "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$<")]),a._v(" -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),a._v("(OBJ)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        gcc -c "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$<")]),a._v(" -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("clean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        rm -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OBJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" hello.out\n\n"),t("span",{pre:!0,attrs:{class:"token builtin-target builtin"}},[a._v(".PHONY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" clean ALL\n")])])]),t("p",[a._v("通常也会把 ALL 设置成伪目标")]),a._v(" "),t("h3",{attrs:{id:"_2-7-其他常用功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-其他常用功能"}},[a._v("#")]),a._v(" 2.7 其他常用功能")]),a._v(" "),t("p",[a._v("代码清理 clean")]),a._v(" "),t("p",[a._v("我们可以编译一条属于自己的 clean 语句，来清理 make 命令所产生的所有文件，列如")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("SRC "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wildcard")]),a._v(" *.c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOBJ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("patsubst")]),a._v(" %.c, %.o, "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("ALL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" hello.out\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("hello.out")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OBJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        gcc "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$<")]),a._v(" -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),a._v("(OBJ)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        gcc -c "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$<")]),a._v(" -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("clean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        rm -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OBJ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" hello.out\n")])])]),t("h3",{attrs:{id:"_2-8-嵌套执行-makefile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-嵌套执行-makefile"}},[a._v("#")]),a._v(" 2.8 嵌套执行 Makefile")]),a._v(" "),t("p",[a._v("在一些大工程中，会把不同模块或不同功能的源文件放在不同的目录中，我们可以在每个目录中都写一个该目录的 Makefile 这有利于让我们的 Makefile 变的更加简洁，不至于把所有东西全部写在一个 Makefile 中。")]),a._v(" "),t("p",[a._v("列如在子目录 subdir 目录下有个 Makefile 文件，来指明这个目录下文件的编译规则。外部总 Makefile 可以这样写")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("subsystem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            cd subdir && "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MAKE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n其等价于：\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("subsystem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MAKE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" -C subdir\n")])])]),t("p",[a._v('定义$(MAKE)宏变量的意思是，也许我们的 make 需要一些参数，所以定义成一个变量比较有利于维护。两个例子意思都是先进入"subdir"目录，然后执行 make 命令')]),a._v(" "),t("p",[a._v('我们把这个 Makefile 叫做总控 Makefile，总控 Makefile 的变量可以传递到下级的 Makefile 中，但是不会覆盖下层 Makefile 中所定义的变量，除非指定了 "-e"参数。')]),a._v(" "),t("p",[a._v("如果传递变量到下级 Makefile 中，那么可以使用这样的声明 "),t("code",[a._v("export")]),a._v(" 如果不想让某些变量传递到下级 Makefile，可以使用 "),t("code",[a._v("unexport")])]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" variable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value\n等价于\nvariable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" variable\n等价于\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" variable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" value\n等价于\nvariable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" value\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" variable\n如果需要传递所有变量，那么只要一个"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v("就行了。后面什么也不用跟，表示传递所有变量\n")])])]),t("h3",{attrs:{id:"_2-9-指定头文件路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-指定头文件路径"}},[a._v("#")]),a._v(" 2.9 指定头文件路径")]),a._v(" "),t("p",[a._v('一般都是通过"'),t("strong",[a._v("-I")]),a._v('"（大写 i）来指定，假设头文件在： '),t("code",[a._v("/home/develop/include")])]),a._v(" "),t("p",[a._v("则可以通过-I 指定： "),t("code",[a._v("-I/home/develop/include")]),a._v(" 将该目录添加到头文件搜索路径中")]),a._v(" "),t("p",[a._v("在 Makefile 中则可以这样写：")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("CFLAGS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-I/home/develop/"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("include")]),a._v("\n")])])]),t("p",[a._v("然后在编译的时候，引用 CFLAGS 即可，如下")]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("yourapp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("*.c\n    gcc "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CFLAGS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" -o yourapp\n")])])]),t("h2",{attrs:{id:"_3-附加题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-附加题"}},[a._v("#")]),a._v(" 3. 附加题")]),a._v(" "),t("h3",{attrs:{id:"_3-1-创建目标all-ex1-可以以单个命令make构建ex1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建目标all-ex1-可以以单个命令make构建ex1"}},[a._v("#")]),a._v(" 3.1 创建目标"),t("code",[a._v("all:ex1")]),a._v("，可以以单个命令"),t("code",[a._v("make")]),a._v("构建"),t("code",[a._v("ex1")])]),a._v(" "),t("p",[t("img",{attrs:{src:s(311),alt:"Untitled"}})]),a._v(" "),t("div",{staticClass:"language-makefile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[a._v("CC"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("gcc\n\nCFLAGS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-Wall -g\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("ex1\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("ex1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("ex1.o\n\t"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CFLAGS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ex1.o -o ex1\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("ex1.o")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("ex1.c\n\t"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CFLAGS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" -c ex1.c -o ex1.o\n\n"),t("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("clean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\trm -f ex1 ex1.o\n"),t("span",{pre:!0,attrs:{class:"token builtin-target builtin"}},[a._v(".PHONY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" all clean\n")])])]),t("h3",{attrs:{id:"_3-2-阅读man-cc来了解关于-wall和-g行为的更多信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-阅读man-cc来了解关于-wall和-g行为的更多信息"}},[a._v("#")]),a._v(" 3.2 阅读"),t("code",[a._v("man cc")]),a._v("来了解关于"),t("code",[a._v("-Wall")]),a._v("和"),t("code",[a._v("-g")]),a._v("行为的更多信息")]),a._v(" "),t("p",[t("strong",[a._v("-Wall")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("Wall")]),a._v("是一个编译器选项，代表“warn all”，告诉编译器产生尽可能多的警告信息。尽管名称暗示它会启用所有警告，实际上它只启用了最常见的一组警告。这些警告可以帮助开发者发现代码中的潜在问题，比如变量未使用、可能的数据类型不匹配、未初始化的变量等。")]),a._v(" "),t("li",[a._v("使用"),t("code",[a._v("Wall")]),a._v("是一种很好的做法，因为它可以帮助你提前识别潜在的错误或不一致，从而提高代码质量。在开发过程中，尽量解决所有"),t("code",[a._v("Wall")]),a._v("引发的警告，可以避免未来发生更复杂的问题。")])]),a._v(" "),t("p",[t("strong",[a._v("-g")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("g")]),a._v("选项用于在编译时生成调试信息。这些调试信息包括了程序中的变量、函数、类等符号的名称和类型信息，以及它们在源代码中的位置。这使得调试器（如 GDB）能够理解程序的结构，允许开发者进行断点调试、单步执行、查看变量值等调试操作。")]),a._v(" "),t("li",[a._v("在不使用"),t("code",[a._v("g")]),a._v("选项的情况下编译的程序仍然可以运行，但如果需要调试，缺少调试信息会让这一过程变得非常困难。因此，开发阶段建议总是加上"),t("code",[a._v("g")]),a._v("选项来编译程序，以便在遇到问题时能够更容易地调试。")]),a._v(" "),t("li",[a._v("需要注意的是，添加"),t("code",[a._v("g")]),a._v("选项编译的程序会因为包含了额外的调试信息而变得更大。在发布产品时，通常会移除调试信息（不使用"),t("code",[a._v("g")]),a._v("选项或使用像"),t("code",[a._v("s")]),a._v("这样的选项来剔除调试信息），以减小程序的大小和提高运行时性能。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);