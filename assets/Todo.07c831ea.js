import{a5 as f,a7 as t,a8 as r,a9 as s,ac as k,aa as a,ab as u,aP as h,aM as y,ar as m,as as T,at as g,Y as b,aQ as p,K as Q,V as v,aR as w,aS as V,ag as x,ad as C,aN as N}from"./index.3e8bde28.js";import{Q as B,a as I,b as d}from"./QList.eddf4ca0.js";import{Q as q}from"./QItemLabel.5feedfb0.js";import{Q as K}from"./QPage.341adaa3.js";const D={data(){return{newTask:"",tasks:[]}},methods:{deleteTask(i){this.$q.dialog({title:"Confirm",message:"Delete?",cancel:!0,persistent:!0}).onOk(()=>{this.tasks.splice(i,1),this.$q.notify("Task deleted")})},addTask(){this.tasks.push({title:this.newTask,done:!1}),this.newTask=""}}},L={class:"row q-pa-sm bg-primary"},S={key:0,class:"no-tasks absolute-center"},U=k("div",{class:"text-h5 text-primary text-center"}," No Tasks ",-1);function z(i,c,M,P,l,o){return t(),r(K,{class:"bg-grey-3 column"},{default:s(()=>[k("div",L,[a(y,{modelValue:l.newTask,"onUpdate:modelValue":c[0]||(c[0]=e=>l.newTask=e),onKeyup:h(o.addTask,["enter"]),class:"col",square:"",filled:"","bg-color":"white",placeholder:"Add task",dense:""},{append:s(()=>[a(u,{onClick:o.addTask,round:"",dense:"",flat:"",icon:"add"},null,8,["onClick"])]),_:1},8,["modelValue","onKeyup"])]),a(B,{class:"bg-white",separator:"",bordered:""},{default:s(()=>[(t(!0),m(g,null,T(l.tasks,(e,_)=>Q((t(),r(I,{key:e.title,onClick:n=>e.done=!e.done,class:w({"done bg-blue-1":e.done}),clickable:""},{default:s(()=>[a(d,{avatar:""},{default:s(()=>[a(V,{modelValue:e.done,"onUpdate:modelValue":n=>e.done=n,class:"no-pointer-events",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,null,{default:s(()=>[a(q,null,{default:s(()=>[x(C(e.title),1)]),_:2},1024)]),_:2},1024),e.done?(t(),r(d,{key:0,side:""},{default:s(()=>[a(u,{onClick:N(n=>o.deleteTask(_),["stop"]),flat:"",round:"",dense:"",color:"primary",icon:"delete"},null,8,["onClick"])]),_:2},1024)):p("",!0)]),_:2},1032,["onClick","class"])),[[v]])),128))]),_:1}),l.tasks.length?p("",!0):(t(),m("div",S,[a(b,{name:"check",size:"100px",color:"primary"}),U]))]),_:1})}var O=f(D,[["render",z]]);export{O as default};
