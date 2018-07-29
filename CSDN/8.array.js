var ele = {
    length: 2,
    '0': 'aaa',
    '1': 'bbb'
}

console.log(Array.from(ele)); //[ 'aaa', 'bbb' ]
let arr = Array.from(ele, function(item, index){
    return item + '----' + index
})
console.log(arr); 
//[ 'aaa----0', 'bbb----1' ]

let set = new Set([1,2,3,4]);
console.log(Array.from(set)); 
//[ 1, 2, 3, 4 ]

let map = new Map([
    [{a: 1, b: 3}, 1],
    ['a', 22]
])
console.log(Array.from(map)); 
//[ [ { a: 1, b: 3 }, 1 ], [ 'a', 22 ] ]

var arr1 = ['a', 'b', 'c', 'd'];
var find = arr1.find(function(value, index, arr) {
    console.log(value, index, arr);
    return value === 'c'; 
})
console.log(find) //c


var arr1 = ['a', 'b', 'c', 'd'];
var find = arr1.findIndex(function(value, index, arr) {
    console.log(value, index, arr);
    return value === 'c'; 
})
console.log(find) //c

let arr2 = [1,2,3,4];
arr2.copyWithin(2,0,4);
console.log(arr2);

arr2.fill(10, 1,9);
console.log(arr2);