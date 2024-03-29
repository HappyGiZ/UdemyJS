window.addEventListener('DOMContentLoaded', function () {


    // Tabs

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    // скрыть контент каждого таба
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        // убрать активность с каждого таба
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    // сделать активным и показать контент
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    // обработчик событий по табам
    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        // если target содержит класс 
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    // скрыть весь контент
                    hideTabContent();
                    // показать контент выделенного таба
                    showTabContent(i);
                }
            });
        }
    });


    // Timer

    const deadline = '2022-12-31';

    function getTimeRemaining(endtime) {
        // преобразование полученной извне строки в числовое представление
        // получение разницы между заданной датой и текущей (можно просто new Date())
        const t = Date.parse(endtime) - Date.parse(new Date()),
            // 1000 милисекунд * 60 секунд * 60 минут * 24 часа
            days = Math.floor(t / 86400000),
            hours = Math.floor((t / 3600000) % 24),
            minutes = Math.floor((t / 60000) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        // для устранения задержки (мигания) между отображением даты из вёрстки 
        // и просчитанного функцией времени
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        // отмена случайного повторного открытия модального окна
        clearInterval(modalTimerId);
    }

    modal.addEventListener('click', (e) => {
        // при клике на подложку, или крестик
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);

    function showModalByScroll() {
        // сумма прокрученной части страницы и видимой части страницы
        // >= полной высоте прокрутки (высоте сайта) - 1px (устранение бага браузера или монитора)
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            // после срабатывания функции удалить обработчик событий
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);


    // Используем классы для создание карточек меню
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            // src картинки
            this.src = src;
            // alt текст если картинка не прогрузилась
            this.alt = alt;
            // заголовок карточки
            this.title = title;
            // описание
            this.descr = descr;
            // цена (в руб.)
            this.price = price;
            // массив классов, переданный через rest-оператор
            this.classes = classes;
            // курс доллар/рубль
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    // рендер новых карточек через создание переменных (объектов) из класса
    // const div = new MenuCard();
    // div.render();

    // рендер новых карточек без создания переменных
    // создаются новые ременные объекты, которые не записывается в переменную
    // и после отработки функции - удаляются
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();

    // Forms

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            // создаётся запрос
            const request = new XMLHttpRequest();
            // метод для настройки запроса - POST в файл
            request.open('POST', 'server.php');
            // HTTP заголовок для передачи файла
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            // создаётся объект FormData, собранный из инпутов form
            const formData = new FormData(form);

            const object = {};
            // запись значений в новый объект
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            // конвертация объекта в JSON
            const json = JSON.stringify(object);

            // отправка заполненной формы (на основе formData)
            request.send(json);

            // событие, срабатывающее после конечной загрузки запроса
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    // сброс данных в форме
                    statusMessage.remove();
                    form.reset();
                } else {
                    showThanksModal(message.failure);
                }
            });
        });
    }

    // закрытие модального окна и показ сообщения 
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
});