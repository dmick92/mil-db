(this.webpackJsonpmil_db=this.webpackJsonpmil_db||[]).push([[0],{78:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(7),s=t.n(o),r=(t(78),t(24)),c=t(11),l=t(58),d=t(25),h=t(120),m=t(127),b=t(87),j=t(123),u=t(140),p=t(124),g=t(53),f=t(125),x=t(126),O=t(51),k=t.n(O),C=t(50),S=t.n(C),y=t(3),v=Object(h.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},buttonText:{textAlign:"left"}}})),H=function(e){var a=e.unit,t=e.onToggle,i=v();return Object(y.jsxs)(b.a,{alignItems:"flex-start",ContainerComponent:"div",children:[Object(y.jsxs)(r.b,{to:{pathname:"/mil-db/details/",units:{unit:a},func:{onToggle:t}},style:{textDecoration:"none",color:"black",display:"flex",flexDirection:"row"},children:[Object(y.jsx)(j.a,{children:Object(y.jsx)(u.a,{alt:a.name,src:a.image})}),Object(y.jsx)(p.a,{primary:a.name,secondary:Object(y.jsxs)(n.a.Fragment,{children:[Object(y.jsx)(g.a,{component:"span",variant:"body2",className:i.inline,color:"textPrimary",children:a.class})," \u2014 "+a.desc]})})]}),Object(y.jsx)(f.a,{onClick:function(){return t(a.id)},children:Object(y.jsx)(x.a,{edge:"end","aria-label":"comments",children:a.bookmarked?Object(y.jsx)(S.a,{}):Object(y.jsx)(k.a,{})})})]})},w=t(138),_=Object(h.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})),M=function(e){var a=e.units,t=e.onToggle,n=_(),o=Object(i.useState)(1),s=Object(d.a)(o,2),r=s[0],c=s[1],l=Object(i.useState)(Math.ceil(a.length/4)),h=Object(d.a)(l,1)[0];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(m.a,{className:n.root,children:a.slice(4*(r-1),4*r).map((function(e){return Object(y.jsx)(H,{unit:e,onToggle:t},e.id)}))}),Object(y.jsx)(w.a,{count:h,page:r,onChange:function(e,a){c(a),console.log(a)},showFirstButton:!0,showLastButton:!0})]})},W=Object(h.a)((function(e){return{root:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})),F=function(){var e=Object(i.useState)([{id:"1",name:"HMCS Trentonian",class:"Flower-class corvette",desc:"HMCS Trentonian was a modified Flower-class corvette that served with the Royal Canadian Navy during the Second World War. She fought primarily in the Battle of the Atlantic and the English Channel as a convoy escort.",image:"https://lh3.googleusercontent.com/proxy/2RFqONs2FxS738GFRQh3LG0etO0_uKNhWNpg1n4ccq2YsnKubXFnEaGLKEvEVCbpeTBA_0dTY_Vlmg0ILNYAKYLkpKDN_DziP_uSx0w2KP5V1bh4ufheG9sfgm4a",bookmarked:!0},{id:"2",name:"HMCS Halifax (FFH 330)",class:"Halifax-class frigate",desc:"HMCS Halifax (FFH 330) is a Halifax-class frigate that has served in the Royal Canadian Navy and Canadian Forces since 1992. Halifax is the lead ship in her class which is the name for the Canadian Patrol Frigate Project. She is the second vessel to carry the designation HMCS Halifax.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/HMCS_Halifax_%28FFH_330%29_en_route_to_Haiti_2010-01-18.jpg/1200px-HMCS_Halifax_%28FFH_330%29_en_route_to_Haiti_2010-01-18.jpg",bookmarked:!1},{id:"3",name:"HMCS Winnipeg",class:"Halifax-class frigate",desc:"HMCS Winnipeg is a Halifax-class frigate that has served in the Royal Canadian Navy since 1996. Winnipeg is the ninth ship in her class, whose design emerged from the Canadian Patrol Frigate Project. She is the second Canadian warship to carry the name HMCS Winnipeg.",image:"https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/07/HMCSWinnipeg.jpg",bookmarked:!0},{id:"4",name:"HMCS Whitehorse",class:"Kingston-class coastal defence vessel",desc:"HMCS Whitehorse is a Kingston-class coastal defence vessel that has served in the Canadian Forces since 1998. Whitehorse is the sixth ship of her class. The first vessel named for the city in the Yukon, the ship is assigned to Maritime Forces Pacific and is homeported at CFB Esquimalt.",image:"https://i.cbc.ca/1.2871838.1428064526!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/hmcs-whitehorse.JPG",bookmarked:!1},{id:"5",name:"HMCS Windsor",class:"Submarine",desc:"HMCS Windsor is a long-range hunter-killer submarine of the Royal Canadian Navy, the second submarine of the Victoria class. She is named after the city of Windsor, Ontario.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a0/HMCS_Windsor_SSK_877.jpg",bookmarked:!1},{id:"6",name:"HMCS Windsor",class:"Submarine",desc:"HMCS Windsor is a long-range hunter-killer submarine of the Royal Canadian Navy, the second submarine of the Victoria class. She is named after the city of Windsor, Ontario.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a0/HMCS_Windsor_SSK_877.jpg",bookmarked:!1},{id:"7",name:"HMCS Windsor",class:"Submarine",desc:"HMCS Windsor is a long-range hunter-killer submarine of the Royal Canadian Navy, the second submarine of the Victoria class. She is named after the city of Windsor, Ontario.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a0/HMCS_Windsor_SSK_877.jpg",bookmarked:!1},{id:"8",name:"HMCS Windsor",class:"Submarine",desc:"HMCS Windsor is a long-range hunter-killer submarine of the Royal Canadian Navy, the second submarine of the Victoria class. She is named after the city of Windsor, Ontario.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a0/HMCS_Windsor_SSK_877.jpg",bookmarked:!1},{id:"9",name:"HMCS Windsor",class:"Submarine",desc:"HMCS Windsor is a long-range hunter-killer submarine of the Royal Canadian Navy, the second submarine of the Victoria class. She is named after the city of Windsor, Ontario.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a0/HMCS_Windsor_SSK_877.jpg",bookmarked:!1},{id:"10",name:"HMCS Windsor",class:"Submarine",desc:"HMCS Windsor is a long-range hunter-killer submarine of the Royal Canadian Navy, the second submarine of the Victoria class. She is named after the city of Windsor, Ontario.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a0/HMCS_Windsor_SSK_877.jpg",bookmarked:!1}]),a=Object(d.a)(e,2),t=a[0],n=a[1],o=W();return Object(y.jsx)("div",{className:o.root,children:Object(y.jsx)(M,{units:t,onToggle:function(e){console.log(e),n(t.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{bookmarked:!a.bookmarked}):a})))}})})},N=t(128),R=t(129),T=t(132),K=t(131),B=t(130),P=t(133),I=Object(h.a)({root:{maxWidth:345},media:{height:140}}),L=function(e){console.log(e);var a=e.location.units,t=I();if("undefined"===typeof a)return Object(y.jsx)(c.a,{to:"/list"});console.log(a.unit);var i=a.unit;return Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"25px"},children:Object(y.jsxs)(N.a,{className:t.root,children:[Object(y.jsxs)(R.a,{children:[Object(y.jsx)(B.a,{className:t.media,image:i.image,title:i.name}),Object(y.jsxs)(K.a,{children:[Object(y.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:i.name}),Object(y.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:i.desc})]})]}),Object(y.jsxs)(T.a,{children:[Object(y.jsx)(P.a,{size:"small",color:"primary",children:"Share"}),Object(y.jsx)(P.a,{size:"small",color:"primary",children:"Learn More"}),Object(y.jsx)(x.a,{edge:"end","aria-label":"comments",onClick:function(){return e.location.func.onToggle(i.id)},children:i.bookmarked?Object(y.jsx)(S.a,{}):Object(y.jsx)(k.a,{})})]})]})})},D=t(33),V=t(137),E=t(134),G=t(135),z=t(136),Y=t(139),q=t(15),A=t(67),J=t.n(A),Q=t(68),X=t.n(Q),U=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(D.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(D.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(q.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(D.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),Z=function(){var e=U(),a=Object(i.useState)(null),t=Object(d.a)(a,2),n=t[0],o=t[1],s=Object(i.useState)(null),c=Object(d.a)(s,2),l=c[0],h=c[1],m=function(){o(null),h(null)},b=Boolean(n),j=(Boolean(l),Object(y.jsxs)(V.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:m,children:[Object(y.jsx)(r.b,{to:"/mil-db/",style:{textDecoration:"none",color:"black"},children:Object(y.jsx)(E.a,{onClick:m,children:"Home"})}),Object(y.jsx)(E.a,{onClick:m,children:"My account"}),Object(y.jsx)(r.b,{to:"/mil-db/list",style:{textDecoration:"none",color:"black"},children:Object(y.jsx)(E.a,{onClick:m,children:"List"})})]}));return Object(y.jsxs)("header",{className:e.root,children:[Object(y.jsx)(G.a,{position:"static",children:Object(y.jsxs)(z.a,{children:[Object(y.jsx)(x.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(e){o(e.currentTarget)},children:Object(y.jsx)(J.a,{})}),Object(y.jsx)(g.a,{className:e.title,variant:"h6",noWrap:!0,children:"Mil-DB"}),Object(y.jsxs)("div",{className:e.search,children:[Object(y.jsx)("div",{className:e.searchIcon,children:Object(y.jsx)(X.a,{})}),Object(y.jsx)(Y.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})}),j]})},$=function(){return Object(y.jsx)("footer",{style:{display:"flex",justifyContent:"center",width:"100%"},children:Object(y.jsx)("p",{children:"Copyright \xa9 2021"})})};var ee=function(){return Object(y.jsx)(r.a,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(Z,{}),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},className:"container",children:[Object(y.jsx)(c.b,{path:"/mil-db/",exact:!0}),Object(y.jsx)(c.b,{path:"/mil-db/list",component:F}),Object(y.jsx)(c.b,{path:"/mil-db/details",component:L}),Object(y.jsx)($,{})]})]})})},ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,141)).then((function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,o=a.getLCP,s=a.getTTFB;t(e),i(e),n(e),o(e),s(e)}))};s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(ee,{})}),document.getElementById("root")),ae()}},[[86,1,2]]]);
//# sourceMappingURL=main.61e43191.chunk.js.map