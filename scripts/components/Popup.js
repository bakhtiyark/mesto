export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector
        this._button = this._popupSelector.querySelector('.popup__close-button');
        this._handleEscClose = this.__handleEscClose.bind(this);
    }
    openPopUp() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener("keydown", pressedEsc);
    }
    closePopUp() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener("keydown", pressedEsc);
    }
    _handleEscClose(e) {
        if (e.key !== 'Escape') {
            return;
        }
        this.closePopUp();
    };
    setEventListeners() {
        this._popupSelector.addEventListener('click', e => {
            if (e.target.classList.contains('popup')) {
                this.closePopUp();
            }
        });
        this._button.addEventListener('click', this.closePopUp.bind(this));
    }
}