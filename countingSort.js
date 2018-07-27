function countingSort(arr) {
    if (arr && arr.length > 0) {
        let counter = [];
        let min = arr[0];
        let max = arr[0];
        let result = [];
        arr.forEach(elem => {
            elem > max && (max=elem);
            elem < min && (min=elem);

            counter[elem] = counter[elem] ? ++counter[elem] : 1;
        });

        for(let i=min; i<= max; i++) {
            if (counter[i] && counter[i] > 0) {
                let j = counter[i];
                while(j > 0) {
                    result.push(i);
                    j--;
                }
            }
        }

        return result;
    }

    return arr;
}

let test = [4,2,6,1,1,4,2,9];
console.log(countingSort(test));