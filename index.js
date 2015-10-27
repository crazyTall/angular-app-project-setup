var path = require('path');
var pixelsOfEightEntryPoint = require.resolve('pixelsOfEight');

var pixelsOfEightDir = path.dirname(pixelsOfEightEntryPoint) + '/app/sass';

function includePaths() {
    return [pixelsOfEightDir];
}

module.exports = {
    includePaths: includePaths()
};
