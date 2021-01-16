// *****
//  ****
//   ***
//    **
//     *
//

const line = 5;
let star = "";

for(let i = line; i >= 1; i--){
    for(let j = 1; j <= 5 - i; j++){
        star += " ";
    }
    for(let k = 1; k <= i; k++){
        star += "*";
    }

    star += "\n";
}

console.log(star);