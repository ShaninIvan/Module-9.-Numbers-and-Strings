let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

//Обновление текущих операнда и операции
function updateAction(OperandA, SelectOperation) {
    if (operation === null) {
        lastOperand = parseFloat(OperandA);
        operation = SelectOperation;
        inputWindow.value = "0";
    }
    else {
        operation = SelectOperation;
    }
    showAction(lastOperand, operation)
}

//Отображение текущих операнда и операции
function showAction(lastOperand, operation) {
    document.querySelector('.action').innerText = lastOperand + operation;
}

//Обновление журнала
function updateJournal(operandB, result) {
    document.querySelector(".journal ul").innerHTML += "<li>" + lastOperand + operation + operandB + "=" + result + "</li>" + "<hr>";
}

//Очистить все
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
    showAction("", "");
    document.querySelector(".journal ul").innerHTML = "";
})

//Очистить поле ввода
document.querySelector('#btn_cl_input').addEventListener('click', function () {
    inputWindow.value = '0';
})

//BACKSPACE
document.querySelector("#btn_backspace").addEventListener('click', function () {
    inputWindow.value = inputWindow.value.slice(0, -1);
    if (inputWindow.value.length == 0) {
        inputWindow.value = "0";
    }
})

//Ввод чисел
document.querySelector('.card-body').addEventListener('click', function (event) {
    let targ = event.target;
    if (targ.classList.contains('number')) {
        inputWindow.value += targ.innerText;
        inputWindow.value = parseFloat(inputWindow.value);
    }
})

//Точка
document.querySelector("#btn_point").addEventListener('click', function () {
    if (inputWindow.value.includes('.') == false) {
        inputWindow.value += ".";
    }
})

//Унарный минус
document.querySelector("#btn_negative").addEventListener('click', function () {
    inputWindow.value = inputWindow.value * (-1);
})

//Квадратный корень
document.querySelector("#btn_sqrt").addEventListener('click', function () {
    var val = inputWindow.value;
    if (val < 0) {
        alert('Нельзя извлечь квадратный корень из отрицательного числа');
    }
    else {
        inputWindow.value = Math.sqrt(val);
        document.querySelector(".journal ul").innerHTML += "<li>" + "sqrt(" + val + ")=" + inputWindow.value + "</li>" + "<hr>";
    }

})

//Сложение
document.querySelector("#btn_plus").addEventListener('click', function () {
    updateAction(inputWindow.value, "+");
})

//Сложение
document.querySelector("#btn_minus").addEventListener('click', function () {
    updateAction(inputWindow.value, "-");
})

//Умножение
document.querySelector("#btn_multiply").addEventListener('click', function () {
    updateAction(inputWindow.value, "*");
})

//Деление
document.querySelector("#btn_divide").addEventListener('click', function () {
    updateAction(inputWindow.value, "/");
})


//Вычисление
document.querySelector("#btn_calc").addEventListener('click', function () {
    if (operation != null) {
        let val = parseFloat(inputWindow.value);

        if (val == 0 && operation == "/") {
            alert('Деление на 0 невозможно');
            return false;
        }

        switch (operation) {
            case '+':
                result = lastOperand + val;
                break;
            case '-':
                result = lastOperand - val;
                break;
            case '*':
                result = lastOperand * val;
                break;
            case '/':
                result = lastOperand / val;
                break;
        }

        inputWindow.value = result;
        updateJournal(val, result)
        lastOperand = 0;
        operation = null;
        showAction("", "");
    }
})

//Журнал
document.querySelector("#btn_journal").addEventListener('click', function () {
    document.querySelector(".journal").classList.toggle('journal-show');
})