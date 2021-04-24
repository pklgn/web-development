function makeSimpleCalc(sign, leftOperand, rightOperand) {
    let result;
    switch (sign) {
        case '*':
            result = leftOperand * rightOperand;
            break;
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

function arrayExp(exp) {
    let possibleActions = ['*', '+', '-', '/'];
    let arr = [];
    let possibleNumber;
    let extraBrackets, extraElm, valueErr = false;
    exp = exp.replace(/ +/g, ' ');
    while (exp) {
        exp = exp.trim();
        if (possibleActions.includes(exp.charAt(0))) {
            extraElm += 1;
            arr.push(exp.charAt(0));
            exp = exp.substring(1);
        } else if (!isNaN(exp.charAt(0))) {
            possibleNumber = exp.split(/[-\/*+\s()]/, 1)[0];
            isNaN(possibleNumber) ? valueErr = true : (
                arr.push(possibleNumber),
                extraElm -=1
            );
            exp = exp.substring(possibleNumber.length);
        } else if (exp.charAt(0) === '(' || exp.charAt(0) === ')') {
            exp.charAt(0) === '(' ? extraBrackets += 1 : extraBrackets -= 1;
            exp = exp.substring(1);
        } else {
            valueErr = true;
        }
    }
    if (extraBrackets || (extraElm + 1) || valueErr) {
        arr = [];
    }
    return arr;
}

function makeCalc(usableArray, signIndex) {
    let possibleActions = ['*', '/', '+', '-'];
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
    value = makeSimpleCalc(sign, leftVal, rightVal);
    signIndex += 1;
    if (signIndex)
    return [value, signIndex];
}

function calc(expression) {
    let expressionArray;

    expressionArray = arrayExp(expression)
    if (!expressionArray.length) {
        return 'Wrong Expression';
    } else {
        console.log(makeCalc(expressionArray, 0)[0])
        return true;
    }
}



