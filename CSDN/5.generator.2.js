function *fn(_name){
    let name = yield _name; //yield默认返回undefined
    return name;
}

let it = fn('zhang');
console.log(it.next());
console.log(it.next());
// { value: 'zhang', done: false }
// { value: undefined, done: true }

function *fn1(_name){
    let name = yield _name; //yield默认返回undefined
    return name;
}

let it2 = fn1('zhang');
console.log(it2.next());
console.log(it2.next('abc')); //想让yield返回值，需要在next()种传入参数
// { value: 'zhang', done: false }
// { value: 'abc', done: true }

