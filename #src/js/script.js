// utils

// Проверка на поддержку webp

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Валидация формы 

const subscriptionForm = document.querySelector('.form__form');
const nameInput = subscriptionForm.querySelector('#name');
const mailInput = subscriptionForm.querySelector('#email');
const phoneInput = subscriptionForm.querySelector('#phone');
const formSubmit = subscriptionForm.querySelector('.form__submit');

const validateName = () => {
    const valueLength = nameInput.value.length;
    if (valueLength < 1) {
        nameInput.setCustomValidity(`Напишите как к Вам обращаться!`);
    } else {
        nameInput.setCustomValidity('');
    }
    nameInput.reportValidity();
};

nameInput.addEventListener('input', () => {
    validateName();
});

const validateMail = () => {
    const valueLength = mailInput.value.length;
    if (valueLength < 1) {
        mailInput.setCustomValidity(`Заполните адрес эл. почты`);
    } else {
        mailInput.setCustomValidity('');
    }
    mailInput.reportValidity();
};

const resetForm = () => {
    subscriptionForm.reset();
};


// Сообщение об отправке

const message = document.querySelector('.message');
const messageClose = document.querySelector('.message__close');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showMessage = () => {

    message.classList.remove('disabled');
    const onKeydown = (evt) => {
        if (isEscapeKey(evt)) {
            message.classList.add('disabled')
        }
    };

    document.addEventListener('keydown', onKeydown, { once: true });
    messageClose.addEventListener('click', () => {
        message.classList.add('disabled')
        document.removeEventListener('keydown', onKeydown);
    }, { once: true });
};

// отправка формы

const setFormSubmit = () => {
    subscriptionForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        validateName();
        validateMail();
        showMessage();
        resetForm();
    });
};

setFormSubmit();

// Слайдер 