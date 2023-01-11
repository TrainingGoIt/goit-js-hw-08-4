// Напиши скрипт, який буде зберігати значення полів у локальне
// сховище, коли користувач щось друкує.

// Відстежуй на формі подію input, і щоразу записуй у локальне
//  сховище об'єкт з полями email і message,у яких зберігай поточні
//   значення полів форми.Нехай ключем для сховища буде рядок
// "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища,
//     і якщо там є збережені дані, заповнюй ними поля форми.
//  В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми,
//     а також виводь у консоль об'єкт з полями email, 
// message та їхніми поточними значеннями.

// Зроби так, щоб сховище оновлювалось не частіше, ніж раз
//  на 500 мілісекунд.Для цього додай до проекту 
// і використовуй бібліотеку lodash.throttle.

import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const button = document.querySelector("button");
const FEEDBACK_FORM = "feedback-form-state";
const formData = {};

const handleInput = (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
    
};

form.addEventListener("input", throttle(handleInput,500));


if (localStorage.getItem(FEEDBACK_FORM)) {
    const valueFormString = localStorage.getItem(FEEDBACK_FORM)
    try {
        const valueForm = JSON.parse(valueFormString);
        email.value = valueForm.email;
        message.value = valueForm.message;
    } catch (error) {
    console.log(error.name); 
    console.log(error.message);
    }
}

const handleClickButton = (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)))
    email.value = null;
    message.value = null;
    localStorage.removeItem(FEEDBACK_FORM);
}

button.addEventListener("click", handleClickButton)