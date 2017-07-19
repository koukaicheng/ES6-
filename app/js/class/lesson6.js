// {
//   //  Array.of  把一组数据变量转化成数据类型
//
//   let arr = Array.of(3,4,7,9,11);
//   console.log('arr=',arr); //arr =[3,4,7,9,11]
//
//   let empty=Array.of();
//   console.log('empty',empty); //空
// }

// {
//   //Array.from 把数据变成真正的数组
//   let p=document.querySelectorAll('p');
//   console.log(p);
//   //这个时候p虽然是页面上p标签的集合 但是 他不是真正的数组  不能使用forEach
//   let pArr=Array.from(p);
//   console.log(pArr)
//   pArr.forEach(function(item){
//     console.log(item.textContent);
//   });
//   //Array.from  在转化数组的同时  还可以遍历数据 进行操作
//   console.log(Array.from([1,3,5],function(item){return item*2}));
// }
//
//fill  对数组进行操作  如果只有一个参数  那么数组里面的所有数据都会替换成参数  如果有三个参数
// 第一个参数是替换内容 后两个 是起始和结束的位置
// {
//   console.log('fill-7',[1,'a',undefined].fill(7)); //  7,7,7
//   console.log('fill,pos',['a','b','c'].fill(7,1,3)); a,7,7
// }
//
// {
//   //keys()  返回数组中数据得下标
//   for(let index of ['1','c','ks'].keys()){
//     console.log('keys',index);
//   }
//   //values 返回 数组中每个对应的值 不过得引入babel-polyfill  插件进行转义 浏览器无法兼容
//   for(let value of ['1','c','ks'].values()){
//     console.log('values',value);
//   }
//   //entries()  可以返回访问索引和对应的值
//   for(let [index,value] of ['1','c','ks'].entries()){
//     console.log('values',index,value);
//   }
// }

// {
//   console.log([1,2,3,4,5].copyWithin(0,3,4)); //把第0个数据替换 从第三个开始 到第五个结束
// }
//
// {
//   //find只会找出一个符合的值
//   //   findIndex只会找出一个符合的值的下标
//   console.log([1,2,3,4,5,6].find(function(item){return item>3}));
//   console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
// }
//
{
    // includes 判断数组中有没有包涵值
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
