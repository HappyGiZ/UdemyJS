'use strict';

                                        // УСЛОВНОЕ ВЕТВЛЕНИЕ: if, '?'
let message;
let login = prompt('ваш логин');

// несколько условий if else
if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}

// Несколько операторов „?“
// login == ('Сотрудник') ? 'Hi!' :
//     ('Директор') ? 'Здравствуйте' :
//         ('') ? 'Нет логина' : '';
// alert(message);

                                        // ЦИКЛЫ

// while
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// do...while
// выполняет тело цикла пока введеное число меньше 100
// прерывает цикл, введеное число больше 100, или нажата отмена
let num;
do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// for
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
}

// использование continue для вывода только нечетных значений
for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) {
        continue;
    }
    alert(i); // 1, затем 3, 5, 7, 9
}

// метка для break/continue
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

        let input = prompt(`Значение на координатах (${i},${j})`, '');
        // если пустая строка или Отмена, то выйти из обоих циклов
        if (!input) {
            break outer;    // <---
        }   // сделать что-нибудь со значениями...
    }
}
alert('Готово!');


                                        // ОБЪЕКТЫ

// объект
const options = {
    name: 'test',
    width: 500,
    height: 500,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function () {
        console.log('TesT');    //функция внутри объекта
    }
};

// вывод ключей и значений объекта
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        console.log(`Объект: ${key} включает в себя:`);
        for (let i in options[key]) {
            console.log(`   Cвойство: ${i}, со значением: ${options[key][i]};`);
        }
    } else {
        console.log(`Cвойство: ${key}, имеет значение: ${options[key]};`);
    }
}

// количество ключей в объекте
console.log(Object.keys(options).length);

// запуск функции из объекта
options.makeTest();

// удаление свойства объекта (ключ+значения)
delete options.height;

// деструктуризация объекта
const { border, background } = options.colors;
console.log(border);



                                        // МАССИВЫ

// массив
const arr = [1, 2, 3, 4, 5, 6, 7];

// удаление последнего элемента массива
arr.pop();

// добавление указанного элемента в конец массива
arr.push(33);

// перебор массива обычным циклом
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// перебор массива методом for ... of (позволяет использовать break и continue)
// value - перебираемый элемент массива
// arr - массив в котором происходит перебор
for (let value of arr) {
    console.log(value);
}

// перебор массива методом forEachs
// item - перебираемый элемент массива
// i - номер позиции элемента
// arr - массив в котором происходит перебор
arr.forEach(function (item, i, arr) {
    console.log(`Элемент на позиции ${i}: ${item} (внутри массива ${arr})`);
});

// сортировка массива по алфавиту
// 1 - задаём вопрос пользователю 
// 2 - в ответ получаем строку с ответами, записанными через указанный разделитель
// 3 - сортируем массив по алфавиту
// 4 - выводим полученный массив строкой через указанный разделитель
const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));

// сортировка массива в порядке возрастания
// 1 - используем метод сортировки в алфавитном порядке, вызывая функцию
// 2 - функция сравнения
const array = [2, 13, 26, 8, 10];
array.sort(compareNum);
console.log(array);
function compareNum(a, b) {
    return a - b;
}