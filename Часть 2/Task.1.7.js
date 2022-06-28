// Очистите элемент
// важность: 5
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>

// <script>
//   function clear(elem) { /* ваш код */ }

//   clear(elem); // очищает список
// </script>

{
    function clear(elem) {
        for (let index = 0; index < elem.childNodes.length; index++) {
            elem.childNodes[index].remove();
        }
    }
}

//-------------------------------------------------------------------------------

// Почему остаётся "aaa"?
// важность: 1
// В примере ниже вызов table.remove() удаляет таблицу из документа.

// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.

// Почему так происходит?

// <table id="table">
//   aaa
//   <tr>
//     <td>Тест</td>
//   </tr>
// </table>

// <script>
//   alert(table); // таблица, как и должно быть

//   table.remove();
//   // почему в документе остался текст "ааа"?
// </script>


//ответ
// HTML в задаче некорректен.
// Браузер исправил ошибку автоматически
// Но внутри <table> не может быть текста: в соответствии со
// спецификацией допускаются только табличные теги. Поэтому браузер показывает "aaa" до <table>



//------------------------------------------------------------------------------------------------


// Создайте список
// важность: 4
// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.


{
    function createList() {
        const ul = document.createElement('ul');
        document.body.append(ul);

        while (true) {
            let text = prompt("Введите текст для элемента списка", "");
            if (!text) break;

            const li = document.createElement('li');
            li.textContent = text;
            ul.append(li);
        }
    }
}

//-----------------------------------------------------------------------

// Создайте дерево из объекта
// важность: 5
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:

{
    let data = {
        "Рыбы": {
            "форель": {},
            "лосось": {}
        },

        "Деревья": {
            "Огромные": {
                "секвойя": {},
                "дуб": {}
            },
            "Цветковые": {
                "яблоня": {},
                "магнолия": {}
            }
        }
    };


    const container = document.getElementById('container');

    function isNotEmptyObject(obj) {
        return Object.keys(obj).length > 0;
    }

    function createTree(node, data) {
        const ul = document.createElement("ul");
        node.append(ul);

        for (let [key, value] of Object.entries(data)) {

            const li = document.createElement("li");
            li.textContent = key;
            ul.append(li);

            if (typeof value === "object" && isNotEmptyObject(value)) {
                createTree(li, value)
            }
        }
    }
    createTree(container, data)
}

//-------------------------------------------------------------------------------

// Выведите список потомков в дереве
// важность: 5
// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
// Узлы нижнего уровня, без детей – пропускайте.

{
    let list = document.getElementsByTagName('li');

    for (let li of list) {

        let descendantsCount = li.getElementsByTagName('li').length;
        if (!descendantsCount) continue;


        li.firstChild.data += ' [' + descendantsCount + ']';
    }
}


//--------------------------------------------------------------------------------------------------
// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. 
// У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

{
    const container = document.getElementById('container');


    function getDay(date) {
        const day = date.getDay()
        return day !== 0 ? day - 1 : 6;
    }


    function createCalendar(elem, year, month) {

        let date = new Date(year, month - 1);

        const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

        const table = document.createElement("table");
        table.setAttribute("border", true);
        const thead = document.createElement("thead");

        table.append(thead);
        const rowHead = document.createElement("tr");
        thead.append(rowHead)


        const tbody = document.createElement("tbody");
        table.append(tbody);

        for (const day of days) {
            const th = document.createElement("th");
            th.textContent = day;
            rowHead.append(th);
        }

        const DaysInMonthn = new Date(year, month - 1, 0).getDate()
        const sinceDay = getDay(date);
        let countDayInMonth = Math.ceil((DaysInMonthn + sinceDay) / 7);
        while (countDayInMonth) {

            const rowsBody = document.createElement("tr");
            tbody.append(rowsBody);
            date.setDate(date.getDate() + 1);

            countDayInMonth--;
        }

        let tempDate = new Date(year, month - 1);
        for (let row of tbody.rows) {
            for (let index = 0; index < 7; index++) {
                const td = document.createElement("td");
                if (getDay(tempDate) === index && tempDate.getMonth() === month - 1) {
                    td.textContent = tempDate.getDate();
                    tempDate.setDate(tempDate.getDate() + 1);
                }
                row.append(td);
            }
        }


        elem.append(table);
    }

    createCalendar(container, 2022, 6);
}


//--------------------------------------------------------------------------------

// Цветные часы с использованием setInterval
// важность: 4
// Создайте цветные часы:

{
    let timerId;

    const startBtn = document.querySelector("#start");
    const stopBtn = document.querySelector("#stop");


    function update() {
        let clock = document.getElementById('clock');
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        clock.children[0].innerHTML = hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        clock.children[1].innerHTML = minutes;

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
        timerId = setInterval(update, 1000);
        update();
    }
    function clockStop() {
        clearInterval(timerId)
    }
    startBtn.addEventListener("click", clockStart)
    stopBtn.addEventListener("click", clockStop)
}

//----------------------------------------------------------------------------------------
// Вставьте HTML в список
// важность: 5
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>

{
    const one = document.getElementById("one");
    const listItems = "<li>2</li><li>3</li>"
    one.insertAdjacentHTML("afterend", listItems);
}


//----------------------------------------------------------------------


// Сортировка таблицы
// важность: 5
// Вот таблица:

// <table>
// <thead>
//   <tr>
//     <th>Name</th><th>Surname</th><th>Age</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>John</td><td>Smith</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Pete</td><td>Brown</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Ann</td><td>Lee</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// В ней может быть больше строк.

// Напишите код для сортировки по столбцу "name".

{
    document.querySelector("#btn-sort").addEventListener("click", () => {
        const table = document.querySelector("#sortedTable");

        const sortedRows = [...table.tBodies[0].rows]
            .sort((a, b) => {
                return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
            })

        table.tBodies[0].append(...sortedRows);
    });

}