const scrollElements = document.querySelectorAll(".js-fade");

function inView(ele, divide = 1){
    const eleTop = ele.getBoundingClientRect().top;

    return (
        eleTop <= (window.innerHeight || document.documentElement.clientHeight) / divide
    )
}
function outView(ele){
    const eleTop = ele.getBoundingClientRect().top;

    return (
        eleTop > (window.innerHeight || document.documentElement.clientHeight)
    )
}
function displayEle(ele){
    ele.classList.add("on");
}
function hideEle(ele){
    ele.classList.remove("on");
}

function scrollEffect(){
    scrollElements.forEach(ele => {
        if(inView(ele, 1.25)){
            displayEle(ele);
        } else if(outView(ele)){
            hideEle(ele);
        }
    });
}
window.addEventListener("scroll", ()=> {
    scrollEffect();
});