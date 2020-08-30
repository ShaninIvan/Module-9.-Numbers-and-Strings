let lastOperand = 0;
let operation = null;
let log = null;

const inputWindow = document.getElementById('inputWindow');

//Приведение к вещественному типу
function format(){
    inputWindow.value = parseFloat(inputWindow.value);
}

//Отображение текущих операнда и операции
function action(lastOperand, operation){
    document.querySelector('.action').innerText = lastOperand + operation;
}

//Очистка
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
    action("","");
})

//BACKSPACE
document.querySelector("#btn_backspace").addEventListener('click', function(){
    inputWindow.value = inputWindow.value.slice(0, -1);
    if (inputWindow.value.length == 0) {
        inputWindow.value = "0";
    }
})

//Ввод чисел
document.querySelector('.card-body').addEventListener('click', function(event) {
    let targ = event.target;
    if (targ.classList.contains('number')){
        inputWindow.value += targ.innerText;
        format();
    }
})

//Точка
document.querySelector("#btn_point").addEventListener('click', function(){
        if (inputWindow.value.includes('.') == false) {
            inputWindow.value += ".";
    }
})

//Унарный минус
document.querySelector("#btn_negative").addEventListener('click', function(){
        inputWindow.value = inputWindow.value * (-1);
})

//Квадратный корень
document.querySelector("#btn_sqrt").addEventListener('click', function(){
    if (inputWindow.value<0){
        alert('Нельзя извлечь квадратный корень из отрицательного числа');
    }
    else{
        inputWindow.value = Math.sqrt(inputWindow.value);
    }
    
})

//Сложение
document.querySelector("#btn_plus").addEventListener('click', function(){
    if (operation === null){
        lastOperand = parseFloat(inputWindow.value);
        operation = '+';
        inputWindow.value = 0;
        action(lastOperand, operation);
    }
})

//Сложение
document.querySelector("#btn_minus").addEventListener('click', function(){
    if (operation === null){
        lastOperand = parseFloat(inputWindow.value);
        operation = '-';
        inputWindow.value = 0;
        action(lastOperand, operation);
    }
})

//Умножение
document.querySelector("#btn_multiply").addEventListener('click', function(){
    if (operation === null){
        lastOperand = parseFloat(inputWindow.value);
        operation = '*';
        inputWindow.value = 0;
        action(lastOperand, operation);
    }
})

//Деление
document.querySelector("#btn_divide").addEventListener('click', function(){
    if (operation === null){
        lastOperand = parseFloat(inputWindow.value);
        operation = '/';
        inputWindow.value = 0;
        action(lastOperand, operation);
    }
})


//Вычисление
document.querySelector("#btn_calc").addEventListener('click', function(){
    if (operation != null){
        let val = parseFloat(inputWindow.value);

        if (val == 0 && operation == "/"){
            alert('Деление на 0 невозможно');
            return false;
        }

        switch(operation){
            case '+':
                val = lastOperand + val;
                break;
            case '-':
                val = lastOperand - val;
                break;
            case '*':
                val = lastOperand * val;
                break;
            case '/':
                val = lastOperand / val;
                break;
        }

        inputWindow.value = val;
        lastOperand = 0;
        operation = null;
        action("","");
    }
})