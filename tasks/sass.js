'use strict';

module.exports = function () {

    var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass');

    gulp.task('sass', function() {
        gulp.src(['./app/sass/*.scss', './app/sass/**/*.scss'])
            .pipe(sass({
                includePaths : ['./app/sass']
            }).on('error', sass.logError))
            .pipe(gulp.dest('./app/generated/css'))
            .pipe(browserSync.reload({
                stream: true
            }));
    });

};