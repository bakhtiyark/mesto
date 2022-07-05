export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector)
        this._button = this._popupSelector.querySelector('.popup__close');
    }
    openPopUp() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener("keydown", this.__handleEscClose);
    }
    closePopUp() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener("keydown", this.__handleEscClose);
    }
    _handleEscClose = (e) => {
        if (e.key !== 'Escape') {
            return;
        }
        this.closePopUp();
    };
    setEventListeners() {
        
        this._popupSelector.addEventListener('click', e => {
            if (e.target.classList.contains('popup__close') ) {
                this.closePopUp();
            }
        });
    }
}