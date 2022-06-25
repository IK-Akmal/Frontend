'use strict';
// Взаимодействие: alert, prompt, confirm

// Простая страница
// важность: 4
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

const DefaultUserName = "Акмал";
let name = prompt("Вводите свое имя, пожалуйста",DefaultUserName);

if(!name){
    name = "неизвестный пользователь";
}
alert(name);
