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

const imagesArray = [
    {
        path: "url('../img/photo-style-1.jpg')",
        desc: "Описание фото 1"
    },
    {
        path: "url('../img/photo-style-2.jpg')",
        desc: "Описание фото 2"
    },
    {
        path: "url('../img/photo-style-3.jpg')",
        desc: "Описание фото 3"
    },
];

const slider = document.querySelector('.slider');
const slideItem = slider.querySelector('.slider__item');
const slidesArray = slider.querySelectorAll('.slider__item');
const sliderContolForward = slider.querySelector('.slider__control--forward');
const sliderContolBack = slider.querySelector('.slider__control--back');

// Отрисованы слайды из массива

for (let i = 0; i < slidesArray.length; i++) {
    slidesArray[i].style.backgroundImage = imagesArray[i].path;
}

// новый вариант

let b = 1;
let c;

let d = imagesArray.length - 1;

console.log(' b  в начале = ' + b);

sliderContolForward.onclick = function () {
    c = b;
    c++;

    if (c > imagesArray.length - 1) {
        c = 0;
    }

    console.log('c до переборки = ' + (c));
    console.log('B до переборки = ' + (b));

    for (let i = 0; i < slidesArray.length; i++) {

        console.log(' b в начале цикла = ' + b);

        if (b < imagesArray.length) {

            slidesArray[i].style.backgroundImage = imagesArray[b].path;

            b++;

            console.log('i = ' + i);
            console.log('b = ' + b);
        } else {
            b = 0;
            console.log('вернулось b из else ' + b);
            slidesArray[i].style.backgroundImage = imagesArray[b].path;

            b++;

            console.log('i = ' + i);
            console.log('b = ' + b);
        }
    }
    console.log('вернулось c из функции = ' + (c));
    b = c;
    console.log('вернулось b из функции = ' + (b));

    console.log('КОНЕЦ ФУНКЦИИ ВПЕРЕД');
    return b;
};



sliderContolBack.onclick = function () {

    c = b;
    c--;

    if (c < 0) {
        c = imagesArray.length - 1;
    }

    if (c > imagesArray.length - 1) {
        c = 0;
    }

    if (b < 0) {
        b = c;
    }

    if (b > imagesArray.length - 1) {
        b = 0;
    }

    console.log('C до переборки = ' + (c));
    console.log('B до переборки = ' + (b));

    for (let i = slidesArray.length - 1; i >= 0; i--) {

        console.log(' b в начале цикла = ' + b);


        if (b >= 0) {

            console.log('вернулось b = ' + b);
            slidesArray[i].style.backgroundImage = imagesArray[b].path;

            console.log('i = ' + i);
            console.log('b = ' + b);

            b--;

        } else {

            b = imagesArray.length - 1;

            console.log('меньше нуля  - вернулось b = ' + b);

            slidesArray[i].style.backgroundImage = imagesArray[b].path;

            console.log('i = ' + i);
            console.log('b = ' + b);

            b--;


        }



    }

    console.log('вернулось C из функции = ' + (c));
    b = c;
    console.log('вернулось b из функции = ' + (b));
    console.log('КОНЕЦ ФУНКЦИИ НАЗАД');

    return b;


};


// кривой вариант слайдера

// let b = 0;
// let c = 1;

// let d = imagesArray.length - 1;

// console.log(' b  в начале = ' + b);

// sliderContolForward.onclick = function () {
//     c = b;
//     c++;

//     if (c > imagesArray.length - 1) {
//         c = 0;
//     }

//     console.log('c до переборки = ' + (c));
//     console.log('B до переборки = ' + (b));

//     for (let i = 0; i < slidesArray.length; i++) {
//         b = b + 1;

//         console.log(' b в начале цикла = ' + b);
//         if (b < imagesArray.length) {

//             slidesArray[i].style.backgroundImage = imagesArray[b].path;

//             console.log('i = ' + i);
//             console.log('b = ' + b);
//         } else {
//             b = 0;
//             console.log('вернулось b из else ' + b);
//             slidesArray[i].style.backgroundImage = imagesArray[b].path;
//             console.log('i = ' + i);
//             console.log('b = ' + b);
//         }
//     }
//     console.log('вернулось c из функции = ' + (c));
//     b = c;
//     console.log('вернулось b из функции = ' + (b));

//     console.log('КОНЕЦ ФУНКЦИИ ВПЕРЕД');
//     return b;
// };

// sliderContolBack.onclick = function () {

//     d = b;
//     d--;

//     if (d < 0) {
//         d = imagesArray.length - 1;
//     }

//     if (b < 0) {
//         b = d;
//     }

//     console.log('D до переборки = ' + (d));
//     console.log('B до переборки = ' + (b));

//     for (let i = 0; i < slidesArray.length; i++) {

//         b = b + 1;

//         console.log(' b в начале цикла = ' + b);


//         if (b > imagesArray.length - 1) {

//             b = 0;

//             console.log('больше массива  - вернулось b = ' + b);

//             slidesArray[i].style.backgroundImage = imagesArray[b].path;

//             console.log('i = ' + i);
//             console.log('b = ' + b);
//         }

//         if (b > 0) {

//             console.log('вернулось b = ' + b);
//             slidesArray[i].style.backgroundImage = imagesArray[b].path;
//             console.log('i = ' + i);
//             console.log('b = ' + b);
//         }

//     }

//     console.log('вернулось D из функции = ' + (d));
//     b = d;
//     console.log('вернулось b из функции = ' + (b));
//     console.log('КОНЕЦ ФУНКЦИИ НАЗАД');

//     return b;


// };

