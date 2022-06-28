// Добавить функциям метод "f.defer(ms)"
// важность: 5
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:
{

    function f() {
        console.log("Hello!");
    }

    Function.prototype.defer = function (delay) {
        setTimeout(this, delay);
    };

    f.defer(1000); // выведет "Hello!" через 1 секунду
}


//------------------------------------------------------------------------------------------------------

// Добавьте функциям декорирующий метод "defer()"
// важность: 4
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, 
// откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

{
    Function.prototype.defer = function (delay) {

        const owner = this;

        return function (...args) {
            setTimeout(() => { owner.apply(this, args) }, delay);
        }

    }

    function f(a, b) {
        console.log(a + b);
    }

    f.defer(1000)(1, 2);
}


