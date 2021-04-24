function isPrime(number) {
    let result;
    for (let i = 0; i <= number; i++) {
        result = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                result = false;
                break;
            }
        }
    }
    if (result) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    }
}

function isPrimeNumber(inputParameter) {
    if (inputParameter instanceof Array) {
        for (let i = 0; i < inputParameter.length; i++) {
            isNaN(inputParameter[i]) ? console.log(`${inputParameter[i]} is not a number`) :
                isPrime(inputParameter[i]);
        }
    } else {
        isNaN(inputParameter) ? console.log(`${inputParameter} is not a number`) :
             isPrime(inputParameter);
    }
    return true;
}
