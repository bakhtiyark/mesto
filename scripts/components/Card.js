import { openPopUp, popupOpenCard, popupOpenCardImage, popupOpenCardPlaceName } from "../index.js";

class Card {
    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _selectTemplate() {

        return document
            .querySelector(this._cardSelector)
            .content.querySelector(".element")
            .cloneNode(true)

    }

    _createCard() {

        this._element = this._selectTemplate()
        this._elementImage = this._element.querySelector('.element__image')

        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;

        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._likeButton = this._element.querySelector('#like-button');


        this._setEventListeners();
        return this._element;
    }
    _processLikeButton() {
        this._element
            .querySelector('.element__like-button')
            .classList.toggle("element__like-button_active")
    };

    _handleImageClick() {
        popupOpenCardPlaceName.textContent = this._name
        popupOpenCardImage.src = this._link;
        popupOpenCardImage.alt = this._name;
        openPopUp(popupOpenCard);
    };
    /// Удаление карточки

    _deleteElement = () => {
        this._element.remove();
    };

    _setEventListeners() {
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

export default Card;