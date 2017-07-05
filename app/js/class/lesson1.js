function test(){
  let a = 1;
  console.log(a);
}
//ES6新增了块级作用域的概念，所谓块级作用域所在的范围就是在大括号里面的作用域{}，
// 而在大括号外面访问不到 如果在作用域外访问会报未定义的错误
//使用let命令是不会存在变量提升的 如果一个变量没有在没有定义之前访问会直接报错，不会像ES5语法一样报undefined
test();
// console.log(a);  //a is no defined

//ES6还增加了常量这个概念 常量的特点就是不能被改变
const PI = 0;
// PI = 3;  //这样会报错

const obj ={
  a:1
}
obj.a = 2; //不会报错 在常量是对象的时候或者引用类型的时候 可以改变或者添加属性都是可以的
console.log(obj)
