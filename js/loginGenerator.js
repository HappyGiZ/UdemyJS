"use strict";

function random() {
    let abc = "abcdefghijklmnopqrstuvwxyz";

    function wordLength() {
        return Math.floor(Math.random() * (9 - 3) + 3);
    }

    function newWord() {
        let word = "";
        while (word.length < wordLength()) {
            word += abc[Math.floor(Math.random() * abc.length)];
        }
        return word;
    }

    document.getElementById('login').value = (String(newWord() + (Math.floor(Math.random() * (9999 - 1000) + 1000))));
    document.getElementById('newPassword').value = 'v3FQyCgk2XtyqNJ3';
    document.getElementById('confirmPassword').value = 'v3FQyCgk2XtyqNJ3';
    document.getElementById('answer').value = '344000';

}

random();

// for (let i = 0; i < 30; i++) {
//     document.write(String(newWord() + (Math.floor(Math.random() * (9999 - 1000) + 1000)) + '<br \ />'));
// }