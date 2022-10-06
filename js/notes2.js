console.log(Object.keys(obj).length);               //количество ключей в объекте

const { border, bg } = options.colors;              // деструктуризация объекта


const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),

    hearts = document.querySelectorAll('.heart'),   
    wrapper = document.querySelector('.wrapper'),   // первый элемент с классом .wrapper
    oneHeart = wrapper.querySelectorAll('.heart'),  // все элементы .heart исключительно внутри wrapper
    
    dif = document.createElement('div');


box.prepend(dif);                                   // вставить dif в начале родительского box
box.append(dif);                                    // вставить dif в конце родительского box
box[i].after(dif);                                  // вставить dif после i элемента box
box[i].remove();                                    // удалить i элемент box
box[i].replaceWith(iBox[j]);                        // заменить элемент box[i] элементом iBox[j]

dif.innerHTML = `<h2>Hello world</h2>`;             // вставка HTML элемента в dif
dif.insertAdjacentHTML('', `<h2>hi man</h2>`);      // вставка HTML элемента в определённое место в dif