'use strict';

module.exports = function () {

    var gulp        = require('gulp'),
        browserSync = require('browser-sync');

    gulp.task('watch', ['browserSync', 'sass'], function () {
        gulp.watch('./app/sass/*.scss', ['sass']);
    });

};