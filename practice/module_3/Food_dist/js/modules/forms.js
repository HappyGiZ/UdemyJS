function forms() {
  // Forms

  const
    forms = document.querySelectorAll('form'),
    message = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
    };

  forms.forEach(item => {
    bindPostData(item);
  });

  // функция настраивает запрос и трансформирует в JSON
  const postData = async (url, data) => {
    // создается запрос
    const res = await fetch(url, {
      method: 'POST',
      body: data,
      headers: { 'Content-type': 'application/json' }
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);


      // создаётся объект FormData, собранный из инпутов form
      const formData = new FormData(form);

      // преобразование formData в массив массивов, затем в классический объект, затем в JSON
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // отправка заполненной формы (на основе formData)
      postData('http://localhost:3000/requests', json)
        // data - данные, которые возвращаются из промиса (которые вернул сервер)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        // обработка ошибок
        .catch(() => {
          showThanksModal(message.failure);
        })
        // очистка формы. Происходит в любом случае
        .finally(() => {
          form.reset();
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
}

module.exports = forms;