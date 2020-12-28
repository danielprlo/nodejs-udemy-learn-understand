var Emitter = require('./emitter');

var emtr = new Emitter();

// Add event listeners
emtr.on('greet', function(){
    console.log('Somewhere, someone said hello.')
});

emtr.on('greet', function(){
    console.log('A greeting ocurred!');
});


//The event was triggered
console.log('Hello!');
emtr.emit('greet');

