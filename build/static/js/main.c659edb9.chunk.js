(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{55:function(e,a,t){e.exports=t(72)},69:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),m=t(113),o=t(24),u=t(25),i=t(28),s=t(26),p=t(29),h=t(32),d=t(21),E=t(109),b=t(47),f=t(5),y=t(110),g=t(104),v=t(105),N=t(36),C=t(106),O=t(42),x=t.n(O),k=t(112),I=t(114),w=t(107),j=t(108),F=t(45),S=t.n(F),D=t(44),T=t.n(D),V=Object(f.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return l.a.createElement(k.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),P=Object(f.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(I.a);function z(){var e=l.a.useState(null),a=Object(b.a)(e,2),t=a[0],n=a[1];return l.a.createElement(y.a,{mb:4},l.a.createElement(g.a,{position:"static"},l.a.createElement(v.a,null,l.a.createElement(C.a,{edge:"start",color:"inherit","aria-label":"menu","aria-controls":"customized-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)}},l.a.createElement(x.a,null)),l.a.createElement(V,{id:"customized-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:function(){n(null)}},l.a.createElement(h.b,{to:"/"},l.a.createElement(P,null,l.a.createElement(w.a,null,l.a.createElement(T.a,{fontSize:"small"})),l.a.createElement(j.a,{primary:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u043d\u043e\u043a \u0437\u0430\u0440\u043e\u0431\u0456\u0442\u043d\u043e\u0457 \u043f\u043b\u0430\u0442\u0438"}))),l.a.createElement(h.b,{to:"/\u0430ccount"},l.a.createElement(P,null,l.a.createElement(w.a,null,l.a.createElement(S.a,{fontSize:"small"})),l.a.createElement(j.a,{primary:"\u0420\u0430\u0445\u0443\u043d\u043a\u0438 \u0434\u043b\u044f \u0441\u043f\u043b\u0430\u0442\u0438 \u043f\u043e\u0434\u0430\u0442\u043a\u0456\u0432"})))),l.a.createElement(N.a,{variant:"h6"},"\u041c\u0456\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0456\u0441\u0438 \u0434\u043b\u044f \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430"))))}t(69);var M=t(46),W=function(e){var a=e.salary,t=e.onHandleInputChange,n=e.name;return l.a.createElement("div",{className:"col-3 m-auto d-flex align-items-center"},l.a.createElement("input",{className:"pl-2 form-control m-1",type:"number",name:n,value:a,onChange:function(e){return t(e)}}),"\u0433\u0440\u043d.")},A=function(e){return l.a.createElement("div",{className:"col-9 m-auto form-group"},l.a.createElement("fieldset",{className:"border p-2"},l.a.createElement("legend",{className:"w-auto"},'\u041e\u0431\u0435\u0440\u0456\u0442\u044c, \u0412\u0438 \u0432\u0432\u0435\u043b\u0438 "\u0447\u0438\u0441\u0442\u0443" \u0447\u0438 "\u0433\u0440\u044f\u0437\u043d\u0443" \u0437\u0430\u0440\u043e\u0431\u0456\u0442\u043d\u0443 \u043f\u043b\u0430\u0442\u0443 '),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"custom-control custom-radio"},l.a.createElement("input",{id:"radio1",name:"kindOfCalculating",type:"radio",value:"withTaxes",className:"custom-control-input",onChange:e.handleInputChange,defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"radio1"},'"\u0413\u0440\u044f\u0437\u043d\u0430" \u0437\u0430\u0440\u043e\u0431\u0456\u0442\u043d\u0430 \u043f\u043b\u0430\u0442\u0430')),l.a.createElement("div",{className:"custom-control custom-radio"},l.a.createElement("input",{id:"radio2",name:"kindOfCalculating",type:"radio",value:"withoutTaxes",className:"custom-control-input",onChange:e.handleInputChange}),l.a.createElement("label",{htmlFor:"radio2",className:"custom-control-label"},'"\u0427\u0438\u0441\u0442\u0430" \u0437\u0430\u0440\u043e\u0431\u0456\u0442\u043d\u0430 \u043f\u043b\u0430\u0442\u0430')))))},Z=function(e){var a=function(a){e.handleInputChange(a)};return l.a.createElement("div",{className:"row mb-4 "},l.a.createElement(W,{salary:e.salary,onHandleInputChange:a,name:"salary"}),l.a.createElement(A,{handleInputChange:a}))},H=new Intl.NumberFormat("uk-UK",{style:"currency",currency:"UAH",minimumFractionDigits:2}),B=function(e){var a=e.salaryWithTaxes,t=e.ESV,n=e.PDFO,r=e.VZ,c=e.pureSalary;return l.a.createElement("table",{className:"table text-center col"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,'"\u0413\u0440\u044f\u0437\u043d\u0430" \u0437\u0430\u0440\u043e\u0431\u0456\u0442\u043d\u0430 \u043f\u043b\u0430\u0442\u0430'),l.a.createElement("th",null,"\u0404\u0434\u0438\u043d\u0438\u0439 \u0441\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u0432\u043d\u0435\u0441\u043e\u043a"),l.a.createElement("th",null,"\u041f\u043e\u0434\u0430\u0442\u043e\u043a \u043d\u0430 \u0434\u043e\u0445\u043e\u0434\u0438 \u0437 \u0444\u0456\u0437\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431"),l.a.createElement("th",null,"\u0412\u0456\u0439\u0441\u044c\u043a\u043e\u0432\u0438\u0439 \u0437\u0431\u0456\u0440"),l.a.createElement("th",null,"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0440\u0443\u043a\u0438"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,H.format(a)),l.a.createElement("td",null,H.format(t)),l.a.createElement("td",null,H.format(n)),l.a.createElement("td",null,H.format(r)),l.a.createElement("td",null,H.format(c)))))},J=function(e){return l.a.createElement("div",{className:"custom-control custom-checkbox d-flex align-items-center"},l.a.createElement("input",{type:"checkbox",name:"prepayment",onChange:e.handleInputChange,className:"custom-control-input",id:"prepayment"}),l.a.createElement("label",{className:"custom-control-label pt-1",htmlFor:"prepayment"},"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0430\u0432\u0430\u043d\u0441"))},L=function(e){var a=e.value,t=e.handleInputChange,n=e.name,r=e.label,c=e.min,m=e.max;return l.a.createElement("label",{className:"d-block "},l.a.createElement("select",{className:"m-2 form-control",value:a,onChange:t,name:n},function(e,a){for(var t=[],n=e;n<=a;n+=1)t.push(l.a.createElement("option",{key:n,value:n},n));return t}(c,m)),r)},U=(t(70),function(e,a){return parseFloat(Math.round(e*a*100)/100).toFixed(2)}),K=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(l)))).state={salary:4173,kindOfCalculating:"withTaxes",prepayment:!1,workingDays:0,firstPartDays:0},t.handleInputChange=function(e){var a=e.target.name,n="checkbox"===e.target.type?e.target.checked:e.target.value;t.setState(Object(M.a)({},a,n))},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state,a=e.salary,t=e.kindOfCalculating,n=e.prepayment,r=e.workingDays,c=e.firstPartDays,m=a/80.5*100;"withTaxes"===t&&(m=a);var o=Number(U(m,.22)),u=Number(U(m,.18)),i=Number(U(m,.015)),s=Number(parseFloat(Math.round(100*(m-u-i))/100).toFixed(2));o>=13770.9&&(o=13770.9);var p=m/r*c,h=Number(U(p,.22)),d=Number(U(p,.18)),E=Number(U(p,.015)),b=Number(parseFloat(Math.round(100*(p-d-E))/100).toFixed(2)),f=m-p,y=o-h,g=u-d,v=i-E,N=s-b;return l.a.createElement("div",{className:"container"},l.a.createElement(Z,{salary:a,handleInputChange:this.handleInputChange}),l.a.createElement("div",{className:"row"},l.a.createElement(B,{salaryWithTaxes:m,ESV:o,PDFO:u,VZ:i,pureSalary:s})),l.a.createElement("div",null,l.a.createElement(J,{handleInputChange:this.handleInputChange})),n?l.a.createElement("div",{className:"form-inline"},l.a.createElement("fieldset",{className:"border p-2"},l.a.createElement("legend",{className:"w-auto"},"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u043d\u0456\u0432 "),l.a.createElement(L,{value:Number(r),handleInputChange:this.handleInputChange,name:"workingDays",label:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0440\u043e\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u0456\u0432 \u0432 \u043c\u0456\u0441\u044f\u0446\u0456",min:15,max:25}),l.a.createElement(L,{value:Number(c),handleInputChange:this.handleInputChange,name:"firstPartDays",label:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0440\u043e\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u0456\u0432 \u0432 \u043f\u0435\u0440\u0448\u0456\u0439 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0456 \u043c\u0456\u0441\u044f\u0446\u044f",min:5,max:15})),l.a.createElement("div",null,r&&c?l.a.createElement("div",{className:"row mt-4 pb-4"},l.a.createElement("h3",{className:"col-12 mt-4 mb-4"},"\u041f\u0435\u0440\u0448\u0430 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430 \u043c\u0456\u0441\u044f\u0446\u044f"),l.a.createElement(B,{salaryWithTaxes:p,ESV:h,PDFO:d,VZ:E,pureSalary:b}),l.a.createElement("h3",{className:"col-12 mb-4 mt-4"},"\u0414\u0440\u0443\u0433\u0430 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430 \u043c\u0456\u0441\u044f\u0446\u044f"),l.a.createElement(B,{salaryWithTaxes:f,ESV:y,PDFO:g,VZ:v,pureSalary:N})):null)):null)}}]),a}(l.a.Component),q=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"\u0420\u043e\u0437\u0434\u0456\u043b \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0440\u043e\u0437\u0440\u043e\u0431\u0446\u0456"))}}]),a}(l.a.Component),G=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,{maxWidth:"lg"},l.a.createElement(h.a,{basename:"/salary-taxes/build"},l.a.createElement(z,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:K}),l.a.createElement(d.a,{path:"/\u0430ccount",component:q})))))}}]),a}(l.a.Component);t(71);c.a.render(l.a.createElement(n.Fragment,null,l.a.createElement(m.a,null),l.a.createElement(G,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.c659edb9.chunk.js.map