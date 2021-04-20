function arrayExp(exp) {
    let possibleActions = ['*', '+', '-', '/'];
    let arr = [];
    let brackets;
    exp = exp.replace(/ +/g, ' ');
    while (exp) {
        exp = exp.trim();
        if (possibleActions.includes(exp.charAt(0))) {
            arr.push(exp.charAt(0));
            exp = exp.substring(1);
        } else if (!isNaN(exp.charAt(0))) {
            arr = arr.concat(exp.split(/[-\/*+\s]/, 1));
            exp = exp.substring(exp.split(/[-\/*+\s]/, 1)[0].length);
        } else if (exp.charAt(0) === '(' || exp.charAt(0) === ')') {
            exp.charAt(0) === '(' ? brackets += 1 : brackets -= 1;
            exp = exp.substring(1);
        } else {
            return arr = [];
        }
    }
    return arr;
}

console.log(arrayExp('+   2324234  H  8324 - 829374   &?s     * 23* '));