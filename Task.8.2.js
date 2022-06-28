// Изменяем "prototype"
// важность: 5
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

{
    function Rabbit() { }
    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    alert(rabbit.eats); // true
}
// 1 - Добавим одну строчку(выделенную в коде ниже).Что вызов alert покажет нам сейчас ?

{
    function Rabbit() { }
    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    Rabbit.prototype = {};

    alert(rabbit.eats); // ?
}

//2 …А если код такой(заменили одну строчку) ?

{
    function Rabbit() { }
    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    Rabbit.prototype.eats = false;

    alert(rabbit.eats); // ?
}

// 3 Или такой(заменили одну строчку) ?

{
    function Rabbit() { }
    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    delete rabbit.eats;

    alert(rabbit.eats); // ?
}
// 4 - Или, наконец, такой:

{
    function Rabbit() { }
    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    delete Rabbit.prototype.eats;

    alert(rabbit.eats); // ?
}

//ответ: 
// 1 true - присвоение нового значения свойству Rabbit.prototype влияет на [[Prototype]]

// 2 false 

// 3 true - операция delete применяется к свойствам конкретного объекта

// 4 undefined - cвойство eats удалено из прототипа оно больше не существует
//---------------------------------------------------------------------------------------




// Создайте новый объект с помощью уже существующего
// важность: 5
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
// но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

{
    let obj2 = new obj.constructor();
}
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.


// ответ: да можно так сделать если свойство "constructor" существует
{
    function Phone(name) {
        this.name = name;
      }
      
      let Xiaomi = new Phone('Xiaomi');
      let Poco = new Xiaomi.constructor('Poco');
      
      alert( Poco.name );
}


