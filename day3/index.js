var mymath = require("./mymodule")
console.log(mymath.add(59,60))
console.log(mymath.sub(9,6))
console.log(mymath.multi(5,6))
console.log(mymath.div(59,6))

console.log("Hello world");

recobj = new mymath.myrectangle(5,4)
recobj.area()

recobj = new mymath.mycircle(5)
recobj.circlearea()