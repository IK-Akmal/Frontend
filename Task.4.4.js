"use strict"
// Проверка синтаксиса
// важность: 2
// Каким будет результат выполнения этого кода ?
{
    let user = {
        name: "Джон",
        go: function () { alert(this.name) }
    }
        (user.go)()
}

//Ответ: будет ошибка потому что точка с запятой пропущена после user  



//-------------------------------------------------------------------------------------------


// Объясните значение "this"
// важность: 3
// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

{
    let obj, method;

    obj = {
        go: function () { alert(this); }
    };

    obj.go();               // (1) [object Object]

    (obj.go)();             // (2) [object Object]

    (method = obj.go)();    // (3) undefined

    (obj.go || obj.stop)(); // (4) undefined
}


// 1. Это обычный вызов метода объекта через точку .

// 2. Здесь то же самое.

// 3. Здесь method() выполняется как функция, без передачи значения this
// 4. Тут похожая ситуация на случай (3)


//-------------------------------------------------------------------------------------------

// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

{
    function makeUser() {
        return {
            name: "Джон",
            ref: this
        };
    };

    let user = makeUser();

    alert(user.ref.name); // Каким будет результат?

    // ответ: будет ошибка ref = undefined так как this указывает на контекст функции makeUser
}

//-------------------------------------------------------------------------------------------

// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

{
    let calculator = {
        a,
        b,
        read() {
            this.a = +prompt("Ввоидите число");
            this.b = +prompt("Ввоидите число");
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    };

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
}


//-------------------------------------------------------------------------------------------

// Цепь вызовов
// важность: 2
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.


{
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function () { // показывает текущую ступеньку
            alert(this.step);
            return this;
        }
    };
    ladder.up().up().down().showStep();
}