console.log(Object.keys(obj).length);                   //количество ключей в объекте

const { border, bg } = options.colors;                  // деструктуризация объекта



const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),

    hearts = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper'),       // первый элемент с классом .wrapper
    oneHeart = wrapper.querySelectorAll('.heart'),      // все элементы .heart исключительно внутри wrapper

    dif = document.createElement('div');



box.prepend(dif);                                       // вставить dif в начале родительского box
box.append(dif);                                        // вставить dif в конце родительского box
box[i].after(dif);                                      // вставить dif после i элемента box
box[i].remove();                                        // удалить i элемент box
box[i].replaceWith(iBox[j]);                            // заменить элемент box[i] элементом iBox[j]

dif.innerHTML = `<h2>Hello world</h2>`;                 // вставка HTML элемента в dif
dif.insertAdjacentHTML('', `<h2>hi man</h2>`);          // вставка HTML элемента в определённое место в dif


// всплытие событий - обработчик срабатывает сначала на самом вложенном элементе
// затем на родителе (если он есть)
// и так выше и выше по иерархии
const btns = querySelectorAll('button');                 // создается массив элементов (кнопок)

const informer = (e) => {                               // e - аргумент Event (событие)
    console.log(e.target);                              // элемент на котором изначально произошло событие
    console.log(e.currentTarget);                       // конкретная цель события (учитывая вложенность)

};

btn.addEventListener('click', informer);
overlay.addEventListener('click', informer);

btn.removeEventListener('click', deleter);              // удаление обработчика


e.preventDefault();                                     // отмена стандартного поведения элемента (всегда помещается в начале обработчика)

btns.forEach(element => {                                // примерение функции для каждого элемента (кнопки)
    element.addEventListener('click', informer, { once: true });    // { once: true } - один раз
});



console.log(document.querySelector('#current').parentNode); // получение родителя элемента



box.classList.length;                                       // узнать количество классов у элемента
box.classList.item(0);                                      // получить класс элемента под номером (0)
box.classList.add('red');                                   // добавить класс
box.classList.remove('blue');                               // удалить
box.classList.toggle('blue');                               // переключить (добавить/удалить) класс
box.classList.contains('red');                              // полверить есть ли класс (true/false)



const now = new Date();

console.log(now.getFullYear());         // (getUTC$) год
console.log(now.getMonth());            // (getUTC$) месяц
console.log(now.getDate());             // (getUTC$) день месяца
console.log(now.getHours());            // (getUTC$) час
console.log(now.getMinutes());          // (getUTC$) минута
console.log(now.getSeconds());          // (getUTC$) секунда
console.log(now.getMilliseconds());     // (getUTC$) милисекунда
console.log(now.getDay());              // (getUTC$) номер дня недели
console.log(now.getTimezoneOffset());   // разница между местным часовым поясом и UTC (в минутах)
console.log(now.getTime());             // количество милисекунд от now

console.log(now.setHours(18));          // установить часы (и остальные компоненты аналогично get)
