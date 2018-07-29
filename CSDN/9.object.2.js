class User{
    constructor() {

    }
}

var p = {
    getName() {

    }
}

var user = new User();
console.log(user.__proto__ === User.prototype);  //true
Object.setPrototypeOf(user, p);
var proto = Object.getPrototypeOf(user);
console.log(proto === user.__proto__); // true

