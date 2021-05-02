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
        ctx.fillStyle = "#6DD5FA";
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
        if(distance < mouse.radius + this.size){
            if(mouse.x < this.x && this.x < canvas.width - this.size * 10){
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10){
                this.x -= 10;   
            }
            if(mouse.y < this.y && this.y < canvas.height - this.size * 10){
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10){
                this.y -= 10;   
            }
        }
        // 도형들 움직이는것
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init(){
    particlesArray = []; 
    let numIfOarticles = (canvas.height * canvas.width) / 15000;
    for(let i = 0; i < numIfOarticles; i++){
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = "#6DD5FA";

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connect(){
    let opacity = 1;
    for(let a = 0; a < particlesArray.length; a++){
        for(let b = a; b < particlesArray.length; b++){
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if(distance < (canvas.width/7) * (canvas.height/7)){
                opacity = 1 - (distance/20000)
                ctx.strokeStyle = `rgba(200, 200, 200, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
        
    }
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
    }
    connect();
}

window.addEventListener("resize", function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height / 80) * (canvas.height/80));
    init();
})

window.addEventListener('mouseout', function(){
    mouse.x = undefined;
    mouse.y = undefined;
})

init();
animate();