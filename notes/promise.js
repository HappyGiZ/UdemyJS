'use strict';

console.log('Запрос данных...');

// создаётся обещание, которое помещается в переменную prom
// оно может завершиться как положительно так и отрицательно
const prom = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: '3500'
        };

        resolve(product);
        // reject();
    }, 2000);
});

// обрабатывается положительный результат
prom.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            resolve(product);
        }, 2000);
    });
}).then((data) => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);  // { name: 'TV', price: '3500', status: 'ordered', modify: true }
}).catch(() => {    // срабатывает reject()
    console.error('Произошла ошибка');  // Произошла ошибка
}).finally(() => {
    console.log('Конец обработки');
});


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