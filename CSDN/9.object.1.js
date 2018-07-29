let obj1 = {};
let obj2 = Object.assign(obj1, {a: 1});
console.log(obj1 === obj2);

class A {
    constructor() {
        this.name = 'zhang'
    }

    getName() {
        return this.name;
    }
}

class B extends A{
    constructor() {
        super();
        this.age = 25
    }

    getAge() {
        return this.age;
    }
}

B.prototype.password = '123123';
B.prototype.getPass = function() {
    return this.password;
}

var b = new B();

Object.defineProperty(b, 'email', {
    value: 'zhangxkmail',
    writable: true,
    enumerable: false,
    configurable: false
})

Object.defineProperty(b, 'num', {
    value: 12,
    writable: true,
    enumerable: true,
    configurable: false
})

var sym = Symbol('test');
b[sym] = 'symbol property'


console.log(Object.keys(b)); // [ 'name', 'age', 'num' ]
console.log(Object.getOwnPropertyNames(b)) //[ 'name', 'age', 'email', 'num' ]
console.log(Object.getOwnPropertySymbols(b)) //[ Symbol(test) ]

for(let name in b){
    console.log(name);
    // name
    // age
    // num
    // password
    // getPass
}

console.log(Object.getOwnPropertyDescriptor(b, 'email'));
// { value: 'zhangxkmail',
//   writable: true,
//   enumerable: false,
//   configurable: false }