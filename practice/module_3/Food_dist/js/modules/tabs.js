function tabs() {
  // Tabs

  let
    tabs = document.querySelectorAll('.tabheader__item'),
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
}

module.exports = tabs;