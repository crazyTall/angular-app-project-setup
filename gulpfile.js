
'use strict';

var serve       = require('./tasks/serve.js'),
    browserSync = require('./tasks/browserSync.js'),
    sass        = require('./tasks/sass.js'),
    watch       = require('./tasks/watch.js');

watch();
sass();
browserSync();
serve();
