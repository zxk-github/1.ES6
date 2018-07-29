function User(name, age) {
    this.name = name;
    this.age = age;
}

User.getClassName = function(){
    return 'username';
}

User.prototype.changeName = function(name) {
    this.name = name;
}

Object.defineProperty(User.prototype, 'info', {
    get() {
        return this.name + this.age;
    }
})

// let user = new User('zhang', 11)
// console.log(user);

function Manage(name, age, password) {
    // 使用call先创建manage自身的this，然后才能传入，所以说后面的不论是manage的方法，还是User.prototype原型上的方法，都会只想this
    User.call(this, name, age);
    this.password = password;
}

Manage.__proto__ = User; //继承静态方法
Manage.prototype = Object.assign({}, User.prototype);
Manage.prototype.getPassword = function() {
    return this.password;
}

var manage = new Manage('song', 12, 'abc');
console.log(manage) 


