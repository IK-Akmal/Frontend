// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


{
    function isEmpty(obj) {
        // return Object.keys(obj).length === 0;
        for (let key in obj)
            return false;
        return true
    }
}



// Объекты-константы?
// важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";

// Да будет работать, объявление const защищает только саму переменную от изменений "user".


// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

{
    let summ = 0;
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    for (let key in salaries) {
        summ += salaries[key];
    }
    console.log(summ);
}



// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

{
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof obj[key] === "number") {
                obj[key] *= 2;
            }
        }
    }
    multiplyNumeric(menu)
}