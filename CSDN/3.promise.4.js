function asyncFn(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(a + b);
        })
    })
}

let resultList = [];
asyncFn(1, 2)
.then(function(result) {
    resultList.push(result);
    return asyncFn(3, 4);
}) 
.then(function(result) {
    resultList.push(result)
})
.then(function() {
    console.log(resultList)
})
// console.log(resultList);

// 使用Promise.all
var promsie = Promise.all([asyncFn(1, 2), asyncFn(1, 2), asyncFn(1, 2)])
promsie.then(function(result) {
    console.log(result)
}).catch(function(error) {
    console.log(error)
})

var promsie = Promise.race([asyncFn(1, 2), asyncFn(1, 2), asyncFn(1, 2)])
promsie.then(function(result) {
    console.log(result)
}).catch(function(error) {
    console.log(error)
})

