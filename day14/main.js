const SHOW = "show";

let next;
let prev;

const scrollEffect = (elem) => {
    window.scrollTo({
        behavior:'smooth',
        left:0,
        top: elem.offsetTop,
    });
};


const scrolling = e => {
    let tags = ['HEADER', 'SECTION', 'FOOTER'];
    const {target} = e;
    // const target = e.target;
    if(tags.includes(target.nodeName)){
        next = target.closest(tags).nextElementSibling;
        prev = target.closest(tags).previousElementSibling;
    } 

    console.log(e.deltaY)
    if(e.deltaY < 0){
        e.preventDefault();
        const {target} = e;
        if(tags.includes(prev.nodeName)){
            scrollEffect(prev, 300, 'easeInOutQuint');
            target.closest(tags).classList.remove(SHOW);
            prev.classList.add(SHOW);
        }
    } else if(e.deltaY > 0){
        e.preventDefault();
        const {target} = e;
        if(tags.includes(next.nodeName)){
            scrollEffect(next, 300, 'easeInOutQuint');
            target.closest(tags).classList.remove(SHOW);
            next.classList.add(SHOW);
        }
    } else {
        return false;
    }
}

document.body.addEventListener('wheel', scrolling);