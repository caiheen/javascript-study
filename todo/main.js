const form = document.querySelector(".form");
const textInput = document.querySelector(".text-input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

// input에서 데이터 받기
// submit 했을 때 추가하기
// X, 완료 버튼 만들기

// input에서 데이터 가져오는 함수
const inputTodo = (text) => {
    const li = document.createElement("li"); // li태그를 만든다
    const deleteBtn = document.createElement("button"); // 삭제버튼 만들기
    const compleBtn = document.createElement("button"); // 완료버튼 만들기
    const span = document.createElement("span");
    span.innerText = text; // span에 받은 text 넣기
    li.appendChild(span); //li안에 span넣기
    li.appendChild(deleteBtn); // li안에 삭제버튼 넣기
    li.appendChild(compleBtn); // li안에 완료버튼 넣기
    deleteBtn.innerText = "X"; // 삭제버튼 안에 텍스트넣기
    compleBtn.innerText = "완료"; // 완료버튼 안에 텍스트 넣기
    list.appendChild(li); // ul에 입력된 li 넣기
}

// 저장 했을 때 추가하기
const addTodo = (event) => {
    event.preventDefault(); // 이벤트 함수 새로고침 안되게 
    const value = textInput.value; // input에 들어오는 값
    console.log(value);
    inputTodo(value); // input에 들어오는 값을 inputTodo에 넣기
}

// 함수실행
form.addEventListener ("submit", addTodo);
