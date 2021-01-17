const fav = {
    a : "딸기",
    b : "바나나",
    c : "멜론"
}

const fav2 = {...fav};
fav2.d = "수박";
console.log(fav);
console.log(fav2);

const arr = [1,2,3];
const arr2 = [...arr];
arr2.push(4);
console.log(arr, arr2)