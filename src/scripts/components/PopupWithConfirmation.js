import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor(popup,formSelector) {
        super(popup);
        this._form = formSelector
        this._button = document.querySelector("#button-confirm-delete")
    }

    confirmation(confirmation){
        this._confirmation = confirmation
    }

    setEventListeners() {
        super.setEventListeners()
        this._button.addEventListener('mousedown', () => {
            this._confirmation();
            
        });
    }
    processLoading(){
        super.processLoading()
    }
}