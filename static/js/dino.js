const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
let counter = 0

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump")
        }, 300);
    }
}

document.addEventListener("keydown", function(event) {
    jump();
})

let isAlive = setInterval(function (){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    counter += 0.01

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("Game Over! Your score — " + Math.round(counter));
        counter = 0
    }
}, 10);