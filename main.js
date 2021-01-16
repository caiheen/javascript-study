// while 
// let a = 20;
// let total = 0;
// while(a > 10){
//     a++;
//     total += a;
//     console.log(total);
//     if(total == 55){
//         break;
//     }
// // }

// let a = 0;

// // while(a > 1){
// //     a++;
// //     console.log(a);
// // }

// do {
//     a++;
//     console.log(a);
// } while(a > 1);
let line = prompt("원하는 줄을 적으세요");
let star = "";
for(let i = 1; i <= line; i++){
    for(let j = 1; j <= i; j++){
        star += "*";
    }
    star += "<br />";
}
document.write(star);

