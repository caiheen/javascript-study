// // 배열 ( Array )

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr2 = arr.filter((item) => {
    return 3 < item && item < 8;
})
console.log(arr2);