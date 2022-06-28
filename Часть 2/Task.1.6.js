// Получите атрибут
// важность: 5
// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// <!DOCTYPE html>
// <html>
// <body>

//   <div data-widget-name="menu">Choose the genre</div>

//   <script>
//     /* your code */
//   </script>
// </body>
// </html>

{
    let elem = document.querySelector('[data-widget-name]');
    alert(elem.dataset.widgetName);
    alert(elem.getAttribute('data-widget-name'));
}


//------------------------------------------------------------------------------------------


// Сделайте внешние ссылки оранжевыми
// важность: 3
// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// Ссылка является внешней, если:

// Её href содержит ://
// Но не начинается с http://internal.com.

{
    let links = document.querySelectorAll('a');

    for (let link of links) {
        let href = link.getAttribute('href');
        if (href) {
            if (href.includes('://')) {
                if (!href.startsWith('http://internal.com')) {
                    link.style.color = 'orange';
                }
            }
        }
    }
}