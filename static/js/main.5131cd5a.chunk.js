(window["webpackJsonphelpfreehk-news"]=window["webpackJsonphelpfreehk-news"]||[]).push([[0],{189:function(e,t,a){e.exports=a(419)},209:function(e,t){},211:function(e,t){},243:function(e,t){},244:function(e,t){},309:function(e,t){},418:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(50),s=a.n(r),c=a(17),o=a(18),i=a(21),m=a(19),u=a(36),d=a(20),h=a(114),v=a.n(h),p=a(42),E=a(22),f=a(421),b=a(420);var g=function(){return l.a.createElement(b.a,{animation:"border",variant:"light",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))};function w(e){return l.a.createElement("button",{className:"menu-tg",onClick:e.toggleMenu})}function O(e){return l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"d-xl-none menu-overlap",onClick:e.toggleMenu}),l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(E.b,{to:"/"},"Timeline")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/"},"Events"),l.a.createElement("button",{className:"submenu-tg",onClick:function(e){e.target.classList.toggle("open")}}),l.a.createElement(j,{items:e.events})),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/download"},"Download"))))}function j(e){return e.items.length>0?l.a.createElement("div",{className:"submenu"},l.a.createElement("ul",{className:"nav"},e.items.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#/events/"+e.title},e.title))}))):l.a.createElement("div",{className:"submenu text-center p-4"},l.a.createElement(g,null))}var N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement(f.a,null,l.a.createElement("div",{className:"h-1"},l.a.createElement("div",{className:"h-logo"},l.a.createElement("h1",null,l.a.createElement(E.b,{to:"/"},"Free HK"))),l.a.createElement(O,{events:this.props.events,toggleMenu:this.props.toggleMenu}),l.a.createElement(w,{toggleMenu:this.props.toggleMenu}))))}}]),t}(l.a.Component),y=a(113),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).scrollToTop=function(){y.animateScroll.scrollToTop()},a.state={data:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("button",{onClick:this.scrollToTop,className:"totop"},"scroll to top"),l.a.createElement(f.a,null,"Email: ",l.a.createElement("a",{href:"mailto:helpfreehk@gmail.com"},"helpfreehk@gmail.com")))}}]),t}(l.a.Component),S=a(117),C=(a(416),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleHoverSame=function(e){if(e){var t;for(t=0;t<a.props.events.length;t++){var n=[];n[a.props.events[t].title]=e===a.props.events[t].title,a.setState(n)}a.setState({eventHoverWp:!0})}else a.setState({eventHoverWp:!1})},a.handleEvents=function(e){if(a.state.handleEventsDone)return!1;var t;for(a.setState({handleEventsDone:!0}),t=0;t<e.length;t++){var n=[];n[e[t].title]=!1,a.setState(n)}},a.state={handleEventsDone:!1,eventHoverWp:!1},a.handleHoverSame=a.handleHoverSame.bind(Object(u.a)(a)),a.handleEvents=a.handleEvents.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;if(this.props.ready){var t=this.props.events,a=this.props.data,n=this.props.event?this.props.event:"";return this.handleEvents(t),l.a.createElement(S.VerticalTimeline,{className:this.state.eventHoverWp?"hovering":""},a.map(function(a){var r=t.find(function(e){return e.id===a.event_id})?t.find(function(e){return e.id===a.event_id}).title:"";return!n||r&&r===n?l.a.createElement(S.VerticalTimelineElement,{key:a.title,className:"vertical-timeline-element--work"+(!e.state.eventHoverWp||e.state[r]?" active":""),date:a.date},l.a.createElement("div",{onMouseEnter:function(){return e.handleHoverSame(r)},onMouseLeave:function(){return e.handleHoverSame("")}},l.a.createElement("h3",{className:"vertical-timeline-element-title"},l.a.createElement(E.b,{to:"/d/"+a.title},a.title)),l.a.createElement("h6",{className:"vertical-timeline-element-subtitle"},l.a.createElement(E.b,{to:"/events/"+r},r)),l.a.createElement("p",null,a.desc))):""}))}return l.a.createElement("div",{className:"text-center"},l.a.createElement("br",null),l.a.createElement(g,null),l.a.createElement("br",null))}}]),t}(l.a.Component)),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("wrapper")[0].classList.remove("menu-open"),document.getElementsByClassName("submenu-tg")[0].classList.remove("open"),window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(C,{data:this.props.data,event:this.props.match.params.event,events:this.props.events,ready:this.props.dataReady>0}))}}]),t}(l.a.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("wrapper")[0].classList.remove("menu-open"),document.getElementsByClassName("submenu-tg")[0].classList.remove("open"),window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"aboutWp"},l.a.createElement(f.a,null,l.a.createElement("h2",null,"About")))}}]),t}(l.a.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("wrapper")[0].classList.remove("menu-open"),document.getElementsByClassName("submenu-tg")[0].classList.remove("open"),window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"aboutWp"},l.a.createElement(f.a,null,l.a.createElement("h2",null,"Download")))}}]),t}(l.a.Component),x=a(422),L=a(423);function B(e){return e.data.cover_img?l.a.createElement("img",{src:e.data.cover_img,alt:e.data.title,className:"w-100 border shadow coverImg"}):""}var _=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("wrapper")[0].classList.remove("menu-open"),document.getElementsByClassName("submenu-tg")[0].classList.remove("open"),window.scrollTo(0,0)}},{key:"render",value:function(){if(this.props.dataReady){var e,t,a,n=this.props.events;for(e=0;e<this.props.data.length;e++)this.props.data[e].title==this.props.match.params.detail&&(t=this.props.data[e],a=n.find(function(e){return e.id===t.event_id})?n.find(function(e){return e.id===t.event_id}).title:"");return l.a.createElement("div",{className:"detailWp"},l.a.createElement(f.a,null,l.a.createElement(x.a,null,l.a.createElement(L.a,{xs:12,xl:6,className:t.cover_img?"":"d-none"},l.a.createElement(B,{data:t})),l.a.createElement(L.a,{xs:12,xl:t.cover_img?6:12},l.a.createElement("h2",null,t.title),l.a.createElement("h5",null,l.a.createElement("a",{href:"#/events/"+a},a)),l.a.createElement("div",{className:"content"},t.content.split("\n").map(function(e){return l.a.createElement("p",null,e)})),l.a.createElement("div",{className:"share"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/sharer.php?u="+window.location.href,target:"_blank"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/share?url="+window.location.href,target:"_blank"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://wa.me/?text="+window.location.href,target:"_blank"},l.a.createElement("i",{className:"fa fa-whatsapp"})))))))))}return l.a.createElement("div",{className:"text-center"},l.a.createElement("br",null),l.a.createElement(g,null),l.a.createElement("br",null))}}]),t}(l.a.Component),H=(a(417),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleFinishEvents=function(){e.setState({finishEvents:!0})},e.handleFinishData=function(){e.setState({finishData:!0})},e.handleScroll=function(){var t=void 0!==window.pageXOffset,a="CSS1Compat"===(document.compatMode||""),n={x:t?window.pageXOffset:a?document.documentElement.scrollLeft:document.body.scrollLeft,y:t?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop};e.setState({scrollDown:n.y})},e.toggleMenu=function(){e.setState({menuOpen:!e.state.menuOpen}),document.getElementsByClassName("submenu-tg")[0].classList.remove("open")},e.state={scrollDown:0,data:[],events:[],menuOpen:!1,finishEvents:!1,finishData:!1},e.handleScroll=e.handleScroll.bind(Object(u.a)(e)),e.handleFinishEvents=e.handleFinishEvents.bind(Object(u.a)(e)),e.handleFinishData=e.handleFinishData.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll),v.a.init({key:"1QClBiSbsZKGlzugA1_CUKE8uI9-0PNDb9vkCmrEka3M",callback:function(t){e.setState({events:t}),e.handleFinishEvents()},simpleSheet:!0}),v.a.init({key:"1CNnSjBUnSRoT_dW5aJwKmzbWqf3_80PhM9RNBMYfgM8",orderby:"date",callback:function(t){e.setState({data:t}),e.handleFinishData()},simpleSheet:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement("div",{className:"wrapper"+(this.state.menuOpen?" menu-open":"")+(this.state.scrollDown>20?" scroll-down":"")+(this.state.scrollDown>=window.document.body.offsetHeight-window.innerHeight?" reach-bottom":"")},l.a.createElement(N,{events:this.state.events,toggleMenu:this.toggleMenu}),l.a.createElement("main",null,l.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return l.a.createElement(D,Object.assign({},t,{data:e.state.data,events:e.state.events,dataReady:e.state.finishEvents&&e.state.finishData}))}}),l.a.createElement(p.a,{exact:!0,path:"/about",render:function(e){return l.a.createElement(M,e)}}),l.a.createElement(p.a,{path:"/events/:event",render:function(t){return l.a.createElement(D,Object.assign({},t,{data:e.state.data,events:e.state.events,dataReady:e.state.finishEvents&&e.state.finishData}))}}),l.a.createElement(p.a,{exact:!0,path:"/d/:detail",render:function(t){return l.a.createElement(_,Object.assign({},t,{data:e.state.data,events:e.state.events,dataReady:e.state.finishEvents&&e.state.finishData}))}}),l.a.createElement(p.a,{exact:!0,path:"/download",render:function(e){return l.a.createElement(T,e)}})),l.a.createElement(k,null)))}}]),t}(l.a.Component));a(418),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[189,1,2]]]);
//# sourceMappingURL=main.5131cd5a.chunk.js.map