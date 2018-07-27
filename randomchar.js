function generateRandomChar(len) {
    let candidate = "abcdefghijklmnopqrstuvwxyz1234567890";
    let result = '';
    for (let i=0; i< len; i++) {
        let value = candidate.charAt(Math.floor(Math.random() * candidate.length));
        result += value;
    }

    return result;
}

console.log(generateRandomChar(5));