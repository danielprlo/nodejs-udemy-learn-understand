var buf = new Buffer('Hello', 'utf8'); //utf8 is the default coding

//Other functions
buf.toString();
buf.toJSON();
buf.write("text"); //This will override the content

console.log(buf);