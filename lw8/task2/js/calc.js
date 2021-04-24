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
    let brackets = ['(', ')'];
    let arr = [];
    let possibleNumber;
    let extraElm = true;
    let valueErr = false;
    let extraBrackets = false;
    let currentSymbol;
    while (exp) {
        exp = exp.trim();
        currentSymbol = exp.charAt(0);
        if (possibleActions.includes(currentSymbol)) {
            extraElm += 1;
            arr.push(currentSymbol);
            exp = exp.slice(1);
        } else if (!isNaN(currentSymbol)) {
            possibleNumber = exp.split(/[-\/*+\s()]/, 1)[0];
            isNaN(possibleNumber) ? valueErr = true : (
                arr.push(+possibleNumber),
                extraElm -=1
            );
            exp = exp.slice(possibleNumber.length);
        } else if (brackets.includes(currentSymbol)) {
            brackets.indexOf(currentSymbol) >= (brackets.length / 2) ? extraBrackets += 1 : extraBrackets -= 1;
            exp = exp.substring(1);
        } else {
            valueErr = true;
            exp = exp.slice(1);
        }
    }
    if (extraBrackets || extraElm || valueErr) {
        arr = [];
    }
    return arr;
}

function makeCalc(usableArray) {
    let possibleActions = ['*', '/', '+', '-'];
    let leftVal, rightVal, operator, expVal;
    operator = usableArray.splice(0, 1)[0];
    leftVal = usableArray[0];
    possibleActions.includes(leftVal) ? leftVal = makeCalc(usableArray) : usableArray.splice(0, 1);
    rightVal = usableArray[0];
    possibleActions.includes(rightVal) ? rightVal = makeCalc(usableArray) : usableArray.splice(0, 1);
    expVal = makeSimpleCalc(operator, leftVal, rightVal);
    return expVal;
}

function calc(inputExp) {
    let expressionArray;
    let answer;
    expressionArray = arrayExp(inputExp);
    if (expressionArray.length) {
        answer = makeCalc(expressionArray);
        if (isNaN(answer)) {
            console.log('Wrong expression');
        } else {
            if (expressionArray.length) {
                console.log('Wrong expression');
            } else {
                console.log(answer);
            }
        }
    } else {
        console.log('Wrong expression');
    }
    return true;
}