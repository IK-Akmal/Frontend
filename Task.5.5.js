"use strict";

// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

{
    function camelize(str) {
        return str.split("-")
            .map((word, i) => {
                return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
            })
            .join("");
    }
    camelize("background-color");
    camelize("list-style-image");
    camelize("-webkit-transition")
}


//---------------------------------------------------------------------------------------

// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

{
    function filterRange(arr, start, end) {
        let tempArray = [];

        for (let item of arr) {
            if (start <= item && item <= end) {
                tempArray.push(item);
            }
        }

        return tempArray;
    }
}

{
    function filterRange(arr, start, end) {
        return arr.filter((item) => start <= item && item <= end);
    }
}


//-------------------------------------------------------------------------------------------
// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

{
    function filterRangeInPlace(arr, a, b) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < a || arr[i] > b) {
                arr.splice(i, 1);
                i--;
            }
        }

    }
}



// -----------------------------------------------
// Сортировать в порядке по убыванию
{
    function sortDesc(arr) {
        arr.sort((a, b) => b - a)
    }
}


//----------------------------------------------------------
// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

{
    function copySorted(arr) {
        return [...arr].sort();
    }
}

//---------------------------------------------------------------------------------------------

// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), 
// который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» 
// (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

{
    function Calculator() {
        this.mapMethods = {
            "+": (a, b) => a + b
        }
        this.calculate = (str) => {
            const [arg1, opr, arg2] = str.split(" ");

            if (!this.mapMethods[opr] || Number.isNaN(+arg1) || Number.isNaN(+arg2))
                throw new Error("error arg");
            return this.mapMethods[opr](+arg1, +arg2);
        }
        this.addMethod = (opr, callback) => {
            this.mapMethods[opr] = callback;
        }
    }

}



//---------------------------------------------------------------------------
// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. 
// Напишите код, который преобразует их в массив имён.


{
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let names = users.map(item => item.name);

    alert(names);
}


//---------------------------------------------------------------------------
// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.

{
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [vasya, petya, masha];

    let usersMapped = users.map(item => {
        return {
            fullName: item.name + " " + item.surname,
            id: item.id
        }
    })
    alert(usersMapped[0].id)
    alert(usersMapped[0].fullName)
}

//-------------------------------------------------------------------------------

// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
{
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [vasya, petya, masha];

    function sortByAge(arr) {
        arr.sort((a, b) => a.age - b.age);
    }

    sortByAge(arr);

    alert(arr[0].name);
    alert(arr[1].name);
    alert(arr[2].name);
}

//-----------------------------------------------------------------------------------------------------------------
// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает(переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
{
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
}


//---------------------------------------------------------------------------------------

// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.


{
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [vasya, petya, masha];

    function getAverageAge(users) {
        return users.reduce((summ, user) => { summ + user.age }, 0) / users.length;
    }
    console.log(getAverageAge(arr));
}


//---------------------------------------------------------------------------------------------------
// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

{
    let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", ":-O"
    ];

    function unique(arr) {
        const obj = {};
        for (let item of arr) {
            if (!obj[item]) {
                obj[item] = 1
            }
        }
        return Object.keys(obj);
    }

    console.log(unique(strings));
}