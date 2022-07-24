import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor(popup, formSelector, confirmation) {
        super(popup);
        this._form = document.querySelector(formSelector)
        this._confirmation = confirmation
    }

    _handleSubmit(e) {
        e.preventDefault();
        this._confirmation(this)
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._confirmation(this);
        });
    }
}