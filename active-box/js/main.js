const header = document.querySelector("header");

function scrollHeader(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollTop);
    if(scrollTop > 30){
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}
scrollHeader();
window.addEventListener('scroll', scrollHeader);

const leftimg = document.querySelectorAll(".left-item");
const rightBox = document.querySelectorAll(".right-item");
const dot = document.querySelectorAll(".dot");

function tab(index){
    dot.forEach((item, i) => {
        if(i === index){
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });
    leftimg.forEach((item, i) => {
        if(i === index){
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });
    rightBox.forEach((item, i) => {
        if(i === index){
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });
};

dot.forEach((item,index) => {
    item.addEventListener('click', () => {
        tab(index);
    });
});