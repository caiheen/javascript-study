const form = document.querySelector("form");
const username = form.querySelector("#username");
const email = form.querySelector("#email");
const password = form.querySelector("#password");
const confirmPassword = form.querySelector("#password2");

console.log(form, username, email, password, confirmPassword);

function checkEmpty(val){
    if(val === ""){
        return false;
    }else{
        return true;
    }
}

function join(e){
    e.preventDefault();
    const usernameVal = username.value;
    const emailVal = email.value;
    const passwordVal = password.value;
    const confirmPasswordVal = confirmPassword.value;
    if(!checkEmpty(usernameVal) || !checkEmpty(emailVal) || !checkEmpty(passwordVal) || !checkEmpty(confirmPasswordVal)){
        alert("인풋에 값을 입력해 주세요");
    } else if(passwordVal.length < 8 && passwordVal > 16){
        alert("비밀번호 길이는 8~16자 사이입니다.");
    } else if (passwordVal !== confirmPasswordVal){
        alert("비밀번호가 서로 일치하지 않습니다.");
    } else {
        alert("가입이 완료되었습니다.");
    }
}

form.addEventListener('submit', join);