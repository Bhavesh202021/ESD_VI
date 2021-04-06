exports.add= (x,y) => x + y
exports.sub= (x,y) => x - y
exports.multi= (x,y) => x*y
exports.div= (x,y) => x/y

exports.myrectangle = class{
    constructor(l, b){
        this.len = l;
        this.bre = b;
    }
    area(){
        let a = this.len*this.bre
        console.log(`Area of rectangle is ${a}`)
    }
    
}

exports.mycircle = class{
    constructor(r){
        this.rad = r;
    }
    circlearea(){
        let b = Math.PI*this.rad*this.rad
        console.log(`Area of circle is ${b}`)
    }
    
}