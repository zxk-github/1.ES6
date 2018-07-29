function *fn() {
    yield 1;
    yield 2;
    yield 3;
    return 4
}
let it = fn();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: true }

for(let name of it){
    console.log(name); 
    // 1
    // 2
    // 3
    // for of循环只会打印出done为false的值，所以return出来的值打印不出来
}
