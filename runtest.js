(function (){

var fs            = require('fs');
var path          = require('path');
var _             = require('underscore');
CtoT              = require('./lib/coffee-script');

var filename, code, testcount, failcount;

files = _.filter(fs.readdirSync('test'), function (name) {
    return name.endsWith('.coffee');
});

testcount = 0;
failcount = 0;

_.forEach(files, function(file) {
    var name = file.substring(0,file.length - 7);
    var coffee = fs.readFileSync('test/' + file, { encoding: 'UTF8' });
    var expected = fs.readFileSync('test/' + name + '.ts', { encoding: 'UTF8' });
    var actual = CtoT.compile(coffee, { bare: true });
    if (actual !== expected) {
        console.log('========>', name);
        console.log('Expected:', JSON.stringify(actual));
        console.log('to be:   ', JSON.stringify(expected));
        failcount++;
    }
    testcount++;
});
console.log('Ran', testcount,  'tests');
if (failcount) {
    console.log('Failed', failcount, 'test(s)');
}
})();