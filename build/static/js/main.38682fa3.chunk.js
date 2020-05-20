(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),l=(t(20),t(14)),u=t(2),i=function(e){var n=e.persons,t=e.filter,a=e.deletePerson;return r.a.createElement(r.a.Fragment,null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement("p",{key:n},e.name," ",e.phone),r.a.createElement("button",{onClick:function(n){return a(n,e.id,e.name)}},"delete"))})))},d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newPhone,onChange:e.handlePhoneChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement(r.a.Fragment,null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},f=function(e){var n=e.message,t={fontSize:16,border:"3px solid white",background:"lightgrey",borderRadius:5};return null===n?null:(!0===n.error?(t.color="red",t.border="3px solid red"):(t.color="green",t.border="3px solid green"),r.a.createElement("div",{style:t,className:"notification"},r.a.createElement("br",null),r.a.createElement("p",null,n.text)))},s=t(3),h=t.n(s),p="/api/persons",b=function(){return h.a.get(p).then((function(e){return e.data}))},g=function(e){return h.a.post(p,e).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(p,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),h=s[0],p=s[1],w=Object(a.useState)(""),j=Object(u.a)(w,2),k=j[0],C=j[1],O=Object(a.useState)(""),x=Object(u.a)(O,2),y=x[0],P=x[1],S=Object(a.useState)(null),N=Object(u.a)(S,2),F=N[0],D=N[1];return Object(a.useEffect)((function(){b().then((function(e){console.log("promise fulfilled"),o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{message:F}),r.a.createElement(m,{filter:y,handleFilterChange:function(e){P(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(d,{addPerson:function(e){if(e.preventDefault(),t.some((function(e){return e.name===h}))){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===h})),a=Object(l.a)({},n,{phone:k});E(n.id,a).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e}))),p(""),C(""),D({text:"Updated ".concat(e.name),error:!1}),setTimeout((function(){D(null)}),3e3)})).catch((function(e){D({text:"Information of ".concat(h," has already been removed from server"),error:!0})}))}}else g({name:h,phone:k}).then((function(e){o(t.concat(e)),p(""),C(""),D({text:"Added ".concat(e.name),error:!1}),setTimeout((function(){D(null)}),3e3)})).catch((function(e){D({error:!0,text:e.response.data})}))},newName:h,newPhone:k,handleNameChange:function(e){p(e.target.value)},handlePhoneChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(i,{persons:t,filter:y,deletePerson:function(e,n,a){e.preventDefault(),window.confirm("Delete ".concat(a,"?"))&&v(n).then((function(e){o(t.filter((function(e){return e.id!==n})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.38682fa3.chunk.js.map