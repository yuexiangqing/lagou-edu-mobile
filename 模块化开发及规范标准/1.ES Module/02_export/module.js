// export var name = "foo module"
// export function hello(){
//     console.log("hello");
// }
// export class Person{}


// 在模块集中导出，更为常见，可以更加直观的了解导出了哪些成员
// var name = "foo module"
// function hello(){
//     console.log("hello");
// }
// class Person{}

// export{name,hello,Person}

// 可以重命名的方式
// export {
    // name as fooName,
    // name as default,
    // hello as fooHello
// }

// 还为default成员单独设计了一个特殊的用法
// export default name  
