
let temp = document.querySelectorAll(".drum");
// let sounds = ["./sounds/crash.mp3", "./sounds/kick-bass.mp3","./sounds/snare.mp3","./sounds/tom-1.mp3","./sounds/tom-2.mp3","./sounds/tom-3.mp3","./sounds/tom-4.mp3"];

function check(i){
    switch(i){
        case "w":
            var aud = new Audio("./sounds/crash.mp3");
            aud.play();
            break;
        case "a":
            var aud = new Audio("./sounds/kick-bass.mp3");
            aud.play();
            break;
        case "s":
            var aud = new Audio("./sounds/snare.mp3");
            aud.play();
            break;
        case "d":
            var aud = new Audio("./sounds/tom-1.mp3");
            aud.play();
            break;
        case "j":
            var aud = new Audio("./sounds/tom-2.mp3");
            aud.play();
            break;
        case "k":
            var aud = new Audio("./sounds/tom-3.mp3");
            aud.play();
            break;
        case "l":
            var aud = new Audio("./sounds/tom-4.mp3");
            aud.play();
            break;
        default:
            break;
    }
}

function buttonClicked(i){
    let a = document.querySelector("." + i);
    a.classList.add("pressed");
    setTimeout((function() {
        a.classList.remove("pressed");
    }), 100);
}

document.addEventListener("keydown", function(event){
    check(event.key);
    buttonClicked(event.key);
});

for(let i = 0; i<temp.length; i++){
    temp[i].addEventListener("click", function(){
        check(temp[i].innerHTML);
        buttonClicked(temp[i].innerHTML);
    });
}