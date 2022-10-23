'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`${this.name} всё`);
};

let names = ['Аарон', 'Абрам', 'Аваз', 'Августин', 'Авраам', 'Бахрам', 'Бенджамин', 'Блез', 'Богдан', 'Борис', 'Борислав', 'Бронислав', 'Булат'],
    allUsers = [];

for (let i = 0; i < names.length - 1; i++) {
    let id = Math.ceil(Math.random() * 1000000);

    allUsers.push(new User(names[i], id));
}

for (let i = 0; i < names.length - 1; i++) {
    allUsers[i].hello();
}

allUsers[0].hello();
allUsers[0].exit();