const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelectorAll(".carousel-slide > img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

/* count 변수선언 넘어가는 애들 순서 */
let counter = 1;
/* img size */
const size = carouselImg[0].clientWidth;
console.log(size);
/* 첫번째 이미지 보여주기 */
carouselSlide.style.transform = `translateX(${-size * counter}px)`;
/* next 버튼 클릭 */
next.addEventListener('click', () => {
    /* return */
    if(counter >= carouselImg.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});


/* prev 버튼 클릭 */
prev.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

/* transitionend 트랜지션이 끝났을 때 */
carouselSlide.addEventListener('transitionend', () => {
    if(carouselImg[counter].id === 'last-item'){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if(carouselImg[counter].id === 'frist-item'){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});