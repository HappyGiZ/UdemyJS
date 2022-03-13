'use strict';

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