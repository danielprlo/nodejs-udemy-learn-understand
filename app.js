var Emitter = require('events');
//How to deal with magic strings
var eventConfig = require('./config').events;
var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said helo');
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting ocurredd!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);