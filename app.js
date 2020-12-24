var a = 1;
var b = 2;
var c = a + b;

// Outputs to cli as it would to the browser console
// To run node code, just put node {js file}
console.log(c);

// function statement
function greet() {
    console.log("Hi");
}
greet();

// functions in js are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log("Hi again");
}
greetMe();

// use a function expression on the fly
logGreeting(function() {
    console.log("On the fly")
})
