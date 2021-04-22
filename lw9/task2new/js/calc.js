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
        default:
            result = undefined;
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
            arr.push(currentSymbol);
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
    let brackets = ['(', ')'];
    let leftVal, rightVal, operator, expVal;
    let intoBrackets = false;
    operator = usableArray.splice(0, 1)[0];
    if (!possibleActions.includes(operator)) {
        if (operator === '(') {
            intoBrackets = true;
            operator = usableArray.splice(0, 1)[0];
        } else {
            operator = undefined;
        }
    }
    leftVal = usableArray[0];
    if (possibleActions.includes(leftVal) || brackets.includes(leftVal)) {
        leftVal = makeCalc(usableArray);
    } else {
        usableArray.splice(0, 1);
    }
    rightVal = usableArray[0];
    if (possibleActions.includes(rightVal) || brackets.includes(rightVal)) {
        rightVal = makeCalc(usableArray);
    } else {
        usableArray.splice(0, 1);
    }
    expVal = makeSimpleCalc(operator, leftVal, rightVal);
    if (usableArray[0] === ')' && intoBrackets) {
        usableArray.splice(0, 1);
    } else if (intoBrackets) {
        expVal = undefined;
    }
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
        console.log('There are extra or wrong values in the expression ');
    }
    return true;
}

calc('* 2 / 8 4 2 2 2');