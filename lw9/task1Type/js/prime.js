function isPrime(number) {
    let result;
    result = false;
    for (let i = 2; i <= number; i++) {
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
            typeof inputParameter[i] !== 'number' ? console.log(`'${inputParameter[i]}' is not a number`) :
                isPrime(inputParameter[i]);
        }
    } else {
        typeof inputParameter !== 'number' ? console.log(`'${inputParameter}' is not a number`) :
             isPrime(inputParameter);
    }
    return true;
}
