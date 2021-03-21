const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelectorAll(".carousel-slide > img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let counter = 1;
const size = carouselImg[0].clientWidth;
console.log(size);
carouselSlide.style.transform = `translateX(${-size * counter}px)`;
next.addEventListener('click', () => {
    if(counter >= carouselImg.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prev.addEventListener('click', () => {
    
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});
carouselSlide.addEventListener('transitionend', () => {

    if(carouselImg[counter].id === 'last-item'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if(carouselImg[counter].id === 'frist-item'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});