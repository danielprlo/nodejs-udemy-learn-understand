//Class declaration example
var person = {
    firstname: "Dani",
    lastname: "Perez",
    greet: function() {
        console.log("Hello, " + this.firstname +" "+ this.lastname)
    }
};

person.greet();

//Access attributes
console.log(person['firstname']);