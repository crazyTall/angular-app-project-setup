var path = require('path');
var whitelabelEntryPoint = require.resolve('app-white-label');

var whitelabelDir = path.dirname(whitelabelEntryPoint) + '/app/sass';

function includePaths() {
    return [whitelabelDir];
}

module.exports = {
    includePaths: includePaths()
};
