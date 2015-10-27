'use strict';

var serve       = require('./tasks/serve.js'),
    jshint      = require('./tasks/jshint.js'),
    sass        = require('./tasks/sass.js'),
    watch       = require('./tasks/watch.js'),
    browserSync = require('./tasks/browserSync.js');

jshint();
watch();
sass();
browserSync();
serve();
