import{ac as f,ae as t,af as r,ag as s,aj as k,ah as a,ai as u,b6 as h,aB as b,b7 as m,b8 as y,b9 as T,a3 as g,ba as p,O as v,a0 as w,aC as C,b3 as Q,an as x,ak as V,bb as B}from"./index.36f77e48.js";import{Q as I,a as N,b as d}from"./QList.83fe6a1f.js";import{Q as q}from"./QItemLabel.4f44a5f5.js";import{Q as D}from"./QPage.ba28a2f9.js";const K={data(){return{newTask:"",tasks:[]}},methods:{deleteTask(i){this.$q.dialog({title:"Confirm",message:"Delete?",cancel:!0,persistent:!0}).onOk(()=>{this.tasks.splice(i,1),this.$q.notify("Task deleted")})},addTask(){this.tasks.push({title:this.newTask,done:!1}),this.newTask=""}}},L={class:"row q-pa-sm bg-primary"},U={key:0,class:"no-tasks absolute-center"},z=k("div",{class:"text-h5 text-primary text-center"}," No Tasks ",-1);function O(i,c,S,j,l,o){return t(),r(D,{class:"bg-grey-3 column"},{default:s(()=>[k("div",L,[a(b,{modelValue:l.newTask,"onUpdate:modelValue":c[0]||(c[0]=e=>l.newTask=e),onKeyup:h(o.addTask,["enter"]),class:"col",square:"",filled:"","bg-color":"white",placeholder:"Add task",dense:""},{append:s(()=>[a(u,{onClick:o.addTask,round:"",dense:"",flat:"",icon:"add"},null,8,["onClick"])]),_:1},8,["modelValue","onKeyup"])]),a(I,{class:"bg-white",separator:"",bordered:""},{default:s(()=>[(t(!0),m(T,null,y(l.tasks,(e,_)=>v((t(),r(N,{key:e.title,onClick:n=>e.done=!e.done,class:C({"done bg-blue-1":e.done}),clickable:""},{default:s(()=>[a(d,{avatar:""},{default:s(()=>[a(Q,{modelValue:e.done,"onUpdate:modelValue":n=>e.done=n,class:"no-pointer-events",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,null,{default:s(()=>[a(q,null,{default:s(()=>[x(V(e.title),1)]),_:2},1024)]),_:2},1024),e.done?(t(),r(d,{key:0,side:""},{default:s(()=>[a(u,{onClick:B(n=>o.deleteTask(_),["stop"]),flat:"",round:"",dense:"",color:"primary",icon:"delete"},null,8,["onClick"])]),_:2},1024)):p("",!0)]),_:2},1032,["onClick","class"])),[[w]])),128))]),_:1}),l.tasks.length?p("",!0):(t(),m("div",U,[a(g,{name:"check",size:"100px",color:"primary"}),z]))]),_:1})}var P=f(K,[["render",O]]);export{P as default};
