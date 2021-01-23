// const h1 = document.querySelector("h1");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");

// let count = 0;
// const add = () => {
//     count++;
//     h1.innerText = count;
// }

// btn2.addEventListener("click", add);

// const minus = () => {
//     count--;
//     h1.innerText = count;
// }

// btn1.addEventListener("click", minus);

// html 불러오기
const h1 = document.querySelector("h1");
const btn01 = document.querySelector(".btn01");
const btn02 = document.querySelector(".btn02");

// 카운트 될 변수
let count = 0;

// 더해질 함수
const add = () => {
    count++;
    h1.innerText = count;
}

//클릭 실행
btn02.addEventListener("click", add);


// 뺄 함수
const minus = () => {
    count = count - 1;
    h1.innerText = count;
}

// 클릭 실행
btn01.addEventListener("click", minus);