const numberButtons = document.querySelectorAll(".numberButton");
const operationButtons = document.querySelectorAll(".operationButton");
const equalsButton = document.querySelector("#buttonEqualsContainer");
const clearButton = document.querySelector("#buttonCancelContainer");
const display = document.querySelector(".display");

let currentNumber = 0;
let storedNumber = "unchosen";
let result = 0;
let operator = "unchosen"

numberButtons.forEach((button) => {
    button.addEventListener("click", numberClick)
})

operationButtons.forEach((button) => {
    button.addEventListener("click", operationClick)
})

equalsButton.addEventListener("click", equalsClick);
clearButton.addEventListener("click", clearCalculator);

function clearCalculator() {
    clearDisplay();
    currentNumber = 0;
    storedNumber = "unchosen";
    result = 0;
    operator = "unchosen"
}

function equalsClick() {
    if(storedNumber === "unchosen" || currentNumber === "unchosen") {
        return;
    }
    calculateResult();
    storedNumber = currentNumber;
    currentNumber = "unchosen";
}

function calculateResult() {
    if(storedNumber === "unchosen" || currentNumber == "unchosen") {
        return;
    }

    result = operate(storedNumber, currentNumber, operator);
    if(Math.round(result) != result) {
        result = Math.round(result*100)/100;
    }
    fillDisplay(result);

    currentNumber = result;
    storedNumber = "unchosen";
    operator = "unchosen";
}

function operationClick(e) {
    if(operator !== "unchosen" && storedNumber === "unchosen") {
        operator = getOperatorType(e.currentTarget);
        return;
    }

    if(storedNumber !== "unchosen" && currentNumber !== "unchosen") {
        calculateResult();
    }

    if(currentNumber === "unchosen") {
        operator = getOperatorType(e.currentTarget);
        return;
    }

    storedNumber = currentNumber;
    currentNumber = 0;
    operator = getOperatorType(e.currentTarget);
}

function getOperatorType(button) {
    let id = button.id;
    switch(id) {
        case "buttonAddContainer":
            return "add";
            break;
        case "buttonSubtractContainer":
            return "subtract";
            break;
        case "buttonMultiplyContainer":
            return "multiply";
            break;
        case "buttonDivideContainer":
            return "divide";
            break;
    }
}

function numberClick(e) {
    let selectedNumber = getButtonNumber(e.currentTarget);

    if(display.childElementCount >= 7 && 
        (currentNumber !== 0 && currentNumber !== "unchosen")) {
        return;
    }

    if(currentNumber === 0) {
        clearDisplay();
        currentNumber = 0;
    }

    if(currentNumber === "unchosen") {
        if(operator === "unchosen") {
            clearCalculator();
        } else {
            clearDisplay();
        }
        currentNumber = 0;
    }

    addToDisplay(selectedNumber);
    currentNumber *= 10;
    currentNumber += selectedNumber;
}

function addToDisplay(number) {
    let icon = createIcon(number);
    display.appendChild(icon);
}

function fillDisplay(number) {
    clearDisplay();
    number = String(number);

    for(let i=0; i<number.length; i++) {
        addToDisplay(Number(number[i]));
    }
}

function clearDisplay() {
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

function createIcon(number) {
    let icon = document.createElement("img");
    icon.classList.add("icon");

    switch(number) {
        case 1:
            icon.src = "./img/icons/one.png"
            break;
        case 2:
            icon.src = "./img/icons/two.png"
            break;
        case 3:
            icon.src = "./img/icons/three.png"
            break;
        case 4:
            icon.src = "./img/icons/four.png"
            break;
        case 5:
            icon.src = "./img/icons/five.png"
            break;
        case 6:
            icon.src = "./img/icons/six.png"
            break;
        case 7:
            icon.src = "./img/icons/seven.png"
            break;
        case 8:
            icon.src = "./img/icons/eight.png"
            break;
        case 9:
            icon.src = "./img/icons/nine.png"
            break;
        case 0:
            icon.src = "./img/icons/zero.png"
            break;
        default:
            icon.src = "./img/icons/dot.png"
            break;
    }

    return icon;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0) {
        return 42;
    }

    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case "add":
            return add(num1, num2);
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
    }
}

function getButtonNumber(button) {
    let id = button.id;
    switch(id) {
        case "buttonOneContainer":
            return 1;
            break;
        case "buttonTwoContainer":
            return 2;
            break;
        case "buttonThreeContainer":
            return 3;
            break;
        case "buttonFourContainer":
            return 4;
            break;
        case "buttonFiveContainer":
            return 5;
            break;
        case "buttonSixContainer":
            return 6;
            break;
        case "buttonSevenContainer":
            return 7;
            break;
        case "buttonEightContainer":
            return 8;
            break;
        case "buttonNineContainer":
            return 9;
            break;
        case "buttonZeroContainer":
            return 0;
            break;
    }
}