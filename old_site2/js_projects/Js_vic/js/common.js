// Получаем тест, модал.окно, ссылки на тесты хтмл/css, количество прав. ответом

var htmlTest = document.getElementById('htmlTest');
var modal = document.getElementById('modal');

var linkHtml = document.getElementById('html');
var linkCss = document.getElementById('css');

var correctNumber = document.getElementById('number_correct')


// Привязываем события на клики по ссылке и описываем их

linkHtml.addEventListener('click', link);
linkCss.addEventListener('click', link_2);
htmlTest.style.display = 'none';

function link() {
    // html_test.style.display = 'block';
    htmlTest.style.display = htmlTest.style.display == 'none' ? 'block' : 'none';
    cssTest.style.display = 'none';
    linkHtml.style.color = 'green';
    count = 0;

    if (sub.style.display = 'none') {
        sub.style.display = 'block';
        refresh.style.display = 'none';
    }

}

function link_2() {
    // html_test.style.display = 'block';
    cssTest.style.display = cssTest.style.display == 'none' ? 'block' : 'none';
    htmlTest.style.display = 'none';
    linkCss.style.color = 'green';
    count = 0;

    if (subCss.style.display = 'none') {
        subCss.style.display = 'block';
        refreshCss.style.display = 'none';
    }
}



// Кнопки закрытия формы

btnClose = document.getElementById('btn_close');
close = document.getElementById('close');
btnClose.addEventListener('click', display);
close.addEventListener('click', display);

function display() {
    modal.style.display = 'none';
};


// Обновление страницы
var refresh = document.getElementById('refresh');
var refreshCss = document.getElementById('refresh_css');
refresh.addEventListener('click', reset);
refresh_css.addEventListener('click', reset);

var radioButtons = document.querySelectorAll('input[type="radio"]');

function reset() {
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }

    // Меняем стили у кнопок
    refresh.style.display = 'none';
    sub.style.display = 'block';

    // Меняем стили у кнопок
    refreshCss.style.display = 'none';
    subCss.style.display = 'block';
    // Сбрасываем стили
    count = 0;
}


// Функция проверки правильных ответов
var count = 0;

var sub = document.getElementById('btn');
sub.addEventListener('click', check);


// HTML TEST

function check() {
    modal.style.display = 'block';

    // Меняем стили у кнопок html
    sub.style.display = 'none';
    refresh.style.display = 'block';

    // Меняем стили у кнопок css

    subCss.style.display = 'none';
    refreshCss.style.display = 'block';

    let q1 = document.html.question1.value;
    let q2 = document.html.question2.value;
    let q3 = document.html.question3.value;
    let q4 = document.html.question4.value;
    let q5 = document.html.question5.value;
    let q6 = document.html.question6.value;
    let q7 = document.html.question7.value;
    let q8 = document.html.question8.value;
    let q9 = document.html.question9.value;
    let q10 = document.html.question10.value;

    function colAnswers() {

        if (q1 == 'y') {
            count++;
        }
        if (q2 == 'y') {
            count++;
        }
        if (q3 == 'y') {
            count++;
        }
        if (q4 == 'y') {
            count++;
        }
        if (q5 == 'y') {
            count++;
        }
        if (q6 == 'y') {
            count++;
        }
        if (q7 == 'y') {
            count++;
        }
        if (q8 == 'y') {
            count++;
        }
        if (q9 == 'y') {
            count++;
        }
        if (q10 == 'y') {
            count++;
        }


        return count;
    }

    colAnswers();

    // Добавление ответов в массив
    // var ff = document.querySelectorAll('input[type=radio]')
    // var massff = [];

    // function opp() {
    //     for (let i = 0; i < ff.length; i++) {
    //         if (ff[i].checked === true) {
    //             massff = massff + ff[i].value;
    //         }
    //     }
    //     return massff;
    // }

    // opp();
    // console.log(massff)
    // console.log(massff[2])

    // Вывод массива результатов

    var messages = ['У Вас отличные знания HTML', 'Ваш уровень - средний', 'Ваш уровень - новичок'];
    var index;


    function returnCount() {

        if (count <= 3) {
            index = 2;
        } else if (count <= 7) {
            index = 1;
        } else if (count <= 10) {
            index = 0;
        }

        return index;
    }

    returnCount()

    document.getElementById('message').innerHTML = messages[index];

    // Изменение ответов из-за количества правильных

    function modAnswers() {
        switch (count) {
            case 2:
            case 3:
            case 4:
                correctNumber.innerHTML = 'Вы ответили на ' + count + ' вопроса';
                break;
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                correctNumber.innerHTML = 'Вы ответили на ' + count + ' вопросов';
                break;
            default:
                correctNumber.innerHTML = 'Вы ответили на ' + count + ' вопрос';
                break;
        }

    }

    modAnswers()
}


// CSS TEST 

var cssTest = document.getElementById('cssTest');
cssTest.style.display = 'none';

var subCss = document.getElementById('btn_css');
subCss.addEventListener('click', checkCss);



function checkCss() {
    modal.style.display = 'block';

    // Меняем стили у кнопок html
    sub.style.display = 'none';
    refresh.style.display = 'block';

    // Меняем стили у кнопок css

    subCss.style.display = 'none';
    refreshCss.style.display = 'block';

    let q1 = document.css.question11.value;
    let q2 = document.css.question12.value;
    let q3 = document.css.question13.value;
    let q4 = document.css.question14.value;
    let q5 = document.css.question15.value;
    let q6 = document.css.question16.value;
    let q7 = document.css.question17.value;
    let q8 = document.css.question18.value;
    let q9 = document.css.question19.value;
    let q10 = document.css.question20.value;

    function colAnswers() {

        if (q1 == 'y') {
            count++;
        }
        if (q2 == 'y') {
            count++;
        }
        if (q3 == 'y') {
            count++;
        }
        if (q4 == 'y') {
            count++;
        }
        if (q5 == 'y') {
            count++;
        }
        if (q6 == 'y') {
            count++;
        }
        if (q7 == 'y') {
            count++;
        }
        if (q8 == 'y') {
            count++;
        }
        if (q9 == 'y') {
            count++;
        }
        if (q10 == 'y') {
            count++;
        }


        return count;
    }

    colAnswers();

    var messages = ['У Вас отличные знания HTML', 'Ваш уровень - средний', 'Ваш уровень - новичок'];
    var index;


    function returnCount() {

        if (count <= 3) {
            index = 2;
        } else if (count <= 7) {
            index = 1;
        } else if (count <= 10) {
            index = 0;
        }

        return index;
    }

    returnCount()

    document.getElementById('message').innerHTML = messages[index];

    // Изменение ответов из-за количества правильных

    function modAnswers() {
        switch (count) {
            case 2:
            case 3:
            case 4:
                correctNumber.innerHTML = 'Вы ответили на ' + count + ' вопроса';
                break;
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                correctNumber.innerHTML = 'Вы ответили на ' + count + ' вопросов';
                break;
            default:
                correctNumber.innerHTML = 'Вы ответили на ' + count + ' вопрос';
                break;
        }

    }

    modAnswers()
}