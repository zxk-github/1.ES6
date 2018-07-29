function asyncFn() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(1);
        })
    })
}

asyncFn()
.then(function(a){
    console.log(a); // 1
    return asyncFn();
})
.then(function(b) {
    console.log(b) // ok
})
.then(function(c) {
    console.log(c) // undefined
})