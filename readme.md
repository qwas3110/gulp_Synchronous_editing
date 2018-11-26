<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <p align="center">The streaming build system</p>
</p>

# gulp  实时编辑

## 安装

1、全局安装gulp:

2、作为项目开发依赖(devdependencies) 安装:

[gulp官网安装说明](https://gulpjs.com/docs/en/getting-started/quick-start)

```
$ npm install --global gulp 
$ npm install --save-dev gulp
```

温馨提示：

如果安装不成功，可以使用国内的npm[淘宝npm](https://npm.taobao.org)

注意:使用国内安装,按照官网安装就可以了，如果还想使用国外 npm insgtall 就是国外
cnpm install 国内。

## gulp 你需要知道的gulp 概念
   
   * 其他构建系统，将他们复制到一个临时的地方，
   并在那里修改，因此每个任务都会对文件系统中的i/o带来损失。
   
   * gulp 将输入文件转换成一个内存流，因此i/o 只在所有任务最开始或最后完成，
   所以gulp速快快的原因。
   

## gulp 如何执行

   * gulpfile.js 要位于项目根目录中
   * Your project dir
     * gulpfile.js
     * sass
     * js
     * tests
     * imag
     * ........ 

   * gulp 规定你运行gulpfile.js 时应执行的所有任务
      * 测试 gulp 是否安装成功 gulpfile.js
     ```
     const gulp = require('gulp');
     
     gulp.task('default',function () {
         console.log('test successful')
     })
     ```
     * 运行测试,运行gulp命令时，要在自己的项目目录里面
     ``` 
     $ gulp 
        [11:06:00] Starting 'default'...
         test successful
        [11:06:00] Finished 'default' after 1.03 ms
     ```   

##  gulp-sass

* 安装，可以参考[官网](hhttps://sass-lang.com/install)安装
```
$ sudo npm install gulp-sass 
```

* .css文件放入 sass 文件夹,
  * .css文件改成 .sass
* 使用 gulp-sass插件 
  * 第一个参数作用 styles 样式。
  * 第二个参数函数 调用任务时执行
  * 第三 告诉 gulo 运行什么文件
      * gulp.src('sass/**/*.scss') 称为gulp对象源,查找sass 文件中带有.scss 扩展的文件
      * .pipe(sass()) 进入sass,提供目标位置
      * .pipe(gulp.desc('./css')) 要保存的位置
      * sass.logError()) 将日志错误函数，更该为默认行为
   
  * 详细[gulp安装使用](https://www.npmjs.com/package/gulp-sass)
  
```
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
```
## Gulp Autoprefixer

* Gulp Autoprefixer:自动修复程序,配置对象指定浏览器的自动修复程序选项

* 自动修复程序为哪个浏览器的版本添加前缀

* [安装与使用详细](https://www.npmjs.com/package/gulp-autoprefixer)
    * 安装
    ``` $ npm install --save-dev gulp-autoprefixer ```
   

## gulp watch 
* './sass/**/*.scss':文件路径,类型
* ['sass'] 第二个参数可以是任务函数中的回调，或者是带有一系列任务的数组
```
gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
```

## [browsersync 浏览器同步](https://www.browsersync.io/)

* 安装 browser-sync
``` npm install -g browser-sync ```
