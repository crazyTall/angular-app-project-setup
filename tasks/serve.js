'use strict';

module.exports = function () {

    var gulp        = require('gulp'),
        browserSync = require('browser-sync');

    gulp.task('serve', ['browserSync', 'watch', 'sass'], function () {});

};