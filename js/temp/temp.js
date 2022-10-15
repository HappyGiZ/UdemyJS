'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('RED');
    }

});


const btn = document.createElement('button');

wrapper.append(btn);
btn.classList.add('red');

btns.forEach(e => {
    e.addEventListener('click', () => {
        console.log('not RED');
    })
});