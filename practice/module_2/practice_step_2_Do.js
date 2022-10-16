"use strict";

//                          Практика №2

/* 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла */

const numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numbersOfFilms, //ответ на первый вопрос о количестве фильмов
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 1;

do {
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
    i++;

} while (i <= numbersOfFilms);


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

console.log(personalMovieDB);