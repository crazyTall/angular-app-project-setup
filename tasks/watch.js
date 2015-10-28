'use strict';

module.exports = function () {

    var gulp        = require('gulp'),
        browserSync = require('browser-sync');

    gulp.task('watch', ['browserSync', 'sass', 'lint'], function () {
        gulp.watch(['./app/sass/*.scss', './app/sass/**/*.scss'], ['sass']),
        gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
            'lint'
        ]);
    });

};