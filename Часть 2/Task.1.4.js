// Поиск элементов
// важность: 4
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
{
    // 1
    const table = document.getElementById('age-table')
    // 2.
    const label = document.querySelectorAll('#age-table label')
    // 3. 
    table.rows[0].cells[0]
    // 4.
    const form = document.getElementsByName('search')[0]
    // 5.
    form.getElementsByTagName('input')[0]
    // 6. 
    const inputs = form.querySelectorAll('input') 
    inputs[inputs.length - 1] 
}