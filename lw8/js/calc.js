let expression, currentSign, usableArray, offset;
let possibleActions = ['*', '/', '+', '-', '(', ')'];
expression = ' + 2 3'

usableArray =  expression.trim().split(' ');

function chooseCalc(sign, firstOperand, secondOperand) {
    let result;
    switch (sign) {
        case '*':
            result = firstOperand * secondOperand;
            break
        case '+':
            result = +firstOperand + +secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }
    return result;
}

function calc(usableArray, signIndex) {
    let firstOperand, secondOperand, sign, value, result;
    sign = usableArray[signIndex];
    firstOperand = usableArray[signIndex + 1];
    if (possibleActions.includes(firstOperand)) {
        result = calc(usableArray, signIndex + 1);
        firstOperand = result[0];
        signIndex = result[1];
    }
    secondOperand = usableArray[signIndex + 2];
    if (possibleActions.includes(secondOperand)) {
        result = calc(usableArray, signIndex + 2);
        secondOperand = result[0];
        signIndex = result[1];
    }
    value = chooseCalc(sign, firstOperand, secondOperand);
    signIndex += 1;
    return [value, signIndex];
}

console.log(calc(usableArray, 0)[0]);
