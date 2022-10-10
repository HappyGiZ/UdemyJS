//!
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    // 1

    const adv = document.querySelectorAll('.promo__adv img');

    adv.forEach(elem => {
        elem.remove();
    });

    // 2

    const genre = document.querySelector('.promo__genre');

    genre.textContent = 'ДРАМА';

    // 3

    const poster = document.querySelector('.promo__bg');

    poster.style.backgroundImage = 'url("img/bg.jpg")';
    // poster.style.background = 'url(img/bg.jpg) center center/cover no-repeat';

    // 4 + 5

    // const list = document.querySelectorAll('.promo__interactive-item'); // список

    // for (let k = 0; k < movieDB.movies.length; k++) {
    //     list[k].textContent = `${k + 1} - ${movieDB.movies.sort()[k]}`;
    // }

    function newMovieList() {

        const movieList = document.querySelector('.promo__interactive-list');

        movieList.innerHTML = ''; // очистка списка на существующей странице
        movieDB.movies.sort();

        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} - ${movieDB.movies[i]}
        <div class="delete"></div>
        </li>
        `;
        });
    }

    newMovieList();


    //!
    /* Задания на урок:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) Фильмы должны быть отсортированы по алфавиту */

    // 1
    const buttonSubmin = document.querySelector('button'),              // кнопка "подтвердить"
        textInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('input[type=checkbox]');

    buttonSubmin.addEventListener('click', (e) => {
        e.preventDefault();
        
        movieDB.movies.push(textInput.value);                           // добавление нового фильма в базу

        newMovieList();                                                 // вставка нового фильма на страницу

        if (checkbox.checked) {
            console.log(`Добавляем любимый фильм ${textInput.value.toUpperCase()}`);
        }

    });

    // 2


    // 3
    const trash = document.querySelectorAll('.delete');
    trash.forEach(element => {
        element.addEventListener('click', () => {
            console.log(`поймал`);
        });
    });


    // 4

});