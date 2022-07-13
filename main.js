(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const n=function(){function n(e,r,o,i){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_handleImageClick",(function(){u._handleCardClick({link:u._link,name:u._name})})),t(this,"_deleteElement",(function(){u._element.remove()})),this._name=e,this._link=r,this._cardSelector=o,this._handleCardClick=i}var r,o;return r=n,(o=[{key:"_selectTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._selectTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._element.querySelector(".element__title").textContent=this._name,this._elementImage.alt=this._name,this._elementImage.src=this._link,this._deleteButton=this._element.querySelector(".element__delete-button"),this._likeButton=this._element.querySelector("#like-button"),this._setEventListeners(),this._element}},{key:"_processLikeButton",value:function(){this._likeButton.classList.toggle("element__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){e._handleImageClick()})),this._likeButton.addEventListener("click",(function(){e._processLikeButton()})),this._deleteButton.addEventListener("click",this._deleteElement)}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();var r={formSelector:"popup__form",inputSelector:"popup__input",submitButtonSelector:"popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type-text-error",errorClass:"popup__error_visible"},o=document.querySelector(".profile"),i=(o.querySelector(".profile__name"),o.querySelector(".profile__subtitle"),o.querySelector(".popup__input_profile_name")),u=o.querySelector(".popup__input_profile_secondary"),c=o.querySelector(".profile__button_edit"),a=o.querySelector(".profile__button_add"),l=(document.querySelector("#profile__popup"),document.querySelector("#add_place"),document.querySelector("#popup__form"),document.querySelector("#place-name-input"),document.querySelector("#place-link-input"),document.querySelector(".elements"),document.querySelector(".popup_open-card"));function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}l.querySelector(".popup__image"),l.querySelector(".popup__place-name"),document.querySelector("#place-close-button"),document.querySelector("#profile-close-button"),document.querySelector("#image-close-button"),document.querySelector("#add_place"),document.querySelector("#place-add").querySelector(".popup__save-button");var f=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_hideInputError",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));t.classList.remove(r._errorClass),e.classList.remove(r._inputErrorClass),t.textContent=""})),p(this,"_showInputError",(function(e){var t=e.inputElement,n=e.errorMessage,o=r._form.querySelector(".".concat(t.id,"-error"));o.textContent=n,o.classList.add(r._errorClass),t.classList.add(r._inputErrorClass)})),p(this,"_checkInputValidity",(function(e){if(e.validity.valid)r._hideInputError(e);else{var t=e.validationMessage;r._showInputError({inputElement:e,errorMessage:t})}})),p(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),p(this,"_toggleButtonState",(function(e,t){r._hasInvalidInput(e)?(t.classList.add(r._inactiveButtonClass),t.disabled=!0):(t.classList.remove(r._inactiveButtonClass),t.disabled=!1)})),p(this,"_setEventListeners",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(t){t.preventDefault(),r._checkInputValidity(e),r._toggleButtonState(r._inputList,r._saveButton)}))})),r._toggleButtonState(r._inputList,r._saveButton)})),p(this,"enableValidation",(function(){r._setEventListeners()})),this._form=n,this._inputSelector=t.inputSelector,this._inputList=Array.from(this._form.querySelectorAll(".".concat(this._inputSelector))),this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._saveButton=this._form.querySelector(".".concat(this._submitButtonSelector))}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(this._inputList,this._saveButton),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.closePopUp()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._button=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"openPopUp",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopUp",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup__close")&&e.closePopUp()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.closePopUp()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function S(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._popupForm=n._popup.querySelector(".popup__form"),n._popupButtonForm=n._popupForm.querySelector(".popup__save-button"),n._inputList=n._popupForm.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){m(g(u.prototype),"closePopUp",this).call(this),this._popupForm.reset()}},{key:"_formSubmit",value:function(){this._handleSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){var e=this;m(g(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmit(),e.close()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function L(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return q(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._desc=t._popup.querySelector(".popup__place-name"),t._image=t._popup.querySelector(".popup__image"),t.open=t.open.bind(q(t)),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;O(C(u.prototype),"openPopUp",this).call(this),this._image.src=t,this._image.alt=n,this._desc.textContent=n}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.profileName,r=t.profileSecondary;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._user=document.querySelector(n),this._info=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{profileName:this._user.textContent,profileSecondary:this._info.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.info;this._user.textContent=t,this._info.textContent=n}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=new B(".popup_open-card");T.setEventListeners();var V=new x({profileName:".profile__name",profileSecondary:".profile__subtitle"}),F=new k("#add_place",(function(e){var t=e.name,n=e.link;N({name:t,link:n})}));F.setEventListeners(),a.addEventListener("click",(function(){F.openPopUp(),M["place-add"].resetValidation()}));var D=new k("#profile__popup",(function(e){var t=e.profileFormName,n=e.profileFormSecondary;V.setUserInfo({name:t,info:n}),D.closePopUp()}));D.setEventListeners(),c.addEventListener("click",(function(){var e,t,n;e=V.getUserInfo(),t=e.profileName,n=e.profileSecondary,i.value=t,u.value=n,D.openPopUp(),D.openPopUp(),M["profile-edit"].resetValidation()}));var N=function(e){var t,r;A.prependItem((t=e.name,r=e.link,new n(t,r,"#elements-template",T.open).createCard()))},A=new U({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:N},".elements");A.renderItems();var M={};Array.from(document.forms).forEach((function(e){M[e.id]=new f(r,e),M[e.id].enableValidation()}))})();