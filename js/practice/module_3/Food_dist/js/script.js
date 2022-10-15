window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item'),   // каждый таб
    tabsContent = document.querySelectorAll('.tabcontent'),     // контент в каждом табе
    tabsParrent = document.querySelector('.tabheader__items');  // блок с табами

  function hideTabContent() {                                   // скрыть контент каждого таба
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {                                   // убрать активность с каждого таба
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {                              // сделать активным и показать контент
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParrent.addEventListener('click', (event) => {            // обработчик событий по табам
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {  // если target содержит класс 
      tabs.forEach((item, i) => {                            // для каждого таба
        if (target == item) {
          hideTabContent();                                  // скрыть весь контент
          showTabContent(i);                                 // показать контент выделенного таба 
        }
      });
    }
  });
});