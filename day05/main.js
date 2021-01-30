const form = document.querySelector("form");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const bmi = document.querySelector(".bmi");
const message = document.querySelector('.message');
function bmiCaculator(event){
    event.preventDefault();
    const weightVal =parseInt(weight.value);
    const heightVal = parseInt(height.value) / 100;

    const result = weightVal / (heightVal * heightVal);

    bmi.innerHTML = result;

    if(result <= 18.5){
        message.innerText = "저체중 입니다.";
        message.style.color = "red";
    } else if(result > 18.5 && result <= 23 ){
        message.innerText = "정상체중 입니다.";
        message.style.color = "#222";
    } else if(result > 23 && result <= 25){
        message.innerText = "과체중 입니다.";
        message.style.color = "green";
    } else {
        message.innerText = "고도비만입니다.";
        message.style.color = "red";
    }

}

form.addEventListener("submit", bmiCaculator);