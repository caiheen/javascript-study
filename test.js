let line = 5;
let star = "";

for(let i = 1; i <= line; i++){
    for(let j = 1; j <= i; j++){
        star += "*";
    }
    star += "\n";

}

console.log(star);