(this.webpackJsonpstarwarsapp=this.webpackJsonpstarwarsapp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),i=(a(21),a(1)),o=a(2),l=a(4),p=a(3),u=(a(13),a(7)),m=a(5),h=a(15),g=a(11),d={characters:[]},f=Object(m.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return Object(g.a)(Object(g.a)({},e),{},{characters:t.payload.results});default:return e}}}),v=Object(m.e)(f,Object(m.d)(Object(m.a)(h.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),b=(a(28),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"This is the header"))}}]),a}(n.Component)),E=(a(29),a(30),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group styling"},r.a.createElement("label",null,"Search: "),r.a.createElement("input",{id:"inputs",onChange:function(t){return e.setState({searchtext:t.target.value})},type:"text",style:{color:"white",backgroundColor:"rgba(0,0,0,.2)",width:"180px"}}),r.a.createElement("button",{type:"submit",onClick:function(){return e.props.textsearched(e.state.searchtext)},style:{color:"white",backgroundColor:"rgba(0,0,0,.2)"}},"Filter!")))}}]),a}(n.Component)),O=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"space"},r.a.createElement("div",{className:"selections"},r.a.createElement(E,{textsearched:function(t){return e.props.textsearched(t)}})))}}]),a}(n.Component),y=(a(31),a(32),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{className:"row",style:{paddingRight:0,paddingTop:"10px",paddingLeft:"10px"}},r.a.createElement("div",{className:"CharacterImage col-3"},"R2-D2"===this.props.name?r.a.createElement("img",{src:"./images/R2-D2.png",alt:"?"}):"C-3PO"===this.props.name?r.a.createElement("img",{src:"./images/C-3PO.png",alt:"?"}):"Luke Skywalker"===this.props.name?r.a.createElement("img",{src:"./images/Luke Skywalker.png",alt:"?"}):"Beru Whitesun lars"===this.props.name?r.a.createElement("img",{src:"./images/Beru Whitesun lars.png",alt:"?"}):"Biggs Darklighter"===this.props.name?r.a.createElement("img",{src:"./images/Biggs Darklighter.png",alt:"?"}):"Darth Vader"===this.props.name?r.a.createElement("img",{src:"./images/Darth Vader.png",alt:"?"}):"Leia Organa"===this.props.name?r.a.createElement("img",{src:"./images/Leia Organa.png",alt:"?"}):"Obi-Wan Kenobi"===this.props.name?r.a.createElement("img",{src:"./images/Obi-Wan Kenobi.png",alt:"?"}):"Owen Lars"===this.props.name?r.a.createElement("img",{src:"./images/Owen Lars.png",alt:"?"}):"R5-D4"===this.props.name?r.a.createElement("img",{src:"./images/R5-D4.png",alt:"?"}):"image"),r.a.createElement("div",{className:"col-5"},r.a.createElement("div",{className:"row"},this.props.name),r.a.createElement("div",{className:"row",style:{fontSize:15}},"HT/WT:",this.props.height,"/",this.props.weight)),r.a.createElement("div",{className:"drop col-2",style:{float:"right",marginTop:"-20px"}},this.props.gender)),r.a.createElement("div",{className:"row",style:{marginTop:"10px",paddingTop:"10px",fontSize:15,backgroundColor:"rgba(0,0,0,.8)",overflow:"hidden",justifyContent:"flex-end",marginLeft:"0px !important",marginRight:"0px !important"}},"eyes:",this.props.eyes," hair:",this.props.hair," ",r.a.createElement("span",null," "))),r.a.createElement("div",{className:"drop2 col-2",style:{fontSize:50,backgroundColor:"rgba(0,0,0,.6)",alignContent:"space-between"}},r.a.createElement("i",{style:{marginTop:"25px",backgroundColor:"rgba(0,0,0,.6)"},className:"fa fa-plus-circle"}))))}}]),a}(n.Component)),j=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.posts&&this.props.posts.map((function(e,t){return r.a.createElement("div",{className:"space",key:t},r.a.createElement(y,{name:e.name,height:e.height,weight:e.mass,hair:e.hair_color,eyes:e.eye_color,gender:e.gender}))}));return r.a.createElement("div",null,e)}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).textsearched=function(e){var t=[];for(var a in n.state.posts){var r=!1,s=n.state.posts[a];for(var c in s){var i=JSON.stringify(s[c]).toLowerCase();i.startsWith(e.toLowerCase(),1)&&(r=!0,console.log(i," and ",e))}!0===r&&t.push(s)}n.setState({filteredposts:t})},n.state={posts:e.characters,filteredposts:e.characters},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.props.characters!==this.state.posts&&this.setState({posts:this.props.characters,filteredposts:this.props.characters})}},{key:"componentWillMount",value:function(){this.props.fetchPosts()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container2"},r.a.createElement(b,null),r.a.createElement("img",{class:"starwars",src:"http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png",alt:"?"}),r.a.createElement(O,{textsearched:function(t){return e.textsearched(t)}}),null!=this.state.filteredposts&&r.a.createElement(j,{posts:this.state.filteredposts}))}}]),a}(n.Component),k=Object(u.b)((function(e){return{characters:e.posts.characters}}),(function(e){return{fetchPosts:function(){return e((function(e){var t=new Request("https://swapi.dev/api/people/");fetch(t).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_POSTS",payload:t})}))}))}}}))(w),C=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null))}}]),a}(n.Component),N=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{store:v},r.a.createElement(C,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.ee37f311.chunk.js.map