const SHOW = "show";

let next;
let prev;

// scroll Effect
function scrollEffect(elem){
    window.scrollTo({
        'behavior':'smooth',
        'left':0,
        'top':elem.offsetTop
    })
}

// whell event handler
function scrolling(e){
    let tags = ['HEADER', 'SECTION', 'FOOTER'];
    
    const target = e.target;
    if(tags.includes(target.nodeName)){
        next = target.closest(tags).nextElementSibling;
        prev = target.closest(tags).previousElementSibling;
    }

    if(e.deltaY < 0){
        e.preventDefault();
        if(tags.includes(prev.nodeName)){
            scrollEffect(prev);
            target.closest(tags).classList.remove(SHOW);
            prev.classList.add(SHOW);
        }
    } else if(e.deltaY > 0){
        e.preventDefault();
        if(tags.includes(next.nodeName)){
            scrollEffect(next);
            target.closest(tags).classList.remove(SHOW);
            next.classList.add(SHOW);
        }
    } else {
        return false;
    }
    console.log(e);
};

document.body.addEventListener('wheel', scrolling);