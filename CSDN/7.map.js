var obj = {
    a: 1
}

var map = new Map([
    ['name', 'zhang'],
    [obj, 111]
])

console.log(map)
console.log(map.size)
console.log(map.set('cc', 111).set('bbb', 222))
console.log(map.get('cc'))
console.log(map.has('bbb'))
console.log(map.delete('bbb'))

console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries)

console.log(map.values())

map.forEach(function(item, index) {
    console.log(item, index);
})

console.log(Array.from(map))