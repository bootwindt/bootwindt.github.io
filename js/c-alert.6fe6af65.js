(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c-alert"],{8566:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-wrap"},[s("h1",{staticClass:"w-full px-2 pt-2 font-bold text-3xl"},[e._v("Alert BootWind Component")]),s("ul",{staticClass:"w-full  lg:w-2/3"},e._l(e.listCom,(function(e,t){return s("li",{key:t,staticClass:"p-2",attrs:{id:"list-"+t}},[s("bw-code",{attrs:{data:e.code,title:e.title}})],1)})),0),s("right-menu",{staticClass:"w-full lg:w-1/3 shadow-sm p-2 lg:p-12",attrs:{list:e.listCom,youtube:"J7kZrNYiiuc",next:"badge",back:"/started/install"}})],1)},a=[],n={data(){return{listCom:[{title:"Simple",code:'<div class="my-4 p-2 px-3 bg-primary items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Info</span>\n    <span class="mr-2 text-left flex-auto">A simple alert - check it out!</span>\n</div>'},{title:"Dismissing",code:'<div class="my-4 p-2 px-3 bg-primary items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Info</span>\n    <span class="mr-2 text-left flex-auto">A simple alert - check it out!</span>\n    <svg class="bi bi-x-circle cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>\n        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>\n    </svg>\n</div>'},{title:"With Content",code:'<div class="my-4 p-2 px-3 bg-primary items-center text-white  rounded-lg flex  flex-wrap" >\n    <span class="rounded-full bg-white uppercase text-primary px-2 py-1 text-xs">Info</span>\n    <span class="p-2 font-bold flex-auto">Notification !\n            <svg class="bi bi-x-circle cursor-pointer float-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>\n            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>\n        </svg>\n    </span>\n    <p class="p-2">\n    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.\n    </p>\n    <p class="p-2">\n        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.\n    </p>\n</div>'},{title:"Coloring",code:'\n<div class="my-4 p-2 px-3 bg-default items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="text-default flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Default</span>\n    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>\n</div>\n<div class="my-4 p-2 px-3 bg-primary items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="text-primary flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Primary</span>\n    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>\n</div>\n<div class="my-4 p-2 px-3 bg-secondary items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="text-primary flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Secondary</span>\n    <span class="text-primary mr-2 text-left flex-auto">A Simple Alert- check it out!</span>\n</div>\n    <div class="my-4 p-2 px-3 bg-info items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="text-info flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Info</span>\n    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>\n</div>\n<div class="my-4 p-2 px-3 bg-success items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="text-success flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Success</span>\n    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>\n</div>\n<div class="my-4 p-2 px-3 bg-danger items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="text-danger flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Danger</span>\n    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>\n</div>\n<div class="my-4 p-2 px-3 bg-warning items-center text-white  rounded-full  flex shadow-sm" >\n    <span class="text-warning flex rounded-full bg-white uppercase text-primary px-2 py-1 text-xs mr-3 shadow-sm">Warning</span>\n    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>\n</div>'}]}}},i=n,r=s("2877"),p=Object(r["a"])(i,l,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=c-alert.6fe6af65.js.map