function makeSimpleCalc(sign, leftOperand, rightOperand) {
    let result;
    switch (sign) {
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '+':
            result = leftOperand + rightOperand;
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

const POSSIBLE_ACTIONS = ['*', '+', '-', '/'];
const BRACKETS = ['(', ')'];

function accountVal(val, exp, result) {
    result.push(val);

    return exp.slice(String(val).length);
}

function getArrayExp(exp) {
    let resultArr = [];
    let currentSymbol;
    let possibleNumber;
    let valueErr = false;
    let extraElm = true;
    let extraBrackets = false;
    while (exp && !valueErr) {
        exp = exp.trim();
        currentSymbol = exp.charAt(0);
        if (POSSIBLE_ACTIONS.includes(currentSymbol)) {
            extraElm += 1;
            exp = accountVal(currentSymbol, exp, resultArr);
        } else if (!isNaN(currentSymbol)) {
            possibleNumber = exp.split(/[-\/*+\s()]/, 1)[0];
            extraElm -=1
            isNaN(possibleNumber) ? valueErr = true : exp = accountVal(+possibleNumber, exp, resultArr);
        } else if (BRACKETS.includes(currentSymbol)) {
            BRACKETS.indexOf(currentSymbol) >= (BRACKETS.length / 2) ? extraBrackets -= 1 : extraBrackets += 1;
            exp = accountVal(currentSymbol, exp, resultArr);
        } else {
            valueErr = true;
        }
    }
    if (extraBrackets || extraElm || valueErr) {
        resultArr = [];
    }

    return resultArr;
}

function getValFrom(usableArray) {
    let val;
    if (POSSIBLE_ACTIONS.includes(usableArray[0]) || BRACKETS.includes(usableArray[0])) {
        val = makeCalc(usableArray);
    } else {
        val = usableArray.splice(0, 1)[0];
    }

    return val;
}

function makeCalc(usableArray) {
    let leftVal, rightVal, result, operator;
    let intoBrackets = false;
    operator = usableArray.splice(0, 1)[0];
    if (operator === '(') {
        intoBrackets = true;
        operator = usableArray.splice(0, 1)[0];
    }
    leftVal = getValFrom(usableArray);
    rightVal = getValFrom(usableArray);
    result = makeSimpleCalc(operator, leftVal, rightVal);
    if (usableArray[0] === ')' && intoBrackets) {
        usableArray.splice(0, 1);
    } else if (intoBrackets) {
        result = undefined;
    }

    return result;
}

function calc(inputExp) {
    let expressionArray;
    let answer = null;
    expressionArray = getArrayExp(inputExp);
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

    return answer;
}

calc('* 2 3');