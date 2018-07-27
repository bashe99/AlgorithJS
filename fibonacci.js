function getFib(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return getFib(n-1) + getFib(n-2);
    }
}

function generateFib(n) {
    if (n < 0) {
        return null;
    }

    let result = [1];
    let lastOne = 1;
    let lastTwo = 0;

    while(n > 0) {
        let value = lastOne + lastTwo;
        result.push(value);
        lastTwo = lastOne;
        lastOne = value;
        n--;
    }

    return result;
}

console.log(generateFib(5));
console.log(getFib(5));