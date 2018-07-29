var name = Symbol('zhang');
var name2 = Symbol('zhang');
// console.log(name === name2);

let obj = {
    a: "aaa",
    [name]: 'zhang'
}
console.log(obj[name]);
console.log(Object.keys(obj));  // ['a']
for(name in obj){
    console.log(name);
}
console.log(Object.getOwnPropertyNames(obj)); //['a']
console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol(zhang) ]

// 生成Symbol的方式
let s1 = Symbol.for('name');
let s2 = Symbol.for('name');
let s3 = Symbol.for('age');
console.log(s1 === s2) //true
console.log(s1=== s3)
console.log(Symbol.keyFor(s1))