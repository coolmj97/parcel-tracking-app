(this["webpackJsonpparcel-tracking-app"]=this["webpackJsonpparcel-tracking-app"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),i=n(7),o=n.n(i),u=n(9),j=n(3),l=n(4),h=n(6),b=n(5),p=n(10),m=n.n(p),d=n(20),O=n(0),f=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)(a.Fragment,{children:Object(O.jsx)("option",{value:this.props.id,children:this.props.name})})}}]),n}(a.Component),v=(n(45),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={userCode:"",userInvoice:""},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.userCode,c=n.userInvoice;e.props.onSubmit(a,c)},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleSelect=function(t){var n=t.target.value;e.setState({userCode:n})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.companies;return Object(O.jsx)(a.Fragment,{children:Object(O.jsxs)("form",{className:"user__form",onSubmit:this.onSubmit,children:[Object(O.jsxs)("select",{name:"companies",className:"user__company",onChange:this.handleSelect,children:[Object(O.jsx)("option",{value:"",children:"\ud0dd\ubc30\uc0ac \uc120\ud0dd"}),e.map((function(e){return Object(O.jsx)(f,{id:e.Code,name:e.Name},e.Code)}))]}),Object(O.jsx)("input",{name:"userInvoice",type:"number",placeholder:"\uc6b4\uc1a1\uc7a5\ubc88\ud638",value:this.state.userInvoice,className:"user__invoice",onChange:this.handleChange}),Object(O.jsx)("button",{className:"button__submit",type:"submit","aria-label":"\ubc30\uc1a1\uc870\ud68c\ud558\uae30",children:Object(O.jsx)("i",{className:"fas fa-search"})})]})})}}]),n}(a.Component)),g=(n(46),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.detail;return Object(O.jsx)(a.Fragment,{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"tracking__time",children:e.timeString}),Object(O.jsx)("td",{className:"tracking__position",children:e.where}),Object(O.jsx)("td",{className:"tracking__state",children:e.kind})]})})}}]),n}(a.Component)),k=(n(47),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.details;return Object(O.jsx)(a.Fragment,{children:Object(O.jsxs)("table",{className:"tracking__table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\ubc30\uc1a1 \uc2dc\uac04"}),Object(O.jsx)("th",{children:"\ud604\uc7ac \uc704\uce58"}),Object(O.jsx)("th",{children:"\ubc30\uc1a1 \uc0c1\ud0dc"})]})}),Object(O.jsx)("tbody",{children:e.map((function(e,t){return Object(O.jsx)(g,{detail:e},t)}))})]})})}}]),n}(a.Component)),x=(n(48),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isTracking:!1,companies:[],trackingDetails:[],itemName:""},e.key="WiR4tJjDmMRrOFK3MQOznw",e.getCompany=Object(u.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://info.sweettracker.co.kr/api/v1/companylist?t_key=".concat(e.key));case 2:n=t.sent,a=n.data.Company,e.setState({companies:a});case 5:case"end":return t.stop()}}),t)}))),e.getTrackingInfo=function(){var t=Object(u.a)(o.a.mark((function t(n,a){var c,r,s,i,u,j;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://info.sweettracker.co.kr/api/v1/trackingInfo?t_key=".concat(e.key,"&t_code=").concat(n,"&t_invoice=").concat(a));case 2:if(c=t.sent,r=c.data,s=r.msg,i=r.status,u=r.itemName,j=r.trackingDetails,!1!==i){t.next=11;break}return alert(s),t.abrupt("return");case 11:e.setState({isTracking:!0,trackingDetails:j,itemName:u});case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getCompany()}},{key:"render",value:function(){var e=this.state.isTracking;return Object(O.jsx)("section",{className:"tracker",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"tracker__title",children:"\ubc30\uc1a1 \uc870\ud68c"}),Object(O.jsx)(v,{companies:this.state.companies,onSubmit:this.getTrackingInfo}),e?Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)("span",{className:"tracker__item__name",children:this.state.itemName}),Object(O.jsx)(k,{details:this.state.trackingDetails})]}):Object(O.jsx)(a.Fragment,{})]})})}}]),n}(a.Component));s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.fac464a8.chunk.js.map