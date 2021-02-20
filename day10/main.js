
// Pending 대기 
// Fulfilled 이행완료
// Rejected 실패

function getData(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject(new Error("Error"));
        }, 1000);
    })
}

async function printHelloWorld(){
    try{
        const data = await getData();
        console.log(data);
    } catch(err){
        console.log(err);
    }
}

printHelloWorld()

