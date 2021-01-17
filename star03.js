//숙제

const line = 10;
let star = "";

for(let i = line; i >= 1; i--){
    for(let j = 1; j <= i; j++){
        star += "*";
    }
    star += "\n";
}
console.log(star);