export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector
    }
    openPopUp() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener("keydown", pressedEsc);
    }
    closePopUp(popUp) {
        popUp.classList.remove('popup_opened');
        document.removeEventListener("keydown", pressedEsc);
    }
    _pressedEsc(e) {
        if (e.key !== 'Escape') {
            return;
        }
        const popUp = document.querySelector('.popup_opened');
        closePopUp(popUp);
    };
    setEventListeners() {
        this._elementImage.addEventListener("click", () => {
                this._handleImageClick();
            });

        // Слушатель на лайки
        this._likeButton.addEventListener("click", () => {
            this._processLikeButton();
        });
        // Слушатель на удаление
        this._deleteButton.addEventListener("click", this._deleteElement);
    }

}
