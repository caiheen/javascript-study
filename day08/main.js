// 객체 원시타입 문자열, 숫자, 불리언, null

// Object, Array, Function

// 배열이나 함수도 객체 취급을 한다.

// 객체는 모두 함수로 만들어짐



// function Car(wheels){ 
//     this.wheels = wheels;
// }

// Car.prototype.run = function(){
//     console.log("Running");
// }

// Car.prototype.breakes = function(){
//     console.log("Break");
// }

// const hyundai = new Car("4");
// const kia = new Car("2");

// console.log(hyundai)
// console.log(kia)
// kia.run();
// kia.breakes();

// prototype object, prototpye link

// function add(a, b){
// //     return a + b;
// // }

// // const a = new add();
// // add.prototype.name = "이름";
// // add.prototype.minus = function(a, b){
// //     return a - b;
// // }
// // console.log(add);
// // console.log(a);
// // console.log(a.minus(5, 4));

class Car {
    constructor(wheels, name){
        this.wheels = wheels;
        this.name = name
    }

    test(){
        console.log("test");
    }
}

class Hyundai extends Car {
   run(){
       console.log("Run");
   }

   nav(){
       console.log("Navigator");
   }

   breaks(){
        console.log("break");
   }
}

const test = new Car("4", "test");
const sonata = new Hyundai("4", "Sonata");
console.log(test);
console.log(sonata);
test.test();

sonata.test();
sonata.run();