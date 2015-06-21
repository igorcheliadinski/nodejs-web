var fs = require('fs');

var readStream = fs.createReadStream('./original.txt');
var writeStream = fs.createWriteStream('./copy.txt');

readStream.pipe(writeStream);