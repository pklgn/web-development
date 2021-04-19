let possibleActions = ['*', '/', '+', '-', '(', ')'];

function simpleCalc(sign, leftOperand, rightOperand) {
    let result;
    switch (sign) {
        case '*':
            result = leftOperand * rightOperand;
            break
        case '+':
            result = +leftOperand + +rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '/':
            result = leftOperand / rightOperand;
            break;
    }
    return result;
}

function validateExp(expArray) {
    let valid;
    let operatorsAmount, operandsAmount;
    operandsAmount = 0;
    operatorsAmount = 0;
    valid = true;
    for (let i = 0; i < expArray.length; i++) {
         if (possibleActions.includes(expArray[i])) {
             operatorsAmount += 1;
         } else if (!isNaN(expArray[i])) {
             operandsAmount += 1;
         } else {
             valid = false;
         }
    }
    if ((operandsAmount - 1) !== operatorsAmount) {
        valid = false;
    }
    return valid;
}

function calc(expression) {
    let expressionArray;

    expressionArray = expression.trim().split(' ');
    if (!validateExp(expressionArray)) {
        return 'Wrong Expression';
    }
    function makeCalc(usableArray, signIndex) {
        let leftVal, rightVal, sign, value, result;
        sign = usableArray[signIndex];
        leftVal = usableArray[signIndex + 1];
        if (possibleActions.includes(leftVal)) {
            result = makeCalc(usableArray, signIndex + 1);
            leftVal = result[0];
            signIndex = result[1];
        }
        rightVal = usableArray[signIndex + 2];
        if (possibleActions.includes(rightVal)) {
            result = makeCalc(usableArray, signIndex + 2);
            rightVal = result[0];
            signIndex = result[1];
        }
        value = simpleCalc(sign, leftVal, rightVal);
        signIndex += 1;
        return [value, signIndex];
    }
    console.log(makeCalc(expressionArray, 0)[0])
    return true;
}


