
'use strict';

module.exports = function () {

    var gulp        = require('gulp'),
        browserSync = require('browser-sync');

    gulp.task('browserSync', function() {
        browserSync.init([
                './app/css/*.css',
                './app/**/*.js',
                './**/*.html'
            ],
            {
                notify: false,
                server: {
                    baseDir: ['./app']
                },
                port: 3500,
                browser: [],
                tunnel: false
            });
    });

};