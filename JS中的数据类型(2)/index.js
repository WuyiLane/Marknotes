/**
 * JS 中的数据类型
 * [基本数量类型/原始值类型/值类型]
 *  & number
 *  & string
 *  & null
 *  & undefined
 *  & symbol
 *  & bigint  后面加n
 * 
 *  [引用数据类型]
 *   & object
 *   & {name} 对象
 *   & 正则
 *   & 。。。
 *   & function
 *   JSON / Set / Map 新的数据结构,而不是数据类型
 * 
 *  number 数字类型
 * + 正数 负数 零 小数
 * + Infinity 无穷大的值 -Infinity 负无穷
 * + NaN ( not a number) 不是一个有效的数字 但是它却属于number类型
 *  + isNaN(value) 检测一个值是否是非有效数字
 *  + JS 中常用的输出方案
 * [浏览器中弹出一个窗口]
 * +alert
 * +confirm
 * +prompt
 * 
 * [控制台输出 :F12/FN+F12]
 * + console.log
 * + console.time
 * +console.timeEnd
 * +console.table
 * 
 * 直接写到页面上中的
 * +document.write
 * +[element].innerHTML/innerText
 * +[input].value
 * +...
 * 
 * 
 * 显示与隐式类型转换
 *
 * 隐式类型转换（没有通过其他手段进行转换）
 * null 转换为0, false 转换为 0, undfind 没有办法隐式转换symbol 不能转换为数字类型
 *  引用类型 转换为数字 首先转换为字符串
 * 显示比如：parseFloat(parseFloat 转换成浮点数（小数）),(parseInt 转换成整数)(toString 转换成字符串)  
 *
 */
var num = 10 -'A';
console.log(typeof(num)); // 不能进行有效运算
console.log(isNaN(num))
if (isNaN(num)) {
    // alert('num不是有效数字吗?')
}
var str = '123.1px';
console.log(parseInt(str)); //123 将一个string转换成整数，只取第一个整数
console.log(3 * '8'); //24
console.log('3' * '8'); //24
console.log(3 * null);// null会转换成0
console.log(3 * false);//false转为0
console.log(3 * true);//true转为1
console.log(3 * '9px');//NaN 不是数字，不纯的数字没办法隐式类型转换
// console.log(3 * undefind);//NaN ubdefind没办法隐式类型转换