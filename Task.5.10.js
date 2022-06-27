"use strict"
// Деструктурирующее присваивание
// важность: 5
// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

{
    let user = {
        name: "John",
        years: 30
    };

    const { name, years: age, isAdmin = false } = user;
}



//------------------------------------------------------------------------------------------------

// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.


{
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    function topSalary(obj) {

        let maxSalary = 0;
        let employeeName = null;

        for(let [name, salary] of Object.entries(obj)){
            if(maxSalary < salary){
                maxSalary = salary;
                employeeName = name;
            }
        }
        return employeeName;
    }

    console.log(topSalary(salaries));
}