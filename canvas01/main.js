const canvas = document.querySelector("#canvas01");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// 마우스 포인터 위치
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 90) * (canvas.width / 90)
}

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y  = event.y;
    console.log(mouse)
});

class Particle {
    constructor(x, y, directionX, directionY, size, color){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillstyle = "#fff";
        ctx.fill();
    }

    update(){
        if(this.x > canvas.width || this.x < 0){
            this.directionX = -this.directionX;
        }

        if(this.y > canvas.height || this.y < 0){
            this.directionY = -this.directionY;
        }
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy*dy);
    }

}

