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


$.modal = function (options) {
    const ANIMATION_SPEED = 2000;
    const $modal = _createModal(options);
    let closing = false;

    return {
        open() {
            if (!closing) {
                $modal.classList.add('open');
            }
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hiding');
                closing = false;
            }, ANIMATION_SPEED)
        },
        destroy() {

        }
    }
}