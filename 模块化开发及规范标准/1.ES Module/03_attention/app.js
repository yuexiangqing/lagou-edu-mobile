import{name,age}from "./module.js"
console.log(name,age);

// name= "tom"  //会报错，因为这是只读的 ，并不能在模块外部修改

setTimeout(function(){
    console.log(name,age);
},1500)