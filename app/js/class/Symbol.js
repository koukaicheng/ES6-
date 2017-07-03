//Symbol是ES6新增的一种数据类型
{
  //声明
  let a1 = Symbol(); //没有使用new运算符
  let a2 = Symbol();
  console.log(a1===a2) //输出false
}