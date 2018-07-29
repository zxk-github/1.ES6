class UserGroup{
    constructor(users) {
        this.users = users;
        //{zhang: '121212', song: '121212'}
    }
    [Symbol.iterator]() {
        //每次iterater调用都是一次全新的接口，所以使用到的需要全部重新初始化
        const _this = this;
        let i = 0;
        const users = Object.keys(_this.users);
        return {
            next() {
                return {
                   value: {name: users[i], qq: _this.users[users[i++]]},
                   done: i > users.length
                }
            }
        }
    }
}

const users = new UserGroup({zhang: '121212', song: '121212'})
const ite = users[Symbol.iterator]();
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
for(let name of users){
    console.log(name) 
    // { name: 'zhang', qq: '121212' }
    // { name: 'song', qq: '121212' }
}

