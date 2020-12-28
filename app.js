var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
//The difference is that we can send variables
//And override stuff
obj.greet.call({name: 'Jane Daa'}); //{param0}, {para1}...}
// This way you can send an array of params
obj.greet.apply({name: 'Jane Daa'}); //[{param0},{paramn1}...]