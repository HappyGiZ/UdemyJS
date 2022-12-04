'use strict';

const
    inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    // конструктор, который создаёт новый объект запроса
    const request = new XMLHttpRequest();

    // метод open собирает настройки, которые помогут в будущем сделать запрос
    // параметры:
    // method - запрос get, post (записывается в верхнем регистре)
    // url - путь к серверу (файлу)
    // async - асинхронность (ajax запросы по умолчанию асинхронны) изначально стоит в позиции true
    // login - данные для авторизации
    // password - данные для авторизации
    request.open('GET', 'js/current.json');

    // HTTP заголовок для передачи JSON файла
    request.setRequestHeader('Contetn-type', 'application/json; charset=utf-8');

    // отправка запроса
    // отличается в зависимости от метода в open()
    // GET - ничего не отправляет на сервер
    // POST - отправляет на сервер данные/файлы
    request.send();

    // свойства объекта
    // status - содержит и показывает статус запроса
    // statusText - текстовое описание ответа от сервера
    // response - ответ от сервера
    // readyState - текущее состояние запроса

    // события объекта
    // readystatechange - отслеживает статус готовности запроса в текущий момент
    // (следит за свойством readyState)
    // load - срабатывает когда запрос полностью загрузился и мы получили результат
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);

            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Возникла ошибка';
        }
    })
})
