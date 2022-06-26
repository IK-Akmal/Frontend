"use strict";
// Две функции - один объект
// важность: 2
// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// Если да – приведите пример вашего кода.


// Ответ: Да возможно 
// Если функция возвращает объект, то вместо this
{
    let obj = {};
    function A() { return obj; }
    function B() { return obj; }

    alert(new A() == new B());
}



//---------------------------------------------------------------------------------------------------


// Создание калькулятора при помощи конструктора
// важность: 5
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


{
    function Calculator() {
        this.a;
        this.b;

        this.read = () => {
            this.a = +prompt("a");
            this.b = +prompt("b");
        };

        this.sum = () => {
            return this.a + this.b;
        }

        this.mul = () => {
            return this.a * this.b;
        }

    }

    let calculator = new Calculator();
    calculator.read();

    alert("Sum=" + calculator.sum());
    alert("Mul=" + calculator.mul());
}


//---------------------------------------------------------------------------------------------------

// Создаём Accumulator
// важность: 5
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), 
// с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

{
    function Accumulator(startingValue) {

        this.value = startingValue ?? 0;

        this.read = () => {
            let temp = +prompt("Вводите число", 0)
            this.value += temp;
        }

    }
    let accumulator = new Accumulator(1);
    accumulator.read();
    accumulator.read();
    alert(accumulator.value);
}









