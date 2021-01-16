// 평균 구하는 함수 

// 5개 

// ex)
function getLevel(a, b, c, d, e){
    const total = a + b + c + d + e;
    const average = total / 5;

    if(average >= 90){
        return "A";
    } else if(average >= 80 && average < 90){
        return "B";
    } else if(average >= 70 && average < 80){
        return "C";
    } else if (average >= 60 && average < 70){
        return "D";
    } else {
        return "E";
    }
    
}

console.log(getLevel(20,60,40,19,10));
