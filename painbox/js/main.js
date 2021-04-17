const scrollElements = document.querySelectorAll(".js-fade");

function inView(ele, dividend = 1){
    const eleTop = ele.getBoundingClientRect().top;
    console.log(eleTop);

    return (
        eleTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend // true, false
    )
}

function outView(ele){
    const eleTop = ele.getBoundingClientRect().top;

    return (
        eleTop > (window.innerHeight || document.documentElement.clientHeight)
    )
}

function displayElement(ele){
    ele.classList.add("on");
}

function hideElement(ele){
    ele.classList.remove("on");
}

function scrollEffectHandler(){
    scrollElements.forEach(ele => {
        if(inView(ele, 1.25)){
            displayElement(ele);
        } else if(outView(ele)){
            hideElement(ele);
        }
    })
}

window.addEventListener('scroll', () => {
    scrollEffectHandler();
})