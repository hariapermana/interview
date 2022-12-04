function selisihMaksimal(arr, array_length) {
  let selisih = arr[1] - arr[0];
  for (let i = 0; i < array_length; i++) {
    for (let j = i + 1; j < array_length; j++) {
      if (arr[j] - arr[i] > selisih) selisih = arr[j] - arr[i];
    }
  }
  return selisih;
}
let arr = [10, 7, 5, 8, 11, 9, 1];
let n = arr.length;
console.log(selisihMaksimal(arr, n));
