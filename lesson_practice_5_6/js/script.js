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

    const adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        buttonSubmin = document.querySelector('button'),              // кнопка "подтвердить"
        textInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('input[type=checkbox]');

    adv.forEach(elem => {       // удаление рекламных баннеров
        elem.remove();
    });


    genre.textContent = 'ДРАМА';

    poster.style.backgroundImage = 'url("img/bg.jpg")';


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


    buttonSubmin.addEventListener('click', (e) => {
        e.preventDefault();

        let newFilm = '';

        if (textInput.value.length > 21) {
            newFilm = `${textInput.value.slice(0, 21)}...`;
        } else {
            newFilm = textInput.value;
        }

        movieDB.movies.push(newFilm);   // добавление нового фильма в базу

        newMovieList();                 // вставка нового фильма на страницу

        if (checkbox.checked) {
            console.log(`Добавляем любимый фильм ${newFilm.toUpperCase()}`);
        }

    });





    const trash = document.querySelectorAll('.promo__menu-item promo__menu-item_active');
    trash.forEach(element => {
        element.addEventListener('click', () => {
            console.log(`поймал`);
        });
    });

});