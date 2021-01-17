const DEGREE = 6;
const hourspin = document.querySelector(".hours-pin");
const minspin = document.querySelector(".mins-pin");
const secpin = document.querySelector(".sec-pin");

const watch = () => {
    const day = new Date();
    const hours = day.getHours() * 30;
    const mins = day.getMinutes() * DEGREE;
    const sec = day.getSeconds() * DEGREE;
    hourspin.style.transform = `rotate(${hours + (mins/12)}deg)`;
    minspin.style.transform = `rotate(${mins}deg)`;
    secpin.style.transform = `rotate(${sec}deg)`;
}
watch()
setInterval(watch, 1000)