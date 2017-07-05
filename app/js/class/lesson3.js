{
    //es5中正则构造函数的写法
    let regx = new RegExp('abc','i'); //两个参数 以字符串的形式
    let regx2 = new RegExp(/abc/i); // 一个参数，不能掺加字符串
    // console.log()
}
{
    // ES6中正则构造函数的写法
     let regx2 = new RegExp(/abc/i,'i'); //可以有两个参数 后面的字符串的I会把前边的i替换
}
{
//    Es6增加了y,u修饰符
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;
  //g , y修饰符的区别  都是全局匹配 g 不强调第一个字符串就能匹配上，能够继续往下寻找  y就不同 必须第一个就得匹配上 不然返回null
  console.log(a1.exec(s),a2.exec(s));  //a1.exec(s) bbb  ,a2.exec(s)bbb 结果一样
  console.log(a1.exec(s),a2.exec(s));  //a1.exec(s) bb  ,a2.exec(s)null
  //判断开启y修饰符
  console.log(a1.sticky,a2.sticky) //false,true
}
{
    // #构造函数#
    let regex = new RegExp('xyz', 'i'); //第一个参数是字符串，第二个是修饰符
    let regex2 = new RegExp(/xyz/i); //第一个参数是正则表达式，不接受第二个参数，否则会报错
    console.log(regex.test('xyz123'), regex2.test('xyz123'));
    console.log(regex.test('xyZ123'), regex2.test('xyZ123'));

    let regex3 = new RegExp(/abc/ig, 'i');
    console.log(regex3.flags); //原有正则对象的修饰符是ig，它会被第二个参数i覆盖

}

// 字符串对象的4个使用正则表达式的方法： match(),replace(),search(),split()这四个方法全部调用RegExp的实例的方法。

{
    let regex = new RegExp('xyz', 'ig');
    console.log(regex.test('xyz0XYZ1xyz2'), regex.exec('xyz0XYZ1xyz2'));
}

{
    // y修饰符
    let s = 'bbbb_bbb_bb_b';
    var a1 = /b+/g;
    var a2 = /b+/y;

    console.log(a1.exec(s), a2.exec(s)); // ["bbbb"],["bbbb"]
    console.log(a1.exec(s), a2.exec(s)); // ["bbb"],null

    console.log(a1.sticky, a2.sticky); //表示是否开启了粘连模式
}

{
    console.log('u修饰符',/^\uD83D/.test('\uD83D\uDC2A')); // true
    console.log('u修饰符',/^\uD83D/u.test('\uD83D\uDC2A')); // false
    // 大括号表示Unicode字符，只有加上u才能识别
    console.log(/\u{61}/.test('a')); // false
    console.log(/\u{61}/u.test('a')); // true
    console.log(/\u{20BB7}/u.test('𠮷')); // true
    // 点（.）字符不能识别码点大于0xFFFF的Unicode字符，必须加上u修饰符。
    let s = '𠮷';
    console.log('大于0xFFFF的Unicode字符',/^.$/.test(s)); // false
    console.log('使用u字符',/^.$/u.test(s)); // true

    // 使用u修饰符后，所有量词都会正确识别大于码点大于0xFFFF的Unicode字符。
    console.log('量词',/a{2}/.test('aa')); // true
    console.log('量词',/a{2}/u.test('aa')); // true
    console.log('量词',/𠮷{2}/.test('𠮷𠮷')); // false
    console.log('量词',/𠮷{2}/u.test('𠮷𠮷')); // true
}

{
    // #正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符（line terminator character）除外
    // U+000A 换行符（\n）
    // U+000D 回车符（\r）
    // U+2028 行分隔符（line separator）
    // U+2029 段分隔符（paragraph separator）
    // 只是一个提案目前还不支持
    // let reg=/test.go/s;
    // console.log(reg.test('test\ngo'));
    // console.log(reg.test('test\ngo'));
    console.log('s变通方法',/foo.bar/.test('foo\nbar'));
    console.log('s变通方法',/foo[^]bar/.test('foo\nbar'));
}

