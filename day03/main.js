const open = document.querySelector(".open")
const wrap = document.querySelector(".wrap")
const overlay = document.querySelector(".overlay")
const modalComtent = document.querySelector(".modal-content")
const close = document.querySelector(".close")

function openModal(){
    wrap.classList.add('open-modal');
}
function closeModal(){
    wrap.classList.remove('open-modal');
}
// Event Listener 
open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 오늘 하루 안보기