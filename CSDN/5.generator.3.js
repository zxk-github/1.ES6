function asyncFn() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(2)
        },200)
    })
}

function *Fn() {
    console.log(yield asyncFn())
}

let gf = Fn();

function exec(gf, value) {
    let result = gf.next(value);
    if(!result.done) {
        if(result.value instanceof Promise) {
            result.value.then(function(v) {
                exec(gf, v)
            })
        }else{
            exec(gf, result.value)
        }
    }
}

exec(gf)