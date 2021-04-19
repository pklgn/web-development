let n = 10;
function isPrime(number) {
    let result;
    for (let i = 2; i <= n; i++) {
        result = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}
function isPrimeNumber(inputParameter) {
    let message
    if (inputParameter instanceof Array) {
        for (let i = 0; i < inputParameter.length; i++) {
            isNaN(inputParameter[i]) ? console.log(`${inputParameter[i]} is not a number`) :
                message = isPrime(inputParameter[i]);
            if (message)
        }
    }
}