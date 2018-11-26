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




## gulp 说明

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

