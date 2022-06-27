// Можно ли добавить свойство строке?
// важность: 5
// Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?


// Ответ: В зависимости от того, используете ли вы строгий режим (use strict) или нет результат может быть:

// 1 - undefined (без strict)
// 2 - Ошибка (strict mode)