//解构赋值 是es6新增的更加快捷的定义变量的一种定义方式
//主要是数组解构赋值和对象解构赋值
{
  let a,b,c;
  [a,b]=[1,2];
  // console.log(a,b);
  // console.log(c)
}
{
  let a,b,c;
  [a,b,...c] = [1,2,3,4,5,6,7,8];
  // console.log(a,b,c); //a = 1 b =2 默认值c =3,4,5,6,7,8
  // console.log(c)
}
{
  let a,b;
  ({a,b}={a:1,b:2})
  // console.log(a,b) //a =1 ;b =2
}
//默认值
{
  let a,b,c;
  [a,b,c]=[1,2];
  // console.log(a,b,c); //1,2,undefinde
}
{
 let a,b,c;
  [a,b,c=3]=[1,2];
  // console.log(a,b,c); //1,2,3
}
//那么解构赋值一般用在什么场景呢
{
  //便于变量的交换
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b) //2,1
}
{
  //接受函数返回的多个值
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  // console.log(a,b) //1,2

}
{
  //当一个函数返回多个 值得 可以选择性的接受值
  function f() {
      return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b] = f();//a = 1; //三个逗号之间有两个值，但是忽略了 我只想要接受第四个值  b=4
  console.log(a,b); //1,4
}

{
  //这个场景就是不清楚一个函数返回多少个值 我只想要第一个值  其余的返回一个数组
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b] = f();
    console.log(a,b);
}

//对象结构赋值  等号左右都是一个对象 根据key value进行匹配
{
  let o = {p:42,q:true};
  let {p,q} = o;
  console.log(p,q,o)
}
{
 //对象解构赋值的对默认值的处理
    let {a=10,b=5} = {a:3};
    console.log(a,b) //a=3 b =5;
}
{
  //对象解构赋值应用场景  感觉这个很有用
    let obj = {
      title:"kkc",
      test:[{
        title:"abc"
      }]
    }
    //我想要取出obj这个对象的两个title赋值给两个变量 如果是es5的话 是这样写的
    // let title1 = obj.title;
    // let title2 = obj.test[0].title;
    //但是es6语法只需要一行代码 简单明了赋值的时候大括号里面的解构一定要和取值的对象的解构一样
    let {title:title1,test:[{title:title2}]} = obj;
    console.log(title1,title2)

}