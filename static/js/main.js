let expression_field = document.querySelector('.input-field')

let btn_equal = document.querySelector('.btn.btn-equal')


const buttons = document.querySelectorAll('.btn');

let btn_0 = document.querySelector('.btn.btn-0')
let btn_1 = document.querySelector('.btn.btn-1')
let btn_2 = document.querySelector('.btn.btn-2')
let btn_3 = document.querySelector('.btn.btn-3')
let btn_4 = document.querySelector('.btn.btn-4')
let btn_5 = document.querySelector('.btn.btn-5')
let btn_6 = document.querySelector('.btn.btn-6')
let btn_7 = document.querySelector('.btn.btn-7')
let btn_8 = document.querySelector('.btn.btn-8')
let btn_9 = document.querySelector('.btn.btn-9')


let btn_plus = document.querySelector('.btn.btn-plus')
let btn_minus = document.querySelector('.btn.btn-minus')
let btn_mult = document.querySelector('.btn.btn-mult')
let btn_div = document.querySelector('.btn.btn-div')

let btn_clear = document.querySelector('.btn.btn-clear')
let btn_point = document.querySelector('.btn.btn-point')
let btn_del = document.querySelector('.btn.btn-del')



function appendToExpression(value) {
    expression_field.value += value;
}



// mouse support
btn_0.addEventListener('click', function() {
    appendToExpression(0);
}); // Добавляем обработчик для кнопки DEL

btn_1.addEventListener('click', function() {
    appendToExpression(1);
});

btn_2.addEventListener('click', function() {
    appendToExpression(2);
});

btn_3.addEventListener('click', function() {
    appendToExpression(3);
});

btn_4.addEventListener('click', function() {
    appendToExpression(4);
});

btn_5.addEventListener('click', function() {
    appendToExpression(5);
});

btn_6.addEventListener('click', function() {
    appendToExpression(6);
});

btn_7.addEventListener('click', function() {
    appendToExpression(7);
});

btn_8.addEventListener('click', function() {
    appendToExpression(8);
});

btn_9.addEventListener('click', function() {
    appendToExpression(9);
});

btn_plus.addEventListener('click', function() {
    appendToExpression('+');
});

btn_minus.addEventListener('click', function() {
    appendToExpression('-');
});

btn_mult.addEventListener('click', function() {
    appendToExpression('*');
});

btn_div.addEventListener('click', function() {
    appendToExpression('/');
});

btn_clear.addEventListener('click', function() { // clear input field
    expression_field.value = "";
});

btn_point.addEventListener('click', function() {
    appendToExpression('.');
});

btn_del.addEventListener('click', function() {
    expression_field.value = expression_field.value.slice(0, -1);
});


btn_equal.addEventListener('click', function() {
    try {
        expression_field.value = eval(expression_field.value);

    } catch (e) {
        expression_field.value = 'Error';
    }
});




// Keyboard support
document.addEventListener('keydown', function(event) {
    console.log(`keydown: ${event.key}`);
    if (event.key === 'Enter' || event.key === '=') {
        btn_equal.click();

    } else if (event.key === 'Backspace') {
        btn_del.click();

    } else if (event.key >= '0' && event.key <= '9') {
        appendToExpression(event.key);

    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendToExpression(event.key);

    } else if (event.key === '.') {
        appendToExpression('.');

    } else if (event.key === 'Escape' || event.key == 'Delete') {
        btn_clear.click();
    }
});