import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
//输入gulp命令 会自动查找default.js 运行build.js文件 加载脚本顺序
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
