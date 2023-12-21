function mergeSort(arr) {
    if ( arr.length <= 1) {
        return arr;
    }

    let  mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid); 

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
}

function merge(left, right){
    let results = []
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            results.push(left[leftIndex]);
            leftIndex++;
        } else {
            results.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [9,4,7,8,3,5,2,1,6];
console.log(mergeSort(arr));
