const btns = document.querySelectorAll(".btns");
const contents = document.querySelectorAll('.content');


function tab(index){
    btns.forEach(function(item, i){
        if(i != index){
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });

    contents.forEach(function(item, i){
        if(i != index){
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

btns.forEach(function(item, index){
    item.addEventListener('click', function(){
        tab(index);
    })
})

