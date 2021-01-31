const form = document.querySelector("form");
const username = form.querySelector("#username");
const email = form.querySelector("#email");
const password = form.querySelector("#password");
const cofirmpassword = form.querySelector("#password2");

function checkEmpty(val){
    if(val === ""){
        return false;
    } else {
        return true;
    }
}

function join(e){
    e.preventDefault();
    const usernameVal = username.value;
    const emailVal = email.value;
    const passwordVal = password.value;
    const cofirmpasswordVal = cofirmpassword.value;
    if(!checkEmpty(usernameVal) || !checkEmpty(emailVal) || !checkEmpty(passwordVal) || !checkEmpty(cofirmpasswordVal)){
        alert("비어있는 인풋에 입력해주세요");
    } else if(passwordVal < 8 && passwordVal > 16){
        alert("비밀번호는 8~16자리입니다");
    } else if(passwordVal !== cofirmpasswordVal){
        alert("비밀번호가 다릅니다");
    } else {
        alert("가입이 완료 되었습니다.");
    }
}

form.addEventListener("submit", join);
