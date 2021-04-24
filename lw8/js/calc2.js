function arrayExp(exp) {
    let possibleActions = ['*', '+', '-', '/'];
    let arr = [];
    let extraBrackets, possibleNumber, valueErr, extraElm;
    extraBrackets = false;
    valueErr = false;
    extraElm = false;
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
