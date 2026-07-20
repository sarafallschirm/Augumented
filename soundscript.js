



const image = document.getElementById("shrekpng.png");
const sound = new Audio("./sound.mp3");

image.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.error("The sound could not be played:", error);
    });
});

