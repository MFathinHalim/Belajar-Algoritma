function stalin_sort(arr) {
  let maks = arr[0];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maks) {
      maks = arr[i];
      res.push(arr[i]);
    }
  }
  return res;
}

const arr = [1, 2, 5, 3, 5, 7];
console.log(stalin_sort(arr));
