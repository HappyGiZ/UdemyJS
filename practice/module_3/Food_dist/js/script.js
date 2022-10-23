window.addEventListener('DOMContentLoaded', () => {


  // Tabs

  const tabs = document.querySelectorAll('.tabheader__item'),   // каждый таб
    tabsContent = document.querySelectorAll('.tabcontent'),     // контент в каждом табе
    tabsParrent = document.querySelector('.tabheader__items');  // блок с табами

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
  tabsParrent.addEventListener('click', (event) => {
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
    }
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

  const modalWindow = document.querySelector('.modal'),
    modalWindowOpen = document.querySelectorAll('[data-modalOpen]'),
    modalWindowClose = document.querySelector('[data-modalClose]'),
    body = document.querySelector('body');

  function openModalWindow() {
    modalWindow.classList.toggle('show');
    body.style.overflow = 'hidden';
    // отмена случайного повторного открытия модального окна
    clearInterval(modalTimerId);
  }

  function closeModalWindow() {
    modalWindow.classList.toggle('show');
    body.style.overflow = '';
  }

  modalWindowOpen.forEach(element => {
    element.addEventListener('click', openModalWindow)
  });

  modalWindowClose.addEventListener('click', closeModalWindow);

  modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
      closeModalWindow();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModalWindow();
    }
  });

  const modalTimerId = setTimeout(openModalWindow, 5000);

  function showModalByScroll() {
    // сумма прокрученной части страницы и видимой части страницы
    // >= полной высоте прокрутки (высоте сайта) - 1px (устранение бага браузера или монитора)
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModalWindow();
      // после срабатывания функции удалить обработчик событий
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
});