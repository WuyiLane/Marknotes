## 马克密笔记
#### + ESMAScript JS的语法规范
#### +DOM(document object model 文档对模型)：提供一系列的属性和方法,让我们获取元素以及操作元素
#### +BOM(brower object model 浏览器对象模型)提供一系列的属性和方法 让我们操作浏览器

#### ESMAScript:E3/5或者ES6+

# 3. 命名规范
+基于数字、字母,下划线,$命名
 +下划线$,可以使用开头,数字不能作为名字开头
 + $一般会作为名字的开始,很少会放到中间
 + 约定俗成的特点:$开始的变量一般用来储存JQ获取的值,_开始的变量一般代表全局或者公共
 + 基于驼峰命名法
 + 复杂名称由多个单词拼接成(单词的简拼)
 +第一个单词首字母小写
 +其余一个有意义单词的首字母大写
 + 语义化要明显，少使用a/b/c/y/z/n/m
 + 不能使用关键字和保留字
 + 关键字：Js中有特殊含义(var let const function import break continue return)
##### 1. 变量
- 一个可以变化的量 
+ 传统方式： var /function
++ function fn(){} // 声明一个变量叫做fn,储存的数据值是一个函数
+ 新的方案： let / const / import
+ let m
+ const x
+ import z  from './xx' // Module 导入导出
- 一个名字
- 这个名字可以代表和储存不同的数据
##### 2. 变量
- 一个不可变化的量
- 这个值不可改变

# 4. JS中的数据类型(都有哪些数据类型的值)
+ [基本数据类型/值类型/原始数据类型]
+ 数字 number
+ 字符串 string
+ 布尔 boolean
+ 空 null
+ 未定义 undefined
+ 唯一值 symbol
+ 大数字 bigint
## + [引用数据类型]
+ 对象类型 object
+ {key:value} 普通对象
+{value,....}
+ // 单行 注释
+/***/ 多行注释 
+ 正则 /^[+-]?(\d |([1-9]\d+))(\.\d+)?$/ 正则对象 RegExp
+ Web Sep 09 2020 11:58:24 GET+0800(中国标准时间) 日期对象 Date

+ 函数类型 function


