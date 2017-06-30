import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';
//这个脚本的作用就是自动监听app下面的文件
 //启动browser这个服务 监听app目录下的js、css、ejs文件 如果发生变化，
  //  就启动相应的脚本把文件编译如转义ES5 并把这些文件放到server目录下的相应文件
gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js',['scripts']);
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
