class Card {
    constructor(data, cardSelector, handleCardClick, handleCardDeletion, handleLike, userID) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick
        this._cardId = data._id
        this._likesArray = data.likes
        this._handleCardDeletion = handleCardDeletion
        this._handleLike = handleLike
        this._userID = userID
        this._owner = data.owner._id
    }

    _selectTemplate() {

        return document
            .querySelector(this._cardSelector)
            .content.querySelector(".element")
            .cloneNode(true)

    }

    createCard() {

        this._element = this._selectTemplate()
        this._elementImage = this._element.querySelector('.element__image')

        //this._element.id = this._cardId

        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;

        this._likeCounter = this._element.querySelector(".element__like-counter")
        this.setLikes(this._likesArray)

        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._likeButton = this._element.querySelector('#like-button');
        if (this._userID !== this._owner) {
            this._deleteButton.style.display = "none"

        }


        this._setEventListeners();
        return this._element;
    }

    addLike() {
        this._likeButton?.classList.add("element__like-button_active")
    };
    removeLike() {
        this._likeButton?.classList.remove("element__like-button_active")
    };

    isLiked() {
        return this._likesArray.some((x)=> x._id === this._userID)
        //this._likesArray?.length !== 0
        //this._likesArray._id === this._userID
    }
    setLikes(newLikes){
        this._likesArray = newLikes
        this._likeCounter.textContent = this._likesArray?.length
        this.isLiked() ? this.addLike() : this.removeLike()
    }

    _handleImageClick = () => {
        this._handleCardClick({
            link: this._link,
            name: this._name
        });
    };

    deleteElement = () => {
        this._element.remove();
        this._element = null
    };

    _setEventListeners() {
        this._elementImage.addEventListener("click", () => {
            this._handleImageClick();
        });
        // Слушатель на лайки
        this._likeButton.addEventListener("click", () => {
            this._handleLike(this._cardId)
        });
        // Слушатель на удаление
        this._deleteButton.addEventListener("click", () => {
            this._handleCardDeletion(this._cardId)
        });
    }
}

export default Card;