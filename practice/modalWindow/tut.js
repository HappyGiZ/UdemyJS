const myModal = mod();

function _createModal(options) {
    // создается див
    const modal = document.createElement('div');
    // созданному диву добавляется класс
    modal.classList.add('modalWindow');
    // в созданный див вставляется модальное окно
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">&times;</span>
                </div>

                <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Canscel</button>
                </div>
            </div>
        </div>
        `);

    document.body.appendChild(modal);
    return modal;
}

mod = function (options) {
    const $modal = _createModal(options);

    return {
        open() {
            $modal.classList.add('open');
        },
        close() {
            $modal.classList.remove('open');
        },
        destroy() {

        }
    }
}