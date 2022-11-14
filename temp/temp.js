'use strict';

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

// test(1000).then(() => console.log(`1000 ms`));
// test(2000).then(() => console.log(`2000 ms`));

// ждёт оконочания всех промисов, переданных в массив и только потом будет выполнять что-то
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All completed');
});

// выполняет действие после того как выполнится первый (самый быстрый) промис
Promise.race([test(3000), test(500)]).then(() => {
    console.log('First one complete');
});

// First one complete
// All completed