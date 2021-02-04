const span = document.querySelector(".txt-wrap");
const words = JSON.parse(span.getAttribute("data-wrolds"));
let txt = "";
let index = 0;
let isDeleting = false;
console.log(words)

function init(){
    const current = index % words.length; // 모듈로 연산 

    if(isDeleting){
        txt = words[current].substring(0, txt.length - 1 );
    } else {
        txt = words[current].substring(0, txt.length + 1 );
    }
    let wait = 300;
    if(isDeleting){
        wait = 150;
    }

    span.innerHTML = `<span>${txt}</span>`;
   
    if(txt === words[current] && !isDeleting){
        wait = 2000;
        isDeleting = true;
    } else if(txt === "" && isDeleting){
        wait = 1500;
        isDeleting = false;
        index++;
    }

    setTimeout(init, wait);
}

init();