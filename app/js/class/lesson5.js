// {
//   //二进制
//   console.log('B',0B111110111);
//   //八进制
//   console.log(0o767);
// }

// {
//   //Number.isFinite  来判断值是不是有效的
//   //  Number.isNaN  来判断值是不是NaN
//   console.log('15',Number.isFinite(15));
//   console.log('NaN',Number.isFinite(NaN));
//   console.log('1/0',Number.isFinite(55/0));
//   console.log('NaN',Number.isNaN(NaN));
//   console.log('0',Number.isNaN(0));
//
// }
//Number.isInteger 来判断值是不是整数
// {
//   console.log('25',Number.isInteger(25));
//   console.log('25.0',Number.isInteger(25.0));
//   console.log('25.1',Number.isInteger(25.1));
//   console.log('25.1',Number.isInteger('25'));
// }
//Number.isSafeInteger 判断值是不是有效的
// {
//   console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
//   console.log('10',Number.isSafeInteger(10));
//   console.log('a',Number.isSafeInteger('a'));
// }
//Math.trunc  判断小数的整数部分
// {
//   console.log(4.1,Math.trunc(4.1));
//   console.log(4.9,Math.trunc(4.9));
// }
//Math.sign 判断值是正负还是0 负数返回-1 正数返回1 0返回0
// {
//   console.log('-5',Math.sign(-5));
//   console.log('0',Math.sign(0));
//   console.log('5',Math.sign(5));
//   console.log('50',Math.sign('50')); //转换成50 进行判断
//   console.log('foo',Math.sign('foo')); //转换失败返回NAN
// }

//Math.cbrt  值的立方根
{
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
}
