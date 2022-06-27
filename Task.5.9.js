"use strict";

// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for.//.of.

// Если объект salaries пуст, то результат должен быть 0.


{
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    function sumSalaries(obj) {
        let sum = 0;
        for (let value of Object.values(obj)) {
            sum += value;
        }
        return sum;
    }

    alert(sumSalaries(salaries));

}


//-------------------------------------------------------------------------------------------

// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

{
    let user = {
        name: 'John',
        age: 30
    };

    function count(obj){
        return Object.keys(obj).length;
    }

    alert( count(user) );

}