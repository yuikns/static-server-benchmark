(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=O(n(134)),l=O(n(133)),r=O(n(132)),o=O(n(131)),i=O(n(130)),u=O(n(301)),d=O(n(1590)),c=O(n(6)),s=O(n(150)),f=O(n(11)),m=O(n(282)),p=n(91),h=O(n(1589)),g=O(n(1555)),E=O(n(316)),y=O(n(1535)),w=n(1533),b=O(w),v=O(n(298)),x=O(n(1524)),_=O(n(1522)),k=O(n(1517)),S=n(1515),j=n(344),M=(O(n(138)),O(n(563))),L=O(n(288));function O(e){return e&&e.__esModule?e:{default:e}}n(557);var I=(0,s.default)({loader:function(){return n.e(8).then(function(){var e=n(555);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},loading:function(){return c.default.createElement("div",null)}}),P=(0,s.default)({loader:function(){return Promise.all([n.e(2),n.e(7)]).then(function(){var e=n(554);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},loading:function(){return c.default.createElement("div",null)}}),N=(0,s.default)({loader:function(){return n.e(6).then(function(){var e=n(534);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},loading:function(){return c.default.createElement("div",null)}}),R=(0,s.default)({loader:function(){return Promise.all([n.e(2),n.e(5)]).then(function(){var e=n(533);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},loading:function(){return c.default.createElement("div",null)}}),B=(0,s.default)({loader:function(){return Promise.all([n.e(2),n.e(3),n.e(4)]).then(function(){var e=n(525);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},loading:function(){return c.default.createElement("div",null)}}),A=c.default.createElement("div",null,c.default.createElement(w.ListItem,{button:!0,component:function(e){return c.default.createElement(j.Link,(0,u.default)({to:"/"},e))}},c.default.createElement(w.ListItemText,{primary:"Home"})),c.default.createElement(w.ListItem,{button:!0,component:function(e){return c.default.createElement(j.Link,(0,u.default)({to:"/news"},e))}},c.default.createElement(w.ListItemText,{primary:"News"})),c.default.createElement(w.ListItem,{button:!0,component:function(e){return c.default.createElement(j.Link,(0,u.default)({to:"/about"},e))}},c.default.createElement(w.ListItemText,{primary:"About"})),c.default.createElement(w.ListItem,{button:!0,component:function(e){return c.default.createElement(j.Link,(0,u.default)({to:"/powered-by"},e))}},c.default.createElement(w.ListItemText,{primary:"PoweredBy"}))),C=function(e){function t(){var e,n,r,i;(0,l.default)(this,t);for(var u=arguments.length,d=Array(u),c=0;c<u;c++)d[c]=arguments[c];return n=r=(0,o.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(d))),r.state={mobileOpen:!1,open:!1},r.handleDrawerToggle=function(){r.setState({mobileOpen:!r.state.mobileOpen})},r.handleDrawerOpen=function(){r.setState({open:!0})},r.handleDrawerClose=function(){r.setState({open:!1})},i=n,(0,o.default)(r,i)}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e,t,n=this.props,a=n.classes,l=n.theme,r=this.state.open;return c.default.createElement(j.BrowserRouter,null,c.default.createElement("div",{className:a.root},c.default.createElement(g.default,{className:(0,m.default)(a.appBar,(e={},(0,d.default)(e,a.appBarShift,r),(0,d.default)(e,a["appBarShift-left"],r),e))},c.default.createElement(y.default,{disableGutters:!r},c.default.createElement(_.default,{mdUp:!0},c.default.createElement(x.default,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,className:(0,m.default)(a.menuButton,r&&a.hide)},c.default.createElement(S.MdMenu,null))),c.default.createElement(E.default,{component:j.Link,to:"/"},c.default.createElement(v.default,{variant:"title",color:"inherit",noWrap:!0,className:a.textInPrimary},c.default.createElement(L.default,null))),c.default.createElement(_.default,{smDown:!0},c.default.createElement(E.default,{component:j.Link,to:"/news",className:a.textInPrimary}," News "),c.default.createElement(E.default,{component:j.Link,to:"/about",className:a.textInPrimary}," About "),c.default.createElement(E.default,{component:j.Link,to:"/powered-by",className:a.textInPrimary}," PoweredBy ")))),c.default.createElement(h.default,{variant:"persistent",anchor:"left",open:r,classes:{paper:a.drawerPaper}},c.default.createElement("div",{className:a.drawerHeader},c.default.createElement(x.default,{onClick:this.handleDrawerClose},"rtl"===l.direction?c.default.createElement(ChevronRightIcon,null):c.default.createElement(S.MdChevronLeft,null))),c.default.createElement(k.default,null),c.default.createElement(b.default,null,A)),c.default.createElement("main",{className:(0,m.default)(a.content,a["content-left"],(t={},(0,d.default)(t,a.contentShift,r),(0,d.default)(t,a["contentShift-left"],r),t))},c.default.createElement("div",{className:a.drawerHeader}),c.default.createElement(j.Switch,null,c.default.createElement(j.Route,{exact:!0,path:"/",component:I}),c.default.createElement(j.Route,{path:"/news",component:P}),c.default.createElement(j.Route,{path:"/about",component:N}),c.default.createElement(j.Route,{path:"/powered-by",component:B}),c.default.createElement(j.Route,{path:"/articles/:id.c",component:R}),c.default.createElement(j.Route,{component:M.default})),c.default.createElement("div",{className:"clearfix"}),c.default.createElement("div",{className:"Footer"}))))}}]),t}(c.default.Component);C.propTypes={classes:f.default.object.isRequired,theme:f.default.object.isRequired},t.default=(0,p.withStyles)(function(e){var t;return{root:{flexGrow:1,zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},"appBarShift-left":{marginLeft:240},menuButtons:{flexDirection:"row-reverse",marginLeft:12,marginRight:20},hide:{display:"none"},drawerPaper:(t={width:240},(0,d.default)(t,e.breakpoints.up("md"),{position:"relative"}),(0,d.default)(t,"position","relative"),t),drawerHeader:(0,u.default)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},"content-left":{marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},"contentShift-left":{marginLeft:0},textInPrimary:{backgroundColor:e.palette.primary.main,padding:e.spacing.unit+"px "+2*e.spacing.unit+"px",color:e.palette.common.white}}},{withTheme:!0})(C)},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HostTitle=t.HostString=t.Host=void 0;var a=r(n(6)),l=r(n(562));function r(e){return e&&e.__esModule?e:{default:e}}var o,i=t.Host="localhost"==(o=window.location.hostname)||"itermind.com"==o?"itermind":"argcv",u=t.HostString="itermind"==i?"IterMind":"ArgCV";t.HostTitle=function(e){var t=e.suffix;return t?a.default.createElement(l.default,{title:u+" - "+t}):a.default.createElement(l.default,{title:u})},t.default=function(e){return e.match,window.location.hostname,"itermind"==i?a.default.createElement("span",null,a.default.createElement("span",{style:{color:"MediumPurple"}},"I"),a.default.createElement("span",{style:{color:"SkyBlue"}},"ter"),a.default.createElement("span",{style:{color:"Gold"}},"M"),a.default.createElement("span",{style:{color:"OrangeRed"}},"ind")):a.default.createElement("span",null,a.default.createElement("span",{style:{color:"MediumPurple"}},"A"),a.default.createElement("span",{style:{color:"SkyBlue"}},"rg"),a.default.createElement("span",{style:{color:"Gold"}},"C"),a.default.createElement("span",{style:{color:"OrangeRed"}},"V"))}},556:function(e,t,n){(t=e.exports=n(137)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Material+Icons|Roboto|Ranga|Damion|Bubblegum+Sans|UnifrakturMaguntia);",""]),t.push([e.i,".App {\n  margin: 0;\n  padding: 0;\n  height: 100%; }\n\n.App-title {\n  margin-top: 20px;\n  margin-left: 15%;\n  font-size: 4em; }\n\n.App-content {\n  padding: 1em;\n  font-size: large;\n  width: 88%;\n  margin: 0 auto; }\n\n.App-DesktopOnly {\n  display: block; }\n\n.App-MobileOnly {\n  display: none; }\n\n@media only screen and (max-width: 768px) {\n  .App-DesktopOnly {\n    display: none; }\n  .App-MobileOnly {\n    display: block; }\n  .App-content {\n    width: 100% !important;\n    padding: 0px !important; }\n  .Content {\n    width: 100% !important;\n    padding: 0px !important; }\n  .Section {\n    padding: 2px; } }\n",""])},557:function(e,t,n){var a=n(556);"string"==typeof a&&(a=[[e.i,a,""]]);n(136)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},558:function(e,t,n){e.exports=n.p+"images/404.d085d181.jpg"},563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(6)),l=i(n(135)),r=n(288),o=i(n(558));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return e.location,l.default.pageview(window.location.pathname+window.location.search),a.default.createElement("div",null,a.default.createElement(r.HostTitle,{suffix:"Page Not Found"}),a.default.createElement("h2",null,"404 Not Found"),a.default.createElement("hr",null),a.default.createElement("h3",null,"This is a lost area."),a.default.createElement("img",{src:o.default}))}}}]);
//# sourceMappingURL=1.a955160d.bundle.js.map