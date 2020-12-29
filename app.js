var fs = require('fs');
var fs = require('fs');

//highWaterMark to set the buffer size in bites.
//For this example we set 8kb so we get chunks 
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 8 * 1024}); 

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt'); 

//If the data is bigger than the buffer we will get chunks
//of data emitting events
readable.on('data', function(chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});
  