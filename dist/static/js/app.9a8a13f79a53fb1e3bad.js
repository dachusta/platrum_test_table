webpackJsonp([1],{"0yJO":function(e,t){},"8gUc":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("mvHQ"),i=n.n(a),o=n("BO1k"),s=n.n(o),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",on:{click:function(t){return e.$emit("close")}}},[n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.$emit("save",{name:e.name,phone:e.phone,parent:e.parent})},click:function(e){e.stopPropagation()}}},[n("div",{staticClass:"header"},[n("h3",[e._v("Добавление пользователя")]),e._v(" "),n("button",{on:{click:function(t){return e.$emit("close")}}},[e._v("x")])]),e._v(" "),n("div",{staticClass:"form-item"},[n("span",[e._v("Имя")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-item"},[n("span",[e._v("Телефон")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-item"},[n("span",[e._v("Начальник")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.parent,expression:"parent"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.parent=t.target.multiple?n:n[0]}}},[n("option",{domProps:{value:null}},[e._v("---")]),e._v(" "),e._l(e.list,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Сохранить")])])])},staticRenderFns:[]};var c=n("VU/8")({name:"VModal",props:["list"],data:function(){return{name:"",phone:"",parent:""}}},l,!1,function(e){n("8gUc")},"data-v-2426253a",null).exports,u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"data"},[n("span",{style:{paddingLeft:10*e.nesting+"px"}},[e._v(e._s(e.name))]),e._v(" "),n("span",[e._v(e._s(e.phone))])]),e._v(" "),e._l(e.children,function(t){return n("TreeItem",{key:t.id,attrs:{name:t.name,phone:t.phone,children:t.children,nesting:e.nesting+1}})})],2)},staticRenderFns:[]};var d={name:"TreeTable",components:{TreeItem:n("VU/8")({name:"TreeItem",props:["name","phone","children","nesting"],data:function(){return{}},methods:{}},u,!1,function(e){n("rXx6")},"data-v-ec02cb90",null).exports},props:["tree"],data:function(){return{}},methods:{}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table"},[n("div",{staticClass:"header"},[n("span",{on:{click:function(t){return e.$emit("sortBy","name")}}},[e._v("Имя")]),e._v(" "),n("span",{on:{click:function(t){return e.$emit("sortBy","phone")}}},[e._v("Телефон")])]),e._v(" "),e._l(e.tree,function(e){return n("TreeItem",{key:e.id,attrs:{name:e.name,phone:e.phone,children:e.children,nesting:0}})}),e._v(" "),e.tree.length?e._e():n("p",{staticClass:"no-data"},[e._v("Нет данных")])],2)},staticRenderFns:[]};var p={name:"App",components:{VModal:c,TreeTable:n("VU/8")(d,v,!1,function(e){n("Yq/t")},"data-v-4e037b00",null).exports},data:function(){return{isModal:!1,sortBy:"name",sortByAscending:!0,tree:[]}},methods:{showModal:function(){this.isModal=!0},closeModal:function(){this.isModal=!1},addUser:function(e){if(this.closeModal(),e.parent){var t=!0,n=!1,r=void 0;try{for(var a,i=s()(this.tree);!(t=(a=i.next()).done);t=!0){o(a.value)}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}else this.tree.push({id:Date.now(),name:e.name,phone:e.phone,children:[]});function o(t){if(t.id!==e.parent){if(t.children){var n=!0,r=!1,a=void 0;try{for(var i,l=s()(t.children);!(n=(i=l.next()).done);n=!0){o(i.value)}}catch(e){r=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}}}else t.children.push({id:Date.now(),name:e.name,phone:e.phone,children:[]})}},setSortBy:function(e){this.sortBy!==e?(this.sortBy=e,this.sortByAscending=!0):this.sortByAscending=!this.sortByAscending}},computed:{getSortedTree:function(){if(!this.sortBy)return this.tree;var e=JSON.parse(i()(this.tree)),t=this.sortBy,n=this.sortByAscending;return function e(r){r.sort(function(e,r){return n?e[t]<r[t]?-1:1:e[t]>r[t]?-1:1});var a=!0;var i=!1;var o=void 0;try{for(var l,c=s()(r);!(a=(l=c.next()).done);a=!0){var u=l.value;u.children.length&&e(u.children)}}catch(e){i=!0,o=e}finally{try{!a&&c.return&&c.return()}finally{if(i)throw o}}}(e),e},getListOfElements:function(){var e=[],t=!0,n=!1,r=void 0;try{for(var a,i=s()(this.tree);!(t=(a=i.next()).done);t=!0){o(a.value)}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}function o(t){if(e.push({id:t.id,name:t.name,phone:t.phone}),t.children){var n=!0,r=!1,a=void 0;try{for(var i,l=s()(t.children);!(n=(i=l.next()).done);n=!0){o(i.value)}}catch(e){r=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}}}return e}},watch:{tree:function(e){localStorage.setItem("tree",i()(e))}},mounted:function(){localStorage.getItem("tree")&&(this.tree=JSON.parse(localStorage.getItem("tree")))}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("button",{staticClass:"btn-add",on:{click:e.showModal}},[e._v("Добавить")]),e._v(" "),n("TreeTable",{attrs:{tree:e.getSortedTree},on:{sortBy:e.setSortBy}})],1),e._v(" "),e.isModal?n("VModal",{attrs:{list:e.getListOfElements},on:{close:e.closeModal,save:e.addUser}}):e._e()],1)},staticRenderFns:[]};var m=n("VU/8")(p,f,!1,function(e){n("0yJO")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:m},template:"<App/>"})},"Yq/t":function(e,t){},rXx6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9a8a13f79a53fb1e3bad.js.map