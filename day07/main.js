const span = document.querySelector(".txt-wrap");
const words = JSON.parse(span.getAttribute("data-words"));
let txt = "";
let index = 0;
let isDeleting = false; // false 입력중, true 입력완료

console.log(words); // 배열 잘 가져와졌는지 확인!

function init(){
    const current = index % words.length; // 모듈로 연산

    if(isDeleting){
        txt = words[current].substring(0, txt.length - 1); // 입력이 끝나면 하나씩 삭제
    } else {
        txt = words[current].substring(0, txt.length + 1); // 입력중에 하나씩 추가
    }

    span.innerHTML = `<span>${txt}</span>`; // span에 글씨 입력

    if(txt === words[current] && !isDeleting){ // 입력이 다되면
        isDeleting = true; // 멈추기, 하나씩 삭제
    } else if(txt === "" && isDeleting){ 
        isDeleting = false;
        index++;
    }
    setTimeout(init, 300);
}

init();

