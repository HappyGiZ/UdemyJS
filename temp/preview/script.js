'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

const width = box.offsetWidth,
    height = box.offsetHeight,
    scrolls = box.scrollWidth;

// const width = box.clientWidth,
//     height = box.clientHeight;

// console.log(width, height, scrolls);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
})

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.boxSizing);

console.log(document.documentElement.scrollTop = 0);

// кнопка "поднять страницу вверх"
btn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})