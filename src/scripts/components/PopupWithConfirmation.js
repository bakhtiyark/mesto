import Popup from "./Popup";

class PopupWithConfirmation extends Popup{
    constructor(formSelector,isTrue){
        super(popup);
        this._form = formSelector
        this._isTrue = isTrue
    }
    setEventListeners(){
        super.setEventListeners()
    }
}