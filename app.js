var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}


// Both are pointing to the same prototype
// You create a new object that has in its prototype chain the 
// object person
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log('test');
console.log(john.greet());
console.log(jane.greet());

// This would fail, because there is not a constructor 
// in person.
//var john2 = new person();