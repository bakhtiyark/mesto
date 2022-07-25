import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor(popup, formSelector) {
        super(popup);
        this._form = document.querySelector(formSelector)
    }
    setSubmitHandler(newHandler){
        this._handler = newHandler
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handler(this);
        });
    }
}