var buttons = document.querySelectorAll("button")
function myFunction(key) {
    switch (key) {
        case "w":
            crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;  
        case "d":
            tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;  
        case "k":
            tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonPress = this.innerHTML;
        myFunction(buttonPress);
        buttonAnimation(buttonPress)
    })
}

document.addEventListener("keydown", (event) => {
    var buttonPress = event.key;
    myFunction(buttonPress);
    buttonAnimation(buttonPress)
})

function buttonAnimation (key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}


