// 함수란 

// 함수 선언식

function test(){
    console.log("Hello");
}

// 함수 표현식
// es5 표현식

const main = function(){
    console.log("World");
};

// es6

const main2 = () => {
    console.log("main2");
}

// main2();

// 변수

// 함수

// 함수실행

// 덧셈,뺄셈, 나눗셈,곱셈

function add(a, b){
    console.log(a + b);
}

add(3, 4);

// 빼기
function test01(a, b){
    console.log(a - b);
}

test01(6, 5);

// 곱하기
function test02(a, b){
    console.log(a * b);
}

test02(3, 5);

// 나누기
function test03(a=1, b=1){
    console.log(a / b);
}

test03();

// 나머지 
function test04(a=1, b=1){
    return a % b;
}

const a = test04();
console.log(a);
