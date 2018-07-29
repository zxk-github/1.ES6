const arr = [1,2,3,1];
const set = new Set(arr);
console.log(set);
set.add(8).add(2);
console.log(set)

console.log(set.delete(2))

console.log(set.has(3));

console.log(set)
console.log(set.size)

console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)
console.log(Set.prototype[Symbol.iterator] === Set.prototype.keys) 

let keys = set.keys();
for(let key of keys) {
    console.log(key);
}

let values = set.values();
for(let value of values){
    console.log(value)
}

let entries = set.entries();
for(entry of entries){
    console.log(entry)
}




