export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup)
        this._button = this._popup.querySelector('.popup__close');
    }
    openPopUp() {
        //console.dir(this._popup)
        this._popup.classList.add('popup_opened');
        document.addEventListener("keydown", this._handleEscClose);
    }
    closePopUp() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener("keydown", this._handleEscClose);
    }
    _handleEscClose = (e) => {
        if (e.key !== 'Escape') {
            return;
        }
        this.closePopUp();
    };
    setEventListeners() {
        this._popup.addEventListener('mousedown', e => {
            if (e.target.classList.contains('popup__close')) {
                this.closePopUp();
            }
        });
        this._popup.addEventListener('mousedown', e => {
            if (e.target.classList.contains("popup")) {
                this.closePopUp()
            }
        });
    }
    processLoading() {
        const spinner = document.querySelector(".spinner")
        spinner.classList.toggle("spinner_active")
      }
}