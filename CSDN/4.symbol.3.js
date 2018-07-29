let iterator = function() {
    const _this = this;
    let i = 0;
    const users = Object.keys(_this);
    return {
        next() {
            return {
                value: {name: users[i], qq: _this[users[i++]]},
                done: i > users.length
            }
        }
    }
}

let obj = {zhang: '121212', song: '121212'};
obj[Symbol.iterator] = iterator;

let obj2 = {sdfsf: '121212', sdfs: '121212'};
obj2[Symbol.iterator] = iterator;
for(let name of obj){
    console.log(name);
}
for(let name of obj2){
    console.log(name);
}