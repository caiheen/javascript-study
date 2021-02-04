const slideItem = document.querySelector(".slide-item:first-child");
const slideLastitem = document.querySelector(".slide-item:last-child");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dot = document.querySelector(".dot:first-child");
const lastDot = document.querySelector(".dot:last-child");
const dotAll = document.querySelectorAll(".dot")
const slideAll =document.querySelectorAll(".slide-item");

function slide(){
    const currentSlide = document.querySelector(".slide-item.active");
    const currentDot = document.querySelector(".dot.active");
    if(currentSlide){
        currentSlide.classList.remove("active");
        currentDot.classList.remove("active");
        const nextSlide = currentSlide.nextElementSibling;
        const nextDot = currentDot.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add("active");
            nextDot.classList.add("active");
        } else {
            slideItem.classList.add("active");
            dot.classList.add("active");
        }
    } else {
        slideItem.classList.add("active");
        dot.classList.add("active");
    }

}

function prevSlide() {
    const currentSlide = document.querySelector(".slide-item.active");
    const currentDot = document.querySelector(".dot.active");
    if(currentSlide){
        currentSlide.classList.remove("active");
        currentDot.classList.remove("active");
        const prevSlideitem = currentSlide.previousElementSibling;
        const prevDot = currentDot.previousElementSibling;
        if(prevSlideitem){
            prevSlideitem.classList.add("active");
            prevDot.classList.add("active");
        } else {
            slideLastitem.classList.add("active");
            lastDot.classList.add("active");
        }
    } else {
        slideLastitem.classList.add("active");
        lastDot.classList.add("active");
    }
}

slide();
next.addEventListener("click", slide);
prev.addEventListener("click", prevSlide);

function dotClickFuntion(index){
    const currentDot = document.querySelector(".slide-item.active");
    const currentSlide = document.querySelector(".dot.active");
    if(currentDot){
        currentDot.classList.remove("active");
        currentSlide.classList.remove("active");

        dotAll[index].classList.add("active");
        slideAll[index].classList.add("active");
    }
}

dotAll.forEach((item, index) => {
    item.addEventListener('click', function(){
        dotClickFuntion(index);
    });
});