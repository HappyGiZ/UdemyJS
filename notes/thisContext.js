'use strict';

// 1) Обычная функция: this = window, но если use strict, this = undefined
// 2) Если используется метод внутри объекта, то контекст метода = сам объект
// 2.1) Если используется функция внутри метода объекта, контекст будет как в п.1
// 3) В конструкторах и классах this = новый экземпляр объекта (объект, созданный конструктором/классом)
// 4) Ручная привязка this: call, aply, bind

// 1
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return this.a + this.b;
    }
    console.log(sum());
}

showThis(4, 5);

// 2
const objct = {
    a: 20,
    b: 15,
    sum: function () {
        function shout() {
            console.log(this);
        }
        shout();
    }
};
objct.sum();

// 2.1
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.qqq = function () {
        console.log(this); // User{___}
    };
}

// 3
let Ivan = new User('Goga', 24);
Ivan.qqq();

function sayName(surname) {
    console.log(this);

    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

// 4
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}

const bouble = count.bind(2);
console.log(bouble(3));         // 6
console.log(bouble(11));        // 22

// 5
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this);          // при классическом написании function this=объект вызова (button)
    this.style.backgroundColor = 'red'; // при стрелочной - undefined
});

const obkt = {
    num: 5,
    sayNumber: function () {
        const say = () => {     // у стрелочных функций нет контекста вызова this
            console.log(this);  // поэтмоу this ссылкается на родителя (метод sayNumber)
        };                      // у метода контекст ссылкатся на объект в котором он существует
        say();                  // поэтому вызов this в данном случае вернёт объект obkt
    }
};

obkt.sayNumber();               // {num: 5, sayNumber: ƒ}