let a = 0;
let data;
function getData(){
    setTimeout(function(){
        a = 5;
        setTimeout(function(){
            data = a;
            
            console.log(data)
        },0);
    }, 3000);
}
getData()

// 비동기처리



// Promise, then, catch 

// Async Await