'use strict';

// название класса всенда задаётся с большой буквы
// в классах не ставится ;
class Rectangle {
    // конструктор класса (создает обхъект с заданными параметрами)
    constructor(height, wigth) {
        // this - обращение к новому экземпляру созданного объекта
        this.height = height;
        this.wigth = wigth;
    }

    // методы класса
    // функция записывается без function и названия
    calcArea() {
        return this.height * this.wigth;
    }
}

// класс наследуется от Rectangle
class ColoredRectangleWithText extends Rectangle {
    constructor(height, wigth, text, bgColor) {
        // вызывает super конструктор родителя (наследует height и wigth)
        // всегда идёт первой строчкой
        super(height, wigth);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, Color: ${this.bgColor}`);
    }
}

// создаётся новый объект с именем square и значениями height и wigth переданными в конструктор
const square = new Rectangle(3, 15),
    square2 = new Rectangle(4, 8),
    square3 = new Rectangle(11, 22);

console.log(square.calcArea());     // 45
console.log(square2.calcArea());    // 32

const div = new ColoredRectangleWithText(5, 10, 'HI', 'red');

div.showMyProps();                  // Text: HI, Color: red

// вызов метода из Rectangle для объекта divб созданного классом ColoredRectangleWithText
console.log(div.calcArea());        // 50