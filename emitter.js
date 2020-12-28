function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    //Create new property, and being an array
    this.events[type] = this.events[type] || [];
    //Push the function into the array
    this.events[type].push(listener);
}

//Thats how the listener gets triggered
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

//Make it available
module.exports = Emitter;