function modal() {
  // Modal

  const
    modalTrigger = document.querySelectorAll('[data-modal]'),
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
}

module.exports = modal;