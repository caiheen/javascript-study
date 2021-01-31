const slideItem = document.querySelector(".slide-item:first-child");

const slide = () => {
    const currentSlide = document.querySelector(".active");
    if(currentSlide){
        currentSlide.classList.remove("active");
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add("active");
        } else {
            slideItem.classList.add("active");
        }
    } else {
        slideItem.classList.add("active");
    }
}
slide()
setInterval(slide, 3000);