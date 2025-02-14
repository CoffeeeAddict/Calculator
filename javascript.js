const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector(".display");

let currentNumber = 0;
let storedNumber = 0;
let result = 0;

numberButtons.forEach((button) => {
    button.addEventListener("click", numberClick)
})

function numberClick(e) {
    let selectedNumber = getButtonNumber(e.currentTarget);
    if(display.childElementCount >= 7) {
        return;
    }
    
    addToDisplay(selectedNumber);
    currentNumber *= 10;
    currentNumber += selectedNumber;
    console.log(currentNumber);
}

function addToDisplay(number) {
    let icon = createIcon(number);
    display.appendChild(icon);
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
        case ".":
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