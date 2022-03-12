"use strict";

let numbersOfFilms;

function start() {
    // вызов вопроса
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    // проверка ответа на: не пустая строка, не 0, число
    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    }
}

// вызов функции
start();

// объект с ответами пользователя
const personalMovieDB = {
    count: numbersOfFilms, //ответ на первый вопрос о количестве фильмов
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// функция записи ответов на вопросы о фильмах
function rememberMyFilms() {
    for (let i = 1; i <= numbersOfFilms; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
            b = prompt("На сколько его оцените?", "");

        /* 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
        отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
        возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
        str.length - и получить её длину) */

        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('Good answer');
        } else {
            console.log('Empty answer');
            alert('Incorrect input');
            i--;
        }
    }
}

// вызов функции
rememberMyFilms();

// функция проверки насмотренности пользователя
function detectPersonalLevel() {
    /* 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
    "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
    "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" */

    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов =(');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

// вызов функции
detectPersonalLevel();

// Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
function showMyDB(hidden) {
    if (hidden) {
        console.log(personalMovieDB);
    }
}

// вызов функции
showMyDB(personalMovieDB.privat);

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

console.log(personalMovieDB);