function babelSort(arr) {
    if(arr) {
        for(let i=0; i< arr.length - 1; i++) {
            for(let j=i+1; j< arr.length; j++) {
                if(arr[i] > arr[j]) {
                    swap(arr, i, j);
                }
            }
        }
    }

    return arr;
}

function quickSort2(arr) {
    if(arr && arr.length > 1) {
        let flagValue = arr[0];
        let leftArr = [];
        let rightArr = [];

        for(let i=1; i< arr.length; i++) {
           if (arr[i] > flagValue) {
               leftArr.push(arr[i]);
           } else {
                rightArr.push(arr[i]);
           }
        }

        return [].concat(quickSort2(leftArr), [flagValue], quickSort2(rightArr));
    }

    return arr;
}

function quicksort(arr, leftIndex, rightIndex){
    if (leftIndex < rightIndex) {
        let partitionIndex = partition(arr, leftIndex, rightIndex);
        quicksort(arr, leftIndex, partitionIndex -1);
        quicksort(arr, partitionIndex +1, rightIndex);
    }

    return arr;
}

function partition(arr, leftIndex, rightIndex) {
       let flagValue = arr[leftIndex];
       let putIndex = leftIndex +1;
       for(let index = putIndex; index <= rightIndex; index++){
           if(arr[index] < flagValue) {
               swap(arr, index, putIndex);
               putIndex++;
           }
       }

       swap(arr, leftIndex, putIndex -1);
       console.log(flagValue + ": " + arr + ":" + (putIndex -1));
       return putIndex -1;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

let test = [4,2,5,1,3,1,4,2];
console.log(quicksort(test, 0, test.length -1));