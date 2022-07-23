import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor(popup, formSelector) {
        super(popup);
        this._form = document.querySelector(formSelector)
        console.dir(this._form)
    }

    _handleSubmit(e){
        e.preventDefault();
        this._handler(id)
    }

    confirmationHandler(confirmation){
        this._confirmation = confirmation
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._confirmation(this);
        });
    }
    processLoading(){
        super.processLoading()
    }
}