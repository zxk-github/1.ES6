let obj = {
    length: 2,
    '0': 1,
    '1': 2
}

obj[Symbol.iterator] = [][Symbol.iterator];
for(let name of obj){
    console.log(name);
}

// set map arr string 都实现了[Symbol.iterator]，可以直接使用for of
