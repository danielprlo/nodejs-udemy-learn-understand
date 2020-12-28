'use strict';

var EventEmitter = require('events');
var Greetr = require('./greetr');

var greeter1 = new Greetr();
greeter1.on('greet', function(data){
    console.log('Somemone greeted!'+ ' '+data);
});

greeter1.greet('Tony');

