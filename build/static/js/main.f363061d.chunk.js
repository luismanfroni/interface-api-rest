(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(266)},266:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(16),r=a.n(l),c=a(34),s=a(35),i=a(39),u=a(36),m=a(40),d=a(37),h=a(59),p=a(38),f=a.n(p),g=a(41),b=a.n(g),v=a(58),E=a.n(v),C=a(100),k=a.n(C),w=a(101),D=a.n(w);var y=function(e){return o.a.createElement(E.a,{component:"nav"},e.lista.map(function(t){return o.a.createElement(k.a,{button:!0,onClick:function(){return e.onListSelect(t)}},o.a.createElement(D.a,{primary:t.name}))}))},S=a(25),j=a.n(S);var O=function(e){return o.a.createElement("form",{noValidate:!0,autoComplete:"off",style:{padding:"30px"}},o.a.createElement(j.a,{fullWidth:!0,id:"standard-name",label:"Name",placeholder:" A",value:e.item.name,onChange:e.handleChanges("name"),margin:"normal",InputLabelProps:{shrink:!0}}),o.a.createElement(j.a,{fullWidth:!0,id:"standard-realease",label:"Release Date:",placeholder:" ",value:e.item.release_date,onChange:e.handleChanges("release_date"),margin:"normal",InputLabelProps:{shrink:!0}}),o.a.createElement(j.a,{fullWidth:!0,id:"standard-publisher",label:"Publisher:",placeholder:" ",value:e.item.publisher,onChange:e.handleChanges("publisher"),margin:"normal",InputLabelProps:{shrink:!0}}),o.a.createElement(j.a,{fullWidth:!0,id:"standard-platform",label:"Platform:",placeholder:" ",value:e.item.platform,onChange:e.handleChanges("platform"),margin:"normal",InputLabelProps:{shrink:!0}}),o.a.createElement(j.a,{fullWidth:!0,id:"standard-category",label:"Category:",placeholder:" ",value:e.item.category,onChange:e.handleChanges("category"),margin:"normal",InputLabelProps:{shrink:!0}}))},L=a(42),I=a.n(L),x=a(27),N=a.n(x),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).loadData=function(){return N.a.get("https://protected-shelf-19067.herokuapp.com/games/").then(function(e){return a.setState({listData:e.data})})},a.onNewData=function(){return a.setState({selected:{id:0,name:"",release_date:"",publisher:"",platform:"",category:""}})},a.onListSelect=function(e){return a.setState({selected:e})},a.onItemSave=function(){console.log(a.state.selected),0==a.state.selected.id?N.a.post("https://protected-shelf-19067.herokuapp.com/games",Object(h.a)({},a.state.selected)).then(function(){console.log("post to api successful"),a.onNewData(),a.loadData()}).catch(function(e){return console.log("post to api unsuccessful!!!",e)}):N.a.put("https://protected-shelf-19067.herokuapp.com/games/"+a.state.selected.id.toString(),a.state.selected).then(function(){console.log("put to api successful"),a.onNewData(),a.loadData()}).catch(function(e){return console.log("put to api unsuccessful!!!",e)})},a.onItemDelete=function(){0!=a.state.selected.id&&N.a.delete("https://protected-shelf-19067.herokuapp.com/games/"+a.state.selected.id.toString()).then(function(){console.log("delete to api successful"),a.onNewData(),a.loadData()}).catch(function(e){return console.log("delete to api unsuccessful!!!")})},a.handleChanges=function(e){return function(t){a.setState({selected:Object(h.a)({},a.state.selected,Object(d.a)({},e,t.target.value))})}},a.state={listData:[],selected:{}},a.loadData(),a.onNewData(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b.a,{container:!0,spacing:24},o.a.createElement(b.a,{item:!0,xs:5},o.a.createElement(f.a,null,o.a.createElement(y,{lista:this.state.listData,onListSelect:this.onListSelect}))),o.a.createElement(b.a,{item:!0,xs:7},o.a.createElement(f.a,null,o.a.createElement(O,{item:this.state.selected,onSave:this.onItemSave,handleChanges:this.handleChanges}),o.a.createElement(I.a,{variant:"contained",color:"primary",style:{marginLeft:"30px",marginBottom:"10px"},onClick:this.onNewData},"Novo"),o.a.createElement(I.a,{variant:"contained",color:"secondary",style:{marginLeft:"30px",marginBottom:"10px"},onClick:this.onItemDelete},"Deletar"),o.a.createElement(I.a,{variant:"contained",style:{color:"white",backgroundColor:"#37C337",marginLeft:"30px",marginBottom:"10px"},onClick:this.onItemSave},"Salvar")))))}}]),t}(o.a.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(P,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[102,1,2]]]);
//# sourceMappingURL=main.f363061d.chunk.js.map