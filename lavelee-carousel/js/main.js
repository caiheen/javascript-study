const wrap = document.querySelector(".wrap");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const allItem = document.querySelectorAll(".pro-car-item");

/* 상단 좌측 설명 */
const alltitItem = document.querySelectorAll(".car-tit-item");
const fristtitItem = document.querySelector(".car-tit-item:first-child");
const lasttitITem = document.querySelector(".car-tit-item:last-child");
/* 상단 우측 설명 */
const alldesItem = document.querySelectorAll(".car-des-item");
const fristdesItem = document.querySelector(".car-des-item:first-child");
const lastdesITem = document.querySelector(".car-des-item:last-child");



function prevTop(){
    const currentTit = document.querySelector(".car-tit-item.active");
    const currentDes = document.querySelector(".car-des-item.active");
    if(currentTit){
        currentTit.classList.remove("active");
        currentDes.classList.remove("active");
        const prevDes = currentDes.previousElementSibling;
        const prevTit = currentTit.previousElementSibling;
        if(prevTit){
            prevTit.classList.add("active");
            prevDes.classList.add("active");
        } else {
            lastdesITem.classList.add("active");
            lasttitITem.classList.add("active");
        }
    } else {
        lastdesITem.classList.add("active");
        lasttitITem.classList.add("active");
    }
}
function nextTop(){
    const currentTit = document.querySelector(".car-tit-item.active");
    const currentDes = document.querySelector(".car-des-item.active");
    if(currentTit){
        currentTit.classList.remove("active");
        currentDes.classList.remove("active");
        const nextTit = currentTit.nextElementSibling;
        const nextDes = currentDes.nextElementSibling;
        console.log(nextTit)
        if(nextTit){
            nextTit.classList.add("active");
            nextDes.classList.add("active");
        } else {
            fristtitItem.classList.add("active");
            fristdesItem.classList.add("active");
        }
    }else {
        fristtitItem.classList.add("active");
        fristdesItem.classList.add("active");
    }
}

let counter = 0;
const SIZE = allItem[0].clientWidth;
//wrap.style.transform = `translateX(${-SIZE * counter}px)`;

next.addEventListener('click', () => {
    wrap.style.transition = "transform 0.5s ease-in-out";
    counter++;
    console.log(counter);
    wrap.style.transform = `translateX(${-SIZE * counter}px)`;
    allItem.forEach(item => item.classList.remove("active"));
    if(allItem[counter+1]){
        allItem[counter+1].classList.add("active");
    }
    nextTop();
});

prev.addEventListener("click", () => {
    wrap.style.transition = "transform 0.5s ease-in-out";
    counter--;
    wrap.style.transform = `translateX(${-SIZE * counter}px)`;
    allItem.forEach(item => item.classList.remove("active"));
    if(allItem[counter+1]){
        allItem[counter+1].classList.add("active");
    }
    prevTop();
})

wrap.addEventListener("transitionend", () => {
    if(allItem[counter+1].id === "last-item"){
        allItem.forEach(item => item.classList.remove("active"));
        wrap.style.transition = "none";
        counter = allItem.length - 3;
        wrap.style.transform = `translateX(${-SIZE * counter}px)`;
        allItem[counter + 1].classList.add("active");

    } else if(allItem[counter+1].id === "first-item"){
        console.log(allItem.length);
        console.log(counter)
        allItem.forEach(item => item.classList.remove("active"));
        wrap.style.transition = "none";
        counter = allItem.length - (counter + 2);
        console.log(counter)
        wrap.style.transform = `translateX(${-SIZE * counter}px)`;

        allItem[counter + 1].classList.add("active");
    }
})