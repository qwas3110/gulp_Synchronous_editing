'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))

        .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});