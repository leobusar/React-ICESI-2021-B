(this.webpackJsonpmyapp2=this.webpackJsonpmyapp2||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(19),o=c.n(i),r=(c(101),c(102),c(58)),s=c(20),j=c(10),d=function(){return Object(j.jsx)("div",{children:"My component Home"})},b=function(){var e=Object(s.f)(),t=e.id,c=e.action;return Object(j.jsxs)("div",{children:["Esta es la p\xe1gina de about  idtarea: ",t," action: ",c]})},u=c(41),l=c(1),O=c.n(l),h=c(5),p=c(21),x=c(159),f=c(161),m=c(154),v=c(158),k=c(160),g=c(150),T=c(155),I=c(157),y=c(83),C=Object(y.a)({apiKey:"AIzaSyBZ7IDOP0Uwz0oYg3PrLIJQgqb_FC6gBJA",authDomain:"todo-e1b77.firebaseapp.com",databaseURL:"https://todo-e1b77.firebaseio.com",projectId:"todo-e1b77",storageBucket:"todo-e1b77.appspot.com",messagingSenderId:"695021225062",appId:"1:695021225062:web:c70b7d9103e8b1523b19a7"}),S=c(42),A=c(84),w=c.n(A),B=c(85),E=c.n(B),F=function(e){var t=e.task,c=e.delTask,n=e.editTask;return Object(j.jsxs)(g.a,{children:[Object(j.jsx)(m.a,{children:t.id}),Object(j.jsx)(m.a,{children:t.title}),Object(j.jsx)(m.a,{children:t.completed+""}),Object(j.jsxs)(m.a,{children:[Object(j.jsx)(w.a,{onClick:function(){c(t)}})," ",Object(j.jsx)(E.a,{onClick:function(){return n(t)}})]})]})},P=c(162),z=c(156),J=c(164),L=c(163),M=function(e){var t=e.addTask,c=e.taskEdit,a=Object(n.useState)(c.title),i=Object(p.a)(a,2),o=i[0],r=i[1],s=Object(n.useState)(c.completed),d=Object(p.a)(s,2),b=d[0],u=d[1],l=Object(n.useState)(c.userId),O=Object(p.a)(l,2),h=O[0],x=O[1],f=Object(n.useState)(c.id),m=Object(p.a)(f,2),v=m[0],k=m[1];Object(n.useEffect)((function(){r(c.title),u(c.completed),x(c.userId),k(c.id)}),[c]);return Object(j.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(j.jsx)("input",{type:"hidden",value:h}),Object(j.jsx)("input",{type:"hidden",value:v}),Object(j.jsx)(P.a,{id:"standard-basic",label:"T\xedtulo",value:o,onChange:function(e){r(e.target.value)}}),Object(j.jsx)(J.a,{control:Object(j.jsx)(L.a,{checked:b,name:"checkedB",color:"primary",onChange:function(e){u(e.target.checked)}}),label:"Terminada"}),Object(j.jsx)(z.a,{variant:"contained",color:"primary",onClick:function(e){var c={id:v,title:o,completed:b,userId:1};r(""),u(!1),k(void 0),x(void 0),t(c)},children:null==v?"Agregar":"Actualizar"})]})},D=function(e){var t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],i=c[1],o=Object(n.useState)({userId:void 0,id:void 0,title:"",completed:!1}),r=Object(p.a)(o,2),s=r[0],d=r[1],b=Object(S.e)(C);Object(n.useEffect)((function(){l(b).then((function(e){return i(e)}))}),[]);var l=function(){var e=Object(h.a)(O.a.mark((function e(t){var c,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(S.a)(t,"todo"),e.next=3,Object(S.d)(c);case 3:return n=e.sent,a=n.docs.map((function(e){return e.data()})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(I.a)({table:{minWidth:700}})(),A=function(e){Object(S.b)(Object(S.c)(b,"todo",e.id+"")).then((function(){l(b).then((function(e){return i(e)}))}))};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Tareas de :"}),Object(j.jsx)(M,{addTask:function(e){var t=Object(u.a)(a);void 0===e.id&&(e.id=Math.floor(1e4*Math.random())),Object(S.f)(Object(S.c)(b,"todo",e.id+""),e).then((function(){l(b).then((function(e){return i(e)}))})),i(t)},taskEdit:s}),Object(j.jsx)(v.a,{component:T.a,children:Object(j.jsxs)(x.a,{className:y.table,"aria-label":"customized table",children:[Object(j.jsx)(k.a,{children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(m.a,{children:"#"}),Object(j.jsx)(m.a,{children:"Titulo"}),Object(j.jsx)(m.a,{children:"Completado"}),Object(j.jsx)(m.a,{children:"Acciones"})]})}),Object(j.jsx)(f.a,{children:a.map((function(e){return Object(j.jsx)(F,{task:e,delTask:A,editTask:d},e.id)}))})]})})]})},N=function(){return Object(j.jsx)("div",{children:"P\xe1gina no encontrada"})},H=Object(j.jsxs)(r.a,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(r.b,{to:"/",children:" Home "}),Object(j.jsx)(r.b,{to:"/about",children:" About "}),Object(j.jsx)(r.b,{to:"/tasks",children:" Tasks "})]}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:d}),Object(j.jsx)(s.a,{path:"/tasks",component:D}),Object(j.jsx)(s.a,{path:"/task/:id/:action",component:b}),Object(j.jsx)(s.a,{path:"/about",component:b}),Object(j.jsx)(s.a,{path:"**",component:N})]})]});var U=function(){return Object(j.jsx)("div",{className:"App",children:H})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,166)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root")),q()}},[[112,1,2]]]);
//# sourceMappingURL=main.3cbe3e39.chunk.js.map