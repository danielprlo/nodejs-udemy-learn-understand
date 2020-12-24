// Js example Module

var greet = function() {
    console.log('Hello');
};

// Expose functions outside de module
exports.greet = greet;
// we can expose attributes also
exports.text = 'hi';