'use strict';

module.exports = function () {

    var gulp        = require('gulp'),
        jshint      = require('gulp-jshint');

    gulp.task("lint", function() {
        gulp.src("./app/scripts/*.js")
            .pipe(jshint())
            .pipe(jshint.reporter("default"));
    });

};