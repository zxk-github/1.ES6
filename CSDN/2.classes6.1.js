class User {
    constructor(name, age) {
        this.name = name; 
        this.age = age;
    }
    static getClassName() {
        return 'username';
    }
    changeName(name) {
        this.name = name;
    }
    get info() {
        return this.name + this.age;
    }
}

class Manage extends User{
    constructor(name, age, password) {
        // 先创建父对象
        super(name, age)
        this.password = password;
    }
    
    changePassword(password) {
        this.password = password;
    }

    get info() {
        let info = super().info;
        return info;
    }
}

class I extends Manage {
    constructor(...arg) {
        super(...arg)
    }
}



