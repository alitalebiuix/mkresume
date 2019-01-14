(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={title:"Hello, I'm Behzad",subtitle:"UI/UX designer && web and android developer",links:{github:"https://github.com/alitalebi7s",stackoverflow:"https://stackoverflow.com/cv/ali.talebi.uix",linkedin:"https://www.linkedin.com/in/alitalebi7s/",twitter:"https://twitter.com/alitalebi7s"},sections:[{title:"About",items:[{type:"p",content:"I am a software developer with over a decade of experience building web applications. I specialize in building user interfaces."},{type:"p",content:"I enjoy the interplay of design and technology and value a great user experience."}]},{title:"Skills",items:[{type:"card",content:{image:"images/react_js.png",title:"React",level:4,color:"#61D9FA"}},{type:"card",content:{image:"images/javascript.png",title:"Javascript",level:8,color:"#fd6"}},{type:"card",content:{image:"images/android.png",title:"Android",level:8,color:"#A3C53D"}},{type:"card",content:{image:"images/asp_net.png",title:"Asp.net",level:5,color:"#0A78D5"}},{type:"card",content:{image:"images/node_js.png",title:"nodejs",level:9,color:"#81CC30"}},{type:"card",content:{image:"images/html5.png",title:"Html",level:10,color:"#EE642B"}},{type:"card",content:{image:"images/angularjs.png",title:"Angular",level:10,color:"#DC062F"}},{type:"card",content:{image:"images/bootstrap.png",title:"Bootstrap",level:8,color:"#7D53A5"}}]}],icons:{down:"images/down.png",magicWand:"images/magic-wand.png",magicWandHover:"images/magic-wand-hover.png"},colorSets:[{bgColor:"#282840",titleColor:"#fff",subTitleColor:"#db6",snowColor:"rgba(100,150,255,0.5)",iconColor:"#ddd"},{bgColor:"#67f494",titleColor:"#4c5267",subTitleColor:"#363a51",snowColor:"rgb(92,197,158,0.5)",iconColor:"#1a2b42"},{bgColor:"#e00062",titleColor:"#ddd",subTitleColor:"#0b4f6c",snowColor:"rgb(66,0,92,0.5)",iconColor:"#ddd"},{bgColor:"#09B9ED",titleColor:"#ddd",subTitleColor:"#0b4f6c",snowColor:"rgb(250, 250, 254,0.5)",iconColor:"#444"},{bgColor:"#ed5",titleColor:"#433",subTitleColor:"#b36",snowColor:"rgba(255,255,120,0.5)",iconColor:"#555"}]}},25:function(e,t,o){e.exports=o(63)},30:function(e,t,o){},32:function(e,t,o){},34:function(e,t,o){},43:function(e,t,o){},53:function(e,t,o){},55:function(e,t,o){},57:function(e,t,o){},59:function(e,t,o){},61:function(e,t,o){},63:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(10),c=o.n(l),r=(o(30),o(2)),i=o(3),s=o(5),m=o(4),d=o(6),u=(o(32),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.children;return a.a.createElement("section",{className:"fullpage ".concat(this.props.className||""),id:this.props.id,style:this.props.style},e)}}]),t}(n.Component)),p=(o(34),function(e){return a.a.createElement("img",{style:{filter:"".concat(e.isInvert?"invert(100%)":"none")},className:"shadow-drop-2-top",src:e.icon,width:"30px"})}),h=o(1),g=o(23),b=(o(43),o(7)),v=o(24),f=o.n(v),w=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(e.colorSet!=this.props.colorSet)for(var o=document.getElementsByClassName("___snowStorm___"),n=0;n<o.length;n++)o[n].style.color=h.colorSets[this.props.colorSet].snowColor}},{key:"render",value:function(){var e=this;return[a.a.createElement(b.Element,{name:"homeSection",className:"element"}),a.a.createElement(u,{className:"first",id:"snow-target",style:{backgroundColor:"".concat(h.colorSets[this.props.colorSet].bgColor)}},a.a.createElement(f.a,{freezeOnBlur:!1,useTwinkleEffect:!1,vMaxX:0,vMaxY:1,followMouse:!1,snowStick:!1,snowColor:"rgba(255,255,255,0.5)",targetElement:"snow-target"}),a.a.createElement("div",{className:"page-body"},a.a.createElement("h1",{className:"title",style:{color:"".concat(h.colorSets[this.props.colorSet].titleColor)}},h.title),a.a.createElement("h3",{className:"lead",style:{color:"".concat(h.colorSets[this.props.colorSet].subTitleColor)}},h.subtitle),a.a.createElement("div",{className:"social-icon-container"},Object.keys(h.links).map(function(t){return a.a.createElement(g.SocialIcon,{key:t,url:h.links[t],bgColor:h.colorSets[e.props.colorSet].iconColor})}))),a.a.createElement(b.Link,{activeClass:"active",to:"aboutSection",spy:!0,smooth:!0,duration:500},a.a.createElement(p,{icon:h.icons.down})))]}}]),t}(n.Component),C=(o(53),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return[a.a.createElement(b.Element,{name:"aboutSection",className:"element"}),a.a.createElement(u,{className:"second"},a.a.createElement("div",{className:"page-body"},a.a.createElement("h2",{className:"title"},h.sections[0].title),a.a.createElement("hr",null),h.sections[0].items.map(function(e){return a.a.createElement("p",{className:"content"},e.content)})),a.a.createElement(b.Link,{activeClass:"active",to:"skillSection",spy:!0,smooth:!0,duration:500},a.a.createElement(p,{icon:h.icons.down,isInvert:!0})))]}}]),t}(n.Component)),E=(o(55),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.skill;return a.a.createElement("div",{className:"card",style:{"background-color":"".concat(e.content.color)}},a.a.createElement("div",{className:"image-wrapper"},a.a.createElement("img",{src:e.content.image,width:"150px",height:"150px"})),a.a.createElement("div",{className:"skill-title-wrapper"},a.a.createElement("h4",null,e.content.title)))}}]),t}(n.Component)),y=(o(57),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(u,{className:"third"},a.a.createElement(b.Element,{name:"skillSection",className:"element"}),a.a.createElement("h2",{className:"title"},h.sections[1].title),a.a.createElement("div",{className:"card-wrapper"},h.sections[1].items.map(function(e){return a.a.createElement(E,{skill:e})})))}}]),t}(n.Component)),k=(o(59),function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={wandIcon:h.icons.magicWand},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("nav",{className:"nav-bar"},a.a.createElement("div",{className:"nav-menu"},a.a.createElement(b.Link,{className:"nav-link",activeClass:"active",to:"homeSection",spy:!0,smooth:!0,duration:500},"Home"),a.a.createElement(b.Link,{className:"nav-link",activeClass:"active",to:"aboutSection",spy:!0,smooth:!0,duration:500},"About"),a.a.createElement(b.Link,{className:"nav-link",activeClass:"active",to:"skillSection",spy:!0,smooth:!0,duration:500},"Skills")),a.a.createElement("a",{className:"nav-icon",href:"#"},a.a.createElement("img",{src:this.state.wandIcon,onClick:function(){var t=window.scrollY;e.props.ColorChangerTrigger(t)},onMouseEnter:function(){e.setState({wandIcon:h.icons.magicWandHover})},onMouseLeave:function(){e.setState({wandIcon:h.icons.magicWand})},height:25,style:{display:"".concat(this.props.showWand?"":"none")}})))}}]),t}(n.Component)),j=(o(61),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleScroll=function(t){0==window.scrollY&&e.state.scrollBreaked?(window.scrollTo(0,e.state.scrollPos),e.setState({scrollBreaked:!1})):window.scrollY<=300?e.setState({showWand:!0}):e.setState({showWand:!1})},e.getRandomColor=function(){var t=Math.floor(4*Math.random()+0);return t===e.state.colorSet?e.getRandomColor():t},e.state={colorSet:0,showWand:!0,scrollPos:0,scrollBreaked:!1},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"changeColor",value:function(e){this.setState({colorSet:this.getRandomColor(),scrollBreaked:!0,scrollPos:e})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(k,{ColorChangerTrigger:this.changeColor.bind(this),showWand:this.state.showWand}),a.a.createElement(w,{colorSet:this.state.colorSet}),a.a.createElement(C,null),a.a.createElement(y,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.7caf02bf.chunk.js.map