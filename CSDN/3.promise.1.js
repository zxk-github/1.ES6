/*
function asyncFn(a, b, cb) {
    setTimeout(() => {
        cb(a + b)
    },200);
}


asyncFn(1, 2, function(result){
    if(result > 1) {
        asyncFn(result, 2, function(result){
            if(result > 1) {
                console.log(result);
            }
        })
    }
})
*/

function asyncFn(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(a > 2) {
                resolve(a+b)
            } else {
                reject(new Error('a litter 2'))
            }
        },200)
    })
}

asyncFn(1, 2)
.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(1);
    console.log(err);
})
.catch(function(error) {
    console.log(2)
    console.log(error)
})