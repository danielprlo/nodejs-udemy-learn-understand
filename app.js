var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    //Equivalente to super() in php
    EventEmitter.call(this);
    this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmitter);

//Greetr has also the EventEmitter prototype
//So its also an EventEmitter itself
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ' '+ data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();
greeter1.on('greet', function(data){
    console.log('Somemone greeted!'+ ' '+data);
});

greeter1.greet('Tony');

