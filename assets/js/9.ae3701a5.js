(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(t,e,a){},154:function(t,e,a){"use strict";var y=a(151);a.n(y).a},157:function(t,e,a){"use strict";a.r(e);var y={name:"Formats",props:{formatInit:{type:String,required:!0}},data:()=>({format:"",formats:[{text:"d MMMM yyyy - e.g 12 February 2016",value:"d MMMM yyyy"},{text:"yyyy-MM-dd - e.g 2016-02-12",value:"yyyy-MM-dd"},{text:"do MMM yyyy - e.g 12th Feb 2016",value:"do MMM yyyy"},{text:"E do MMM yyyy - e.g Sat 12th Feb 2016",value:"E do MMM yyyy"},{text:"dd.MM.yyyy - 20.12.2019",value:"dd.MM.yyyy"},{text:"MM.dd.yyyy - 08.30.2019",value:"MM.dd.yyyy"}]}),mounted(){this.format=this.formatInit},watch:{format(t){this.$emit("selected",t)}}},r=(a(154),a(6)),o=Object(r.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Format")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.format,expression:"format"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.format=e.target.multiple?a:a[0]}}},t._l(t.formats,(function(e){return a("option",{domProps:{value:e.value}},[t._v("\n      "+t._s(e.text)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=o.exports}}]);