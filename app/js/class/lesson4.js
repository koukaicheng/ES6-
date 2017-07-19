
//Unicode 表示法
// {
  // console.log('a',`\u0061`);
  //当超过两个字符的长度的时候  就是超过0xFFFF 会解析成两个字符
  // console.log('s',`\u20BB7`);
//解决方法
  // console.log('s',`\u{20BB7}`); //𠮷  不是吉祥的吉

// JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。
  //  对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），
  //  JavaScript会认为它们是两个字符。s
// }


// {
//   let s='𠮷';
//   console.log('length',s.length);  //为二
//  //取字符
//   console.log('0',s.charAt(0));
//   console.log('1',s.charAt(1));
  //取Unicode码值
  // console.log('at0',s.charCodeAt(0));
  // console.log('at1',s.charCodeAt(1));
  // let s1='𠮷a';
  // console.log('length',s1.length);  //3
  // codePointAt 为了取Unicode字符的码值
  // console.log('code0',s1.codePointAt(0));
  // console.log('code0',s1.codePointAt(0).toString(16));
  // console.log('code1',s1.codePointAt(1)); //只取最后两个字节
  // console.log('code2',s1.codePointAt(2));
  //汉字“𠮷”（注意，这个字不是”吉祥“的”吉“）的码点是0x20BB7，
  // UTF-16编码为0xD842 0xDFB7（十进制为55362 57271），需要4个字节储存。
  // 对于这种4个字节的字符，JavaScript不能正确处理，字符串长度会误判为2，
  // 而且charAt方法无法读取整个字符，charCodeAt方法只能分别返回前两个字节和后两个字节的值。
  //  var a = [1,2,3,4,5];
  //  a.splice(1,3,5,2,1);
  //  console.log(a)
// }
// ES6提供了String.fromCodePoint方法，
// 可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足。
// 在作用上，正好与codePointAt方法相反。
// {
  // console.log(String.fromCharCode("0x20bb7"));
  // console.log(String.fromCodePoint("0x20bb7"));
// }

// {
//   //没有正常的遍历
//   let str='\u{20bb7}abc';  //{20bb7} 当成了两个字节
//   for(let i=0;i<str.length;i++){
//     console.log('es5',str[i]);
//   }
// // for...of循环遍历。
//   for(let code of str){  
//     console.log('es6',code);
//   }
// }


//判断字符串位置  includes 判断字符串中是否有某个字符  返回结果为布尔
//str 判断字符串是否为某个字符开始的  返回布尔
//endWith 判断字符串是否W为某个字符结尾  返回布尔
// {
//   let str="string";
//   console.log('includes',str.includes("c"));
//   console.log('start',str.startsWith('str'));
//   console.log('end',str.endsWith('ng'));
// }
//repeat 通过repeat为字符串重复次数
// {
//   let str="abc";
//   let two = str.repeat(2);
//   console.log(two)
//   console.log(str.repeat(2)); //abcabc
// }
 //模板字符串
// {
//   let name="list";
//   let info="hello world";
//   let m=`i am ${name} ${info}`;
//   console.log(m);
// }
//ES7的草案  引入babel-polyfill 进行兼容编译
{
  // padStart 为一个字符串在起始位置增添长度为第一个参数减去实际长度的一个第二个参数指定的字符
  // padEnd 相反
  console.log('1'.padStart(3,'02')); // 01
  console.log('1'.padEnd(2,'0')); //10
}
// 标签模板
// {
//   let user={
//     name:'list',
//     info:'hello world'
//   };
//   console.log(abc`i am ${user.name} ,${user.info}`);
//   function abc(a,b,c){
//     console.log(a,b,c);
//     return a+b+c
//   }
// }

// {
//   // raw 这个方法  是对\n换行符进行了一个转义  在\前面又加了一个\
//   console.log(String.raw`Hi\n${1+2}`);  //不会换行
//   console.log(`Hi\n${1+2}`);
// }
