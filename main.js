// Data Type

// // 원시타입
// // number
// const a = 5;
// const b = 5.5;
// const d = 3.14;

// // string

// const str1 = "123";
// const str2 = "hello";

// // boolean
// true
// false

// // null
// null 

// // undefined

// undefined

// const a = 5;
// const b = 5;

// console.log(a === b);

// // 참조타입

// const arr1 = [];
// const arr2 = arr1;

// arr1.push(1);

// console.log(arr1);
// console.log(arr2);

// const git_test_code = "test";

const age = prompt("나이를 입력하세요");

// 나이가 20살 이상 그리고 40미만일떄는 console.log("성인입니다.")
// 나이가 20살 미만일때는 console.log("미성년자입니다.");
// 나이가 40살 이상 그리고 50미만 일때는 console.log("중년입니다.");

// 초과 미만 이상 이하 
//20 ~ 39
// if(age >= 20 && age < 40){
//     console.log("성인입니다.")
// } else if(age < 20){
//     console.log("미성년자입니다.")
// } else if(40 <= age && age < 50){
//     console.log("중년입니다.")
// } else {
//     console.log("없습니다.")
// }

switch(age){
    case "15":
        console.log("미성년자입니다.");
        break;
    case "25":
        console.log("성인입니다.");
        break;

    case "35":
        console.log("중년입니다.");
        break;
}