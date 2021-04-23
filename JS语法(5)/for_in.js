var obj = {a:1, b:2, c:3};
for(var prop in obj) {
    console.log('obj.'+prop + " = " +obj[prop])
}
// hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

const object1 = { }

object1.property1 = 42;
console.log( object1.hasOwnProperty('property1')); // 判断是否是有值

// for of 使用

var arrayList = ["dog", "cat", "hen"];
arrayList.push('小组吧');
for(const currentValue of arrayList){
    console.log(currentValue);
}
// ECMAScript 5 增加了另一个遍历数组的方法，forEach()：

arrayList.forEach( (item,index,array) =>{
     console.log(item,index,array) // 字符串,索引,遍历的数组
})

function add(){
    var sum = 0; // 初始化变量
    for(var i= 0, j = arguments.length; i<j; i++){
        sum += arguments[i]; // 遍历数组
    }
    return sum;
}
add(2,3,4,5);
console.log(add(2,3,4,5))

// 求平均数

function avg(){
    var sum = 0;
    for( var i = 0, j=arguments.length; i<j;){
        sum += arguments[i];
    }
    return sum // arguments.length
}
console.log(avg(2,3,4,5)); // 取平均值

// 优化代码
// 这个就有用多了，但是却有些冗长。为了使代码变短一些，我们可以使用剩余参数来替换arguments的使用。在这方法中，我们可以传递任意数量的参数到函数中同时尽量减少我们的代码。这个剩余参数操作符在函数中以：

//  ...variable 的形式被使用，它将包含在调用函数时使用的未捕获整个参数列表到这个变量中。我们同样也可以将 for 循环替换为 for...of 循环来返回我们变量的值。

function 