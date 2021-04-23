function sayHi(name){
    console.log(`Hello,${name}`)
}
sayHi('John') // 回调函数

// 禁止Z重复申请函数声明是是一个表达式
let sayHile = function(name){
    console.log(`Hello,${name}`)
}
sayHile('Hello')


let age = prompt('what is your age?',18) // 创建条件
// 有条件声明一个函数
if(age<18){
    // 块级作用域
    function welcome(){
        console.log('Hello')
    }
    welcome();
}else{
    function welcome(){
        console.log('error')
    }
    welcome();
}
// welcome(); //error 只在他的函数声明的代码块可见

// for in  的使用
// for (key in object) {
//     // 对此对象属性中的每个键执行的代码
//   }

let user = {
    name: 'John',
    age:30,
    isAdmin:true
};

for( let key in user ){
    console.log(key);
    console.log(user[key])
}

let codes = {
    '49':'Germany',
    '41':'Switzerland',
    '44':'Great Britain',
    '1':'usa'
}
for( let code in codes){
    console.log(code) // 1,41,44,49
}

// Math.trunc 是内置的去除小数部分的方法。
console.log( String(Math.trunc(Number('49'))))
console.log( String(Math.trunc(Number('+49'))))
console.log( String(Math.trunc(Number('1.2'))))