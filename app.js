var buffer = new ArrayBuffer(8); //Store 8 bytes
var view = new Int32Array(buffer); //Int32 bits, we can store only 2 values (64 bits) 
view[0] = 5;
view[1] = 15;

console.log(view); 