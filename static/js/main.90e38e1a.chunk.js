(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a(9),r=a(11),o=a(10),l=a(0),c=a.n(l),i=a(30),p=a.n(i),m=a(14),u=a(1),f=(a(38),a(7)),h=a.n(f),d=a(12),k=a(16),b=a.n(k);var g=function(e){for(var t=e.split(" -"),a=0;a<t.length;a++)t[a]=t[a][0].toUpperCase()+t[a].substring(1);return t.join(" ")},v=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",imageUrl:"",pokeIndex:"",offset:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t,a,n,s,r,o,l,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,a=t.name,n=t.url,s=t.offset,r=g(a),o=n.split("/"),l=o[o.length-2],c="https://pokeres.bastionbot.org/images/pokemon/"+l+".png",this.setState({name:r,imageUrl:c,pokeIndex:l,offset:s});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"col-lg-2 col-md-3 col-sm-6 border bg-light p-4"},c.a.createElement(m.b,{to:"/pokemon/".concat(this.state.offset,"/").concat(this.state.pokeIndex)},c.a.createElement("img",{src:this.state.imageUrl,alt:this.state.name,width:"125em",height:"125em"}),c.a.createElement("br",null),c.a.createElement("b",null,this.state.name)))}}]),a}(c.a.Component),E=(a(62),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pokemon:null,prev:null,next:null,offset:"0"},e.getOffset=function(e){return new URL(e).searchParams.get("offset")},e.prevPage=function(){e.updatePokelist(e.state.prev)},e.nextPage=function(){e.updatePokelist(e.state.next)},e}return Object(s.a)(a,[{key:"updatePokelist",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t);case 2:a=e.sent,n=this.getOffset(t),this.setState({pokemon:a.data.results,prev:a.data.previous,next:a.data.next,offset:n});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t,a,n,s,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.offset,a="https://pokeapi.co/api/v2/pokemon/?offset="+t+"&limit=24",e.next=4,b.a.get(a);case 4:n=e.sent,s=n.data.results,r=n.data.previous,o=n.data.next,this.setState({pokemon:s,prev:r,next:o,offset:t}),console.log(t);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.pokemon?c.a.createElement("div",null,c.a.createElement("div",{className:"row"},this.state.pokemon.map((function(t){return c.a.createElement(v,{key:t.name,name:t.name,url:t.url,offset:e.state.offset})}))),this.state.prev?c.a.createElement("button",{className:"bg-danger text-white px-3",onClick:this.prevPage},"Prev"):c.a.createElement("div",null),this.state.next?c.a.createElement("button",{className:"bg-danger text-white px-3",onClick:this.nextPage},"Next"):c.a.createElement("div",null)):c.a.createElement("div",null,"Loading Pokemon")}}]),a}(c.a.Component)),x=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement(E,{offset:this.props.match.params.offset})))}}]),a}(c.a.Component),y=a(32),O={normal:"A8A77A",fire:"EE8130",water:"6390F0",electric:"F7D02C",grass:"7AC74C",ice:"96D9D6",fighting:"C22E28",poison:"A33EA1",ground:"E2BF65",flying:"A98FF3",psychic:"F95587",bug:"A6B91A",rock:"B6A136",ghost:"735797",dragon:"6F35FC",dark:"705746",steel:"B7B7CE",fairy:"D685AD"},j=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",pokeIndex:"",prevIndex:"",nextIndex:"",imageUrl:"",types:[],description:"",stats:{hp:"",atk:"",def:"",spAtk:"",spDef:"",speed:""},abilities:[],offset:""},e}return Object(s.a)(a,[{key:"nextPokemon",value:function(){this.setState({pokeIndex:this.nextPokeIndex})}},{key:"prevPokemon",value:function(){this.setState({pokeIndex:this.prevPokeIndex})}},{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t,a,n,s,r,o,l,c,i,p,m,u,f,d,k,v;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.pokeIndex,a=this.props.match.params.offset,n="https://pokeapi.co/api/v2/pokemon/"+t+"/","https://pokeapi.co/api/v2/pokemon-species/"+t+"/",s="https://pokeres.bastionbot.org/images/pokemon/"+t+".png",e.next=7,b.a.get(n);case 7:r=e.sent,console.log(r),o=g(r.data.name),l=r.data.types,"",c=Object(y.a)("",6),i=c[0],p=c[1],m=c[2],u=c[3],f=c[4],d=c[5],r.data.stats.map((function(e){switch(e.stat.name){case"hp":i=e.base_stat;break;case"attack":p=e.base_stat;break;case"defense":m=e.base_stat;break;case"special-attack":u=e.base_stat;break;case"special-defense":f=e.base_stat;break;case"speed":d=e.base_stat}})),k=r.data.abilities,(parseInt(t)-1).toString(),v=(v=parseInt(t)+1).toString(),this.setState({name:o,pokeIndex:t,nextIndex:v,imageUrl:s,types:l,stats:{hp:i,atk:p,def:m,spAtk:u,spDef:f,speed:d},abilities:k,offset:a});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"py-lg-5 px-4 py-3 col-lg-3 col-md-6 col-sm-9 border bg-light "},c.a.createElement("h2",null,this.state.name),c.a.createElement("img",{src:this.state.imageUrl,alt:this.state.name,width:"150em",height:"150em"})),c.a.createElement("div",{className:"py-lg-5 p-3 col-lg-3 col-md-6 col-sm-9 border bg-light "},c.a.createElement("h4",null,"Type: "),c.a.createElement("ul",null,this.state.types.map((function(e){return c.a.createElement("li",{className:"badge badge-pill px-3 m-1",key:e.type.name,style:{backgroundColor:"#".concat(O[e.type.name]),fontSize:14}},g(e.type.name))})))),c.a.createElement("div",{className:"py-lg-5 p-3 col-lg-3 col-md-6 col-sm-9 border bg-light "},c.a.createElement("h4",null,"Ability: "),c.a.createElement("ul",null,this.state.abilities.map((function(e){return c.a.createElement("li",{key:e.ability.name},g(e.ability.name))})))),c.a.createElement("div",{className:"py-lg-5 p-3 col-lg-3 col-md-6 col-sm-9 border bg-light "},c.a.createElement("h4",null,"Base Stats: "),c.a.createElement("ul",null,c.a.createElement("li",null," HP:    ",this.state.stats.hp," "),c.a.createElement("li",null," Attack:  ",this.state.stats.atk," "),c.a.createElement("li",null," Defense:  ",this.state.stats.def," "),c.a.createElement("li",null," Special Attack:  ",this.state.stats.spAtk," "),c.a.createElement("li",null," Special Defense: ",this.state.stats.spDef," "),c.a.createElement("li",null," Speed: ",this.state.stats.speed," ")))),c.a.createElement(m.b,{to:"/pokemon/".concat(this.state.offset,"/")},c.a.createElement("button",null,"Back to PokeDex")))}}]),a}(c.a.Component),w=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar text-white bg-danger"},c.a.createElement("h3",null,"PokeDex")),c.a.createElement(m.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/pokemon/:offset/",component:x}),c.a.createElement(u.a,{exact:!0,path:"/pokemon/:offset/:pokeIndex/",component:j}))))}}]),a}(c.a.Component);p.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.90e38e1a.chunk.js.map