(this.webpackJsonpmil_db=this.webpackJsonpmil_db||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(13),r=n.n(i),s=(n(100),n(39)),o=n(19),l=n.n(o),j=n(40),d=n(22),b=n(38),u=n(12),p=(n(102),n(49)),h=n(152),x=n(176),O=n(177),g=n(158),f=n(174),m=n(157),v=n(156),y=n(68),w=n.n(y),k=n(145),C=n(153),S=n(147),I=n(149),P=n(175),N=n(150),T=n(151),L=n(111),B=n(65),D=n.n(B),R=n(64),F=n.n(R),_=n(2),z=Object(k.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},buttonText:{textAlign:"left"}}})),A=function(e){var t=e.unit,n=e.onToggle,a=z();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(S.a,{alignItems:"flex-start",ContainerComponent:"div",children:[Object(_.jsxs)(b.b,{to:{pathname:"/mil-db/details/",units:{unit:t},func:{onToggle:n}},style:{textDecoration:"none",color:"black",display:"flex",flexDirection:"row"},children:[Object(_.jsx)(I.a,{children:Object(_.jsx)(P.a,{alt:t.name,src:t.image})}),Object(_.jsx)(N.a,{primary:t.name,secondary:Object(_.jsxs)(c.a.Fragment,{children:[Object(_.jsx)(p.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary",children:t.class})," \u2014 "+t.desc]})})]}),Object(_.jsx)(T.a,{onClick:function(){return n(t._id)},children:Object(_.jsx)(L.a,{edge:"end","aria-label":"comments",children:t.bookmarked?Object(_.jsx)(F.a,{}):Object(_.jsx)(D.a,{})})})]}),Object(_.jsx)(h.a,{variant:"inset"})]})},H=n(171),E=Object(k.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})),M=function(e){var t=e.units,n=e.onToggle,a=e.page,c=e.numOfPages,i=e.itemsPerPage,r=e.handlePaging,s=E();return Object(_.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(_.jsx)(C.a,{className:s.root,children:t.slice((a-1)*i,a*i).map((function(e){return Object(_.jsx)(A,{unit:e,onToggle:n},e._id)}))}),Object(_.jsx)(H.a,{count:c,page:a,onChange:r,showFirstButton:!0,showLastButton:!0,style:{display:"flex",justifyContent:"center"}})]})},G=n(154),J=Object(k.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},justifyContent:"center",alignItems:"center",minHeight:"100vh",marginTop:"-69px"}}})),K=function(){var e=J();return Object(_.jsx)("div",{className:e.root,children:Object(_.jsx)(G.a,{style:{alignSelf:"center"}})})},U=n(172),V=n(155),W=function(e){var t=e.value,n=e.checked,a=n.id;return console.log(n.checkedId),Object(_.jsx)(V.a,{value:t,control:Object(_.jsx)(U.a,{id:a,checked:a===n.checkedId}),label:t})},X=Object(k.a)((function(e){return{root:{display:"flex",flexDirection:"row",backgroundColor:e.palette.background.paper,marginLeft:"72px",marginTop:"64px",paddingTop:"5px",paddingLeft:"5px",paddingRight:"5px"},inline:{display:"inline"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,width:"100%"}}})),Y=function(e){var t=e.units,n=e.onToggle,c=e.page,i=e.numOfPages,r=e.itemsPerPage,s=e.handlePaging,o=e.isLoading,b=Object(a.useState)([]),u=Object(d.a)(b,2),y=u[0],k=u[1],C=Object(a.useState)([0,1e3]),S=Object(d.a)(C,2),I=S[0],P=S[1],N=Object(a.useState)(!1),T=Object(d.a)(N,2),L=T[0],B=T[1],D=Object(a.useState)({id:0,value:"All"}),R=Object(d.a)(D,2),F=R[0],z=R[1],A=Object(a.useState)({id:0,value:"All"}),H=Object(d.a)(A,2),E=H[0],G=H[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var J=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/unitTypes");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){P([0,1e3]),z({id:0,value:"All"}),G({id:0,value:"All"})};var V=function(e){return function(t,n){B(!!n&&e)}},Y=X();return Object(_.jsxs)("div",{className:Y.root,children:[Object(_.jsx)("div",{style:{width:"100%"},children:o?Object(_.jsx)(K,{}):Object(_.jsx)(M,{units:t,onToggle:n,page:c,numOfPages:i,itemsPerPage:r,handlePaging:s})}),Object(_.jsxs)("div",{style:{width:"400px",display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"space-between"},children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(p.a,{variant:"h5",children:"Filters"}),Object(_.jsx)(h.a,{variant:"middle"}),Object(_.jsxs)("div",{style:{padding:"5%",overflowY:"scroll",height:"80vh"},children:[Object(_.jsxs)(f.a,{expanded:"panel1"===L,onChange:V("panel1"),children:[Object(_.jsxs)(v.a,{expandIcon:Object(_.jsx)(w.a,{}),children:[Object(_.jsx)(p.a,{className:Y.heading,children:"Type"}),Object(_.jsx)(p.a,{className:Y.secondaryHeading,children:F.value})]}),Object(_.jsx)(m.a,{children:Object(_.jsx)(x.a,{onChange:function(e){z({id:e.target.id,value:e.target.value})},children:y.map((function(e){return Object(_.jsx)(W,{value:e.name,checked:{id:e._id,checkedId:F.id}},e._id)}))})})]}),Object(_.jsxs)(f.a,{expanded:"panel2"===L,onChange:V("panel2"),children:[Object(_.jsxs)(v.a,{expandIcon:Object(_.jsx)(w.a,{}),children:[Object(_.jsx)(p.a,{className:Y.heading,children:"Class"}),Object(_.jsx)(p.a,{className:Y.secondaryHeading,children:E.value})]}),Object(_.jsx)(m.a,{children:Object(_.jsx)(x.a,{onChange:function(e){G({id:e.target.id,value:e.target.value})},children:y.map((function(e){return Object(_.jsx)(W,{value:e.name,checked:{id:e._id,checkedId:E.id}},e._id)}))})})]}),Object(_.jsxs)(f.a,{expanded:"panel3"===L,onChange:V("panel3"),children:[Object(_.jsxs)(v.a,{expandIcon:Object(_.jsx)(w.a,{}),children:[Object(_.jsx)(p.a,{className:Y.heading,children:"Crew"}),Object(_.jsx)(p.a,{className:Y.secondaryHeading,children:I.toString().replace(","," - ")})]}),Object(_.jsx)(m.a,{children:Object(_.jsx)(O.a,{value:I,onChange:function(e,t){P(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:function(e){return e},min:100,max:1e3,step:50})})]})]})]}),Object(_.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",paddingLeft:"5%",paddingRight:"5%"},children:[Object(_.jsx)(g.a,{size:"small",variant:"contained",color:"primary",onClick:U,children:"Clear Filters"}),Object(_.jsx)(g.a,{size:"small",variant:"contained",color:"secondary",onClick:U,style:{marginTop:"2%"},children:"Clear Search"})]})]})]})},q=n(161),Q=n(162),Z=n(163),$=n(164),ee=n(165),te=n(160),ne=n(90),ae=(n(80),n(5)),ce=n(159);p.a,p.a,p.a,p.a,p.a,ce.a,Object(ae.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,n=Object(ne.a)(e,["classes"]);return Object(_.jsx)("li",{className:t.listItem,children:Object(_.jsx)(p.a,Object(s.a)({component:"span"},n))})}));var ie=n.p+"static/media/blog-post.1.16955a26.md",re=function(e){var t=e.title,n=[ie];return console.log(n),Object(_.jsx)(te.a,{item:!0,xs:12,md:8,children:Object(_.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:t})})},se=Object(k.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"88px"},media:{height:140}}),oe=function(e){console.log(e);var t=e.location.units,n=se();if("undefined"===typeof t)return Object(_.jsx)(u.a,{to:"/mil-db/list"});console.log(t.unit);var a=t.unit;return Object(_.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",paddingTop:"80px",marginRight:"16px"},children:[Object(_.jsxs)(q.a,{className:n.root,children:[Object(_.jsxs)(Q.a,{children:[Object(_.jsx)(Z.a,{className:n.media,image:a.image,title:a.name}),Object(_.jsxs)($.a,{children:[Object(_.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a.name}),Object(_.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:a.desc})]})]}),Object(_.jsxs)(ee.a,{children:[Object(_.jsx)(g.a,{size:"small",color:"primary",children:"Share"}),Object(_.jsx)(g.a,{size:"small",color:"primary",children:"Learn More"}),Object(_.jsx)(L.a,{edge:"end","aria-label":"comments",onClick:function(){return e.location.func.onToggle(a.id)},children:a.bookmarked?Object(_.jsx)(F.a,{}):Object(_.jsx)(D.a,{})})]})]}),Object(_.jsx)(re,{title:"abc",posts:[{a:"a"}]})]})},le=Object(k.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},justifyContent:"center",alignItems:"center"}}})),je=function(){var e=le();return Object(_.jsxs)("div",{className:e.root,children:[Object(_.jsx)(G.a,{}),Object(_.jsx)(G.a,{color:"secondary"})]})},de=n(23),be=n(4),ue=n(166),pe=n(167),he=n(168),xe=n(173),Oe=n(170),ge=n(169),fe=n(10),me=n(32),ve=n(81),ye=n.n(ve),we=n(82),ke=n.n(we),Ce=n(84),Se=n.n(Ce),Ie=n(83),Pe=n.n(Ie),Ne=n(85),Te=n.n(Ne),Le=n(86),Be=n.n(Le),De=n(87),Re=n.n(De),Fe=n(88),_e=n.n(Fe),ze=n(89),Ae=n.n(ze),He=240,Ee=Object(k.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:He,width:"calc(100% - ".concat(He,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:He,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:He,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(de.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},title:Object(de.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(de.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(fe.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(fe.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(de.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),Me=function(e){var t,n,c=e.onSearch,i=Ee(),r=Object(me.a)(),s=Object(a.useState)(!1),o=Object(d.a)(s,2),l=o[0],j=o[1];return Object(_.jsx)("header",{children:Object(_.jsxs)("div",{className:i.root,children:[Object(_.jsx)(ue.a,{}),Object(_.jsx)(pe.a,{position:"fixed",className:Object(be.a)(i.appBar,Object(de.a)({},i.appBarShift,l)),children:Object(_.jsxs)(he.a,{children:[Object(_.jsx)(L.a,{color:"inherit","aria-label":"open drawer",onClick:function(){j(!0)},edge:"start",className:Object(be.a)(i.menuButton,Object(de.a)({},i.hide,l)),children:Object(_.jsx)(ye.a,{})}),Object(_.jsx)(p.a,{variant:"h6",className:i.title,noWrap:!0,children:"Mil-DB"}),Object(_.jsxs)("div",{className:i.search,children:[Object(_.jsx)("div",{className:i.searchIcon,children:Object(_.jsx)(ke.a,{})}),Object(_.jsx)(xe.a,{placeholder:"Search\u2026",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"},onKeyUp:function(e){"Enter"===e.key&&c(e.target.value)}.bind(undefined)})]})]})}),Object(_.jsxs)(Oe.a,{variant:"permanent",className:Object(be.a)(i.drawer,(t={},Object(de.a)(t,i.drawerOpen,l),Object(de.a)(t,i.drawerClose,!l),t)),classes:{paper:Object(be.a)((n={},Object(de.a)(n,i.drawerOpen,l),Object(de.a)(n,i.drawerClose,!l),n))},children:[Object(_.jsx)("div",{className:i.toolbar,children:Object(_.jsx)(L.a,{onClick:function(){j(!1)},children:"rtl"===r.direction?Object(_.jsx)(Pe.a,{}):Object(_.jsx)(Se.a,{})})}),Object(_.jsx)(h.a,{}),Object(_.jsx)(C.a,{children:["Home","Search"].map((function(e,t){return Object(_.jsx)(b.b,{to:t%2===0?"/mil-db":"/mil-db/list",style:{textDecoration:"none",color:"black"},children:Object(_.jsxs)(S.a,{button:!0,children:[Object(_.jsx)(ge.a,{children:t%2===0?Object(_.jsx)(Te.a,{}):Object(_.jsx)(Be.a,{})}),Object(_.jsx)(N.a,{primary:e})]})},e)}))}),Object(_.jsx)(h.a,{}),Object(_.jsx)(C.a,{children:["Profile","Settings","Logout"].map((function(e,t){return Object(_.jsx)(b.b,{to:"Profile"===e?"/profile":"Settings"===e?"/settings":"Logout"===e?"/logout":"/mil-db",style:{textDecoration:"none",color:"black"},children:Object(_.jsxs)(S.a,{button:!0,children:[Object(_.jsx)(ge.a,{children:"Profile"===e?Object(_.jsx)(Re.a,{}):"Settings"===e?Object(_.jsx)(_e.a,{}):"Logout"===e?Object(_.jsx)(Ae.a,{}):""}),Object(_.jsx)(N.a,{primary:e})]})},e)}))})]})]})})},Ge=function(){return Object(_.jsx)("footer",{style:{position:"fixed",left:0,bottom:0,width:"100%",textAlign:"center"},children:Object(_.jsx)("p",{children:"Copyright \xa9 2021"})})};var Je=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(1),r=Object(d.a)(i,2),o=r[0],p=r[1],h=Object(a.useState)(),x=Object(d.a)(h,2),O=x[0],g=x[1],f=Object(a.useState)(!0),m=Object(d.a)(f,2),v=m[0],y=m[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,w();case 3:t=e.sent,c(t),g(Math.ceil(t.length/10)),y(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/listall");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/search?value=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e,t){p(t)},S=function(e){console.log(e),c(n.map((function(t){return t._id===e?Object(s.a)(Object(s.a)({},t),{},{bookmarked:!t.bookmarked}):t})))};return Object(_.jsx)(b.a,{children:Object(_.jsxs)("div",{children:[Object(_.jsx)(Me,{onSearch:k}),Object(_.jsxs)("div",{children:[Object(_.jsx)(u.b,{path:"/mil-db/",exact:!0}),Object(_.jsx)(u.b,{path:"/mil-db/list",render:function(){return Object(_.jsx)(Y,{units:n,onToggle:S,page:o,numOfPages:O,itemsPerPage:10,handlePaging:C,isLoading:v})}}),Object(_.jsx)(u.b,{path:"/mil-db/details",component:oe}),Object(_.jsx)(u.b,{path:"/mil-db/settings",component:je})]}),Object(_.jsx)(Ge,{})]})})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(Je,{})}),document.getElementById("root")),Ke()}},[[110,1,2]]]);
//# sourceMappingURL=main.5262f7a8.chunk.js.map