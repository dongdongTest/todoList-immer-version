(this["webpackJsonptodolist-last-version"]=this["webpackJsonptodolist-last-version"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),l=n.n(o),r=(n(13),n(7)),i=n(2),u=(n(14),function(e){var t=e.children;return c.a.createElement("div",{className:"TodoTemplate"},c.a.createElement("div",{className:"app-title"},"\uc77c\uc815 \uad00\ub9ac"),c.a.createElement("div",{className:"content"},t))}),s=n(1),m=(n(15),function(e){var t=e.onInsert,n=Object(a.useState)(""),o=Object(i.a)(n,2),l=o[0],r=o[1],u=Object(a.useCallback)((function(e){r(e.target.value)}),[]),m=Object(a.useCallback)((function(e){e.preventDefault(),t(l),r("")}),[l,t]);return c.a.createElement("form",{className:"TodoInsert",onSubmit:m},c.a.createElement("input",{placeholder:"\ud560\uc77c \ubaa9\ub85d \uc785\ub825",value:l,onChange:u}),c.a.createElement("button",null,c.a.createElement(s.a,null)))}),d=(n(16),n(6)),f=n.n(d),v=function(e){var t=e.todos,n=e.onDelete,a=e.onToggle,o=t.map((function(e,t){var o=e.checked,l=e.text;return c.a.createElement("div",{className:"TodoList",key:t},c.a.createElement("div",{className:f()("checkbox",{checked:o}),onClick:function(){return a(t)}},o?c.a.createElement(s.b,null):c.a.createElement(s.c,null),c.a.createElement("div",{className:"text"},l)),c.a.createElement("div",{className:"remove",onClick:function(){return n(t)}},c.a.createElement(s.d,null)))}));return c.a.createElement(c.a.Fragment,null,o)},h=n(3),b=function(){var e=Object(a.useState)([{text:"react",checked:!0},{text:"JS",checked:!0},{text:"Python",checked:!1}]),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useCallback)((function(e){var t={text:e,checked:!1};o(Object(h.a)(n,(function(e){e.push(t)})))}),[n]),s=Object(a.useCallback)((function(e){o(Object(h.a)(n,(function(t){t.splice(e,1)})))}),[n]),d=Object(a.useCallback)((function(e){o(n.map((function(t,n){return n===e?Object(r.a)({},t,{checked:!t.checked}):t})))}),[n]);return c.a.createElement("div",null,c.a.createElement(u,null,c.a.createElement(m,{onInsert:l}),c.a.createElement(v,{todos:n,onDelete:s,onToggle:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.28f4bf38.chunk.js.map