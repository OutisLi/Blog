(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{375:function(t,e,o){t.exports=o.p+"assets/img/4.5c72e81f.png"},473:function(t,e,o){"use strict";o.r(e);var r=o(14),v=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_04-🥙-目录挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_04-🥙-目录挂载"}},[t._v("#")]),t._v(" 04. 🥙 目录挂载")]),t._v(" "),e("h3",{attrs:{id:"现存问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现存问题"}},[t._v("#")]),t._v(" 现存问题")]),t._v(" "),e("ul",[e("li",[t._v("使用 Docker 运行后，我们改了项目代码不会立刻生效，需要重新"),e("code",[t._v("build")]),t._v("和"),e("code",[t._v("run")]),t._v("，很是麻烦。")]),t._v(" "),e("li",[t._v("容器里面产生的数据，例如 log 文件，数据库备份文件，容器删除后就丢失了。")])]),t._v(" "),e("blockquote",[e("p",[t._v("目录挂载解决以上问题")])]),t._v(" "),e("blockquote",[e("p",[t._v("本文档课件配套 视频教程")])]),t._v(" "),e("h3",{attrs:{id:"几种挂载方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几种挂载方式"}},[t._v("#")]),t._v(" 几种挂载方式")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("bind mount")]),t._v(" 直接把宿主机目录映射到容器内，适合挂代码目录和配置文件。可挂到多个容器上")]),t._v(" "),e("li",[e("code",[t._v("volume")]),t._v(" 由容器创建和管理，创建在宿主机，所以删除容器不会丢失，官方推荐，更高效，Linux 文件系统，适合存储数据库数据。可挂到多个容器上")]),t._v(" "),e("li",[e("code",[t._v("tmpfs mount")]),t._v(" 适合存储临时文件，存宿主机内存中。不可多容器共享。")])]),t._v(" "),e("p",[t._v("文档参考："),e("a",{attrs:{href:"https://docs.docker.com/storage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/storage/"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:o(375),alt:"Untitled"}})]),t._v(" "),e("h3",{attrs:{id:"挂载演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载演示"}},[t._v("#")]),t._v(" 挂载演示")]),t._v(" "),e("p",[e("code",[t._v("bind mount")]),t._v(" 方式用绝对路径 "),e("code",[t._v("-v D:/code:/app")])]),t._v(" "),e("p",[e("code",[t._v("volume")]),t._v(" 方式，只需要一个名字 "),e("code",[t._v("-v db-data:/app")])]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("p",[e("code",[t._v("docker run -p 8080:8080 --name test-hello -v D:/code:/app -d test:v1")])]),t._v(" "),e("blockquote",[e("p",[t._v("注意！")]),t._v(" "),e("p",[t._v("因为挂载后，容器里的代码就会替换为你本机的代码了，如果你代码目录没有"),e("code",[t._v("node_modules")]),t._v("目录，你需要在代码目录执行下"),e("code",[t._v("npm install --registry=https://registry.npm.taobao.org")]),t._v("确保依赖库都已经安装，否则可能会提示“Error: Cannot find module ‘koa’”")]),t._v(" "),e("p",[t._v("如果你的电脑没有安装 "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs"),e("OutboundLink")],1),t._v("，你需要安装一下才能执行上面的命令。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);