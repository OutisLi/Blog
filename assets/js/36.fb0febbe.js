(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{341:function(t,s,a){t.exports=a.p+"assets/img/420.6fdcd694.png"},342:function(t,s,a){t.exports=a.p+"assets/img/421.bf08c958.png"},431:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2024-04-11-练习42-栈和队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2024-04-11-练习42-栈和队列"}},[t._v("#")]),t._v(" 2024.04.11-练习42：栈和队列")]),t._v(" "),s("h2",{attrs:{id:"_1-栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-栈"}},[t._v("#")]),t._v(" 1. 栈")]),t._v(" "),s("h3",{attrs:{id:"_1-1-头文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-头文件"}},[t._v("#")]),t._v(" 1.1 头文件")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifndef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("STACK_H")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("STACK_H")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list.h"')])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" List Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Stack_create")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Stack_destroy")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Stack_push")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Stack_peek")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("last"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Stack_count")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("STACK_FOREACH")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" V"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LIST_FOREACH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" V"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Stack_pop")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-2-单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-单元测试"}},[t._v("#")]),t._v(" 1.2 单元测试")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minunit.h"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<lcthw/stack.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<assert.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Stack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1 data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2 data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test3 data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("NUM_TESTS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")])])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    stack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stack_create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Failed to create stack."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Failed to make stack #2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stack_destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_push_pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" NUM_TESTS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stack_push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stack_peek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" tests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wrong next value."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stack_count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" NUM_TESTS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wrong count on push."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("STACK_FOREACH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VAL: %s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NUM_TESTS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stack_pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" tests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wrong value on pop."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stack_count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wrong count after pop."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all_tests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_suite_start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_run_test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_run_test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_push_pop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mu_run_test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_destroy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RUN_TESTS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("all_tests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(341),alt:"Untitled"}})]),t._v(" "),s("h2",{attrs:{id:"_2-队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-队列"}},[t._v("#")]),t._v(" 2. 队列")]),t._v(" "),s("h3",{attrs:{id:"_2-1-头文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-头文件"}},[t._v("#")]),t._v(" 2.1 头文件")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifndef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("QUEUE_H")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("QUEUE_H")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list.h"')])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" List Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Queue_create")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Queue_destroy")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Queue_send")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Queue_peek")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("first"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Queue_count")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("QUEUE_FOREACH")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" V"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LIST_FOREACH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" V"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("Queue_recv")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("List_remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-2-单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-单元测试"}},[t._v("#")]),t._v(" 2.2 单元测试")]),t._v(" "),s("p",[s("img",{attrs:{src:a(342),alt:"Untitled"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);