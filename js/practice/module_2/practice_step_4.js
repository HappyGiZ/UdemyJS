"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start() {
        personalMovieDB.count = +prompt(`Сколько фильмов вы уже посмотрели?`);

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt(`Сколько фильмов вы уже посмотрели?`);

        }
    },

    rememberMyFilms() {
        for (let i = 0; i < personalMovieDB.count; i++) {
            const a = prompt(`Название фильма №${i + 1}`),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let favoriteGenre = prompt(`Ваш любимый жанр №${i + 1}`);

            personalMovieDB.genres[i] = favoriteGenre;

            if (favoriteGenre === '' || favoriteGenre === null) {
                console.log("Введите корректные данные");
                i--;
            } else {
                personalMovieDB.genres[i] = favoriteGenre;
            }


        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};
