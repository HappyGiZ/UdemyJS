"use strict";

let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+";
let newPassword = '';
let i = +prompt(`how long password?`);
while (newPassword.length < i) {
    newPassword += abc[Math.floor(Math.random() * abc.length)];
}

alert(`Your new password is: ${newPassword}`);