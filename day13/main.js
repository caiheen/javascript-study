const layaPlease = document.querySelectorAll(".laya-please");
const layer2 = document.querySelector(".layer-2");
const layer3 = document.querySelector(".layer-3");
const layer4 = document.querySelector(".layer-4");
const layer5 = document.querySelector(".layer-5");
const layer6 = document.querySelector(".layer-6");
const layer7 = document.querySelector(".layer-7");
const layer8 = document.querySelector(".layer-8");

// animation 삭제
setTimeout(function(){
    layaPlease.forEach(elem => {
        elem.style.animation = "none";
    });
},1000);

// mousemove 이벤트 함수
document.body.addEventListener('mousemove', function(e){
    console.log(e);
    // 트리거가 없을떄 트렌지션 추가, 트랜스폼 none
    if(!e.currentTarget.dataset.triggered){
        layaPlease.forEach(elem => {
            elem.style.transition = "all 0.5s";
            elem.style.transform = "none";
        });
    }
    // 트리거 true
    e.currentTarget.dataset.triggered = true;
    // 트랜스폼
    let width = window.innerWidth / 2;
    let mouseMove2 = (width - e.pageX) / 50;
    let mouseMove3 = (width - e.pageX) / 40;
    let mouseMove4 = (width - e.pageX) / 30;
    let mouseMove5 = (width - e.pageX) / 20;
    let mouseMove6 = (width - e.pageX) / 10;
    let mouseMove7 = (width - e.pageX) / 5;

    layer3.style.transform = `translateX(${mouseMove2}px)`;
    layer4.style.transform = `translateX(${mouseMove3}px)`;
    layer5.style.transform = `translateX(${mouseMove4}px)`;
    layer6.style.transform = `translateX(${mouseMove5}px)`;
    layer7.style.transform = `translateX(${mouseMove6}px)`;
    layer8.style.transform = `translateX(${mouseMove7}px)`;
});

    

document.body.addEventListener('mouseleave', function(){
    layaPlease.forEach(elem => {
        elem.style.transition = "all 0.4s";
        elem.style.transform = "none";
    });
});

// document.body.addEventListener('mouseenter', function(){
//     layaPlease.forEach(elem => {
//         setTimeout(function(){
//             elem.style.transition = "none";
//         }, 500)
//     })
// });