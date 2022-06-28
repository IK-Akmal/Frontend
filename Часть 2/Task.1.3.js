// Дочерние элементы в DOM
// важность: 5
// Для страницы:

{/* 
    <html>
    <body>
    <div>Пользователи:</div>
    <ul>
        <li>Джон</li>
        <li>Пит</li>
    </ul>
    </body>
    </html> 
*/}
// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

{
    const div = document.body.firstElementChild;
    const ul = document.body.lastChild;
    const li2 = ul.lastChild;
}


//---------------------------------------------------------------------------------

// Вопрос о соседях
// важность: 5
// Если elem – произвольный узел DOM-элемента…

// -- Правда, что elem.lastChild.nextSibling всегда равен null?
// -- Правда, что elem.children[0].previousSibling всегда равен null ?

//Ответ:
// elem.lastChild всегда последний, у него нет ссылки nextSibling.
// не всегда потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы 


//---------------------------------------------------------------------------------------------------


// Выделите ячейки по диагонали
// важность: 5
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы < table > все диагональные < td > и выделить их, используя код:

// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

{

    const table = document.querySelector("table");
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].children[i].style.backgroundColor = 'red';
    }

}