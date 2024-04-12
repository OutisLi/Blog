(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{464:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2023-06-14-geant4各版本的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2023-06-14-geant4各版本的安装"}},[a._v("#")]),a._v(" 2023.06.14-Geant4各版本的安装")]),a._v(" "),t("h2",{attrs:{id:"安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" build-essential\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v("\n// "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("aptitude")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" cmake libx11-dev libxext-dev libxtst-dev libxrender-dev libxmu-dev libxmuu-dev libhdf5-serial-dev hdf5-tools\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" libexpat1-dev libxerces-c-dev libxt-dev libmotif-dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" qt5* qt6* libqt5opengl5-dev\n")])])]),t("h2",{attrs:{id:"下载安装geant4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载安装geant4"}},[a._v("#")]),a._v(" 下载安装Geant4")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" Geant4_11.1.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://geant4-data.web.cern.ch/releases/geant4-v11.1.1.tar.gz\n// https://gitlab.cern.ch/geant4/geant4/-/archive/v10.5.1/geant4-v10.5.1.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzvf")]),a._v(" geant4-v11.1.1.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" build\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\ncmake "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DCMAKE_INSTALL_PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/tiancheng/Geant4_11.1.1 /home/tiancheng/geant4-v11.1.1\ncmake "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_INSTALL_DATA")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_BUILD_MULTITHREADED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_USE_GDML")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_USE_QT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_USE_OPENGL_X11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_USE_RAYTRACER_X11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_USE_NETWORKDAWN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_USE_XM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DGEANT4_USE_NETWORKVRML")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jN")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /root/Geant4/home/geant4/bin/geant4.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /root/Geant4/home/geant4/share/Geant4/geant4make/geant4make.sh\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);