### ES6从入门到实战
#### ES6第一天：配置环境（配置了一天，windows命令是真坑）
 ## 项目结构
 <pre>
  ├── app                // 用ES6写的源代码 也就是开发代码
  ├── server             // 编译后的文件放的位置
       ├──public         // 编译后的css文件和转义成ES5并压缩所放的位置 
       ├──router         // express编译的路由文件所在位置
  ├── tasks              // 由gulp编译ejs模板、css文件编译、ES6转义ES6所用的各项命令和规则
  ├── views              // 编译的ejs页面
  ├──.babelrc            // ES6编译插件
  ├──gulpfile.babel.js   // 命令入口文件
</pre> 
