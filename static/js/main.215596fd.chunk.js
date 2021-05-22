(this.webpackJsonptracker=this.webpackJsonptracker||[]).push([[0],{15:function(e,t,a){e.exports={container:"cards_container__1MtsP",card:"cards_card__2rHqd",infected:"cards_infected__3lFTV",recovered:"cards_recovered__2p0q2",deaths:"cards_deaths__1jHCE"}},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(75),c=a.n(r),s=a(6),o=a.n(s),i=a(11),u=a(19),l=a(12),d=a(21),j=a(20),h=a(229),f=a(233),p=a(230),b=a(231),v=a(36),m=a.n(v),x=a(37),O=a.n(x),g=a(15),y=a.n(g),w=a(2),C=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(w.jsx)("div",{className:y.a.container,children:Object(w.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(w.jsx)(h.a,{item:!0,Component:f.a,xs:12,md:3,className:O()(y.a.card,y.a.infected),children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(w.jsx)(b.a,{variant:"h5",children:Object(w.jsx)(m.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(w.jsxs)(b.a,{color:"textSecondary",children:[" ",new Date(c).toDateString()]}),Object(w.jsx)(b.a,{variant:"body2",children:"Number of active cases of Covid-19"})]})}),Object(w.jsx)(h.a,{item:!0,Component:f.a,xs:12,md:3,className:O()(y.a.card,y.a.recovered),children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(w.jsx)(b.a,{variant:"h5",children:Object(w.jsx)(m.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(w.jsxs)(b.a,{color:"textSecondary",children:[" ",new Date(c).toDateString()]}),Object(w.jsx)(b.a,{variant:"body2",children:"Number of recovered cases from Covid-19"})]})}),Object(w.jsx)(h.a,{item:!0,Component:f.a,xs:12,md:3,className:O()(y.a.card,y.a.deaths),children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(w.jsx)(b.a,{variant:"h5",children:Object(w.jsx)(m.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(w.jsxs)(b.a,{color:"textSecondary",children:[" ",new Date(c).toDateString()]}),Object(w.jsx)(b.a,{variant:"body2",children:"Number of Deaths caused by Covid-19"})]})})]})}):"Loading..."},k=a(49),N=a.n(k),_=a(22),S=a(38),D=a.n(S),I="https://covid19.mathdro.id/api",L=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,r,c,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I,t&&(a="".concat(I,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,s=r.recovered,i=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:s,deaths:i,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(I,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(I,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=a(50),U=a(80),A=a.n(U),F=function(e){var t=e.data,a=t.confirmed,r=t.deaths,c=t.recovered,s=e.country,u=Object(n.useState)([]),l=Object(_.a)(u,2),d=l[0],j=l[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=d.length?Object(w.jsx)(E.Line,{data:{labels:d.map((function(e){return e.date})),datasets:[{data:d.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:d.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;console.log(a,c,r);var f=a?Object(w.jsx)(E.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,r.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return Object(w.jsx)("div",{className:A.a.container,children:s?f:h})},H=a(234),J=a(232),P=a(81),R=a.n(P),q=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(_.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(w.jsx)(H.a,{className:R.a.formControl,children:Object(w.jsxs)(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(w.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(w.jsx)("option",{value:e,children:e},t)}))]})})},M=(a(208),[{title:"Home",url:"#",cName:"nav-Links"},{title:"Prevention",url:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks",cName:"nav-Links"},{title:"Vaccination",url:"https://www.cowin.gov.in/",cName:"nav-Links"},{title:"Support",url:"https://turn2me.ie/",cName:"nav-Links"},{title:"Research",url:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov",cName:"nav-Links"}]),T=(a(209),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(w.jsxs)("nav",{className:"NavbarItems",children:[Object(w.jsx)("h1",{className:"navbar-logo",children:Object(w.jsx)("i",{class:" fas fa-shield-virus",children:" Covid-19 Tracker"})}),Object(w.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(w.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(w.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:M.map((function(e,t){return Object(w.jsx)("li",{children:Object(w.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))})]})}}]),a}(n.Component)),X=(a(210),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(w.jsx)("nav",{className:"FooterItems",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("p",{className:"col-sm",children:["\xa9",(new Date).getFullYear()," | tusharsince96@outlook.com | School Of Computer And System Sciences | Jawaharlal Nehru University"]})})})}}]),a}(n.Component)),Y=a.p+"static/media/image.9e5d4fc7.png",z=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(w.jsxs)("div",{children:[Object(w.jsx)(T,{}),Object(w.jsxs)("div",{className:N.a.Container,children:[Object(w.jsx)("img",{className:N.a.image,src:Y,alt:"COVID-19"}),Object(w.jsx)(C,{data:t}),Object(w.jsx)(q,{handleCountryChange:this.handleCountryChange}),Object(w.jsx)(F,{data:t,country:a}),Object(w.jsx)(X,{})]})]})}}]),a}(n.Component);c.a.render(Object(w.jsx)(z,{}),document.getElementById("root"))},49:function(e,t,a){e.exports={Container:"app_Container__3NXxX",image:"app_image__1zpuI"}},80:function(e,t,a){e.exports={container:"chart_container__2QNiY"}},81:function(e,t,a){e.exports={formControl:"countryPicker_formControl__2DVDS"}}},[[211,1,2]]]);
//# sourceMappingURL=main.215596fd.chunk.js.map