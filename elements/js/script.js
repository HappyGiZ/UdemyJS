'use strict';

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper'),
    dif = document.createElement('div');


box.style.backgroundColor = 'black';
box.style.width = '400px';

buttons[1].style.borderRadius = '50%';
buttons[1].style.backgroundColor = 'purple';

circles[0].style.backgroundColor = 'grey';


hearts.forEach(element => {
    element.style.backgroundColor = 'blue';
});

dif.classList.add('black');


// wrapper.prepend(dif);
wrapper.append(dif);
// hearts[0].after(dif);
// circles[1].remove();
// hearts[0].replaceWith(circles[0]);

dif.innerHTML = `<h2>Hello world</h2>`;

// dif.textContent = 'helow';

dif.insertAdjacentHTML('afterend', `<h2>hi man</h2>`);