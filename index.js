// document.querySelector("button").addEventListener("click", function(){
//     alert("I am click");
// })

const buttonWrapper = document.querySelectorAll('.drum');

buttonWrapper.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){
        var  buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        flash(buttonInnerHTML);
    })
})

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    flash(event.key);
})
/**
 * the clicked button will flash to grey background and then back to
 * original state
 * @param {*} currentBtn 
 */
function flash(currentBtn){
    //for the selector to select the button class
    var activeBtn = document.querySelector("." + currentBtn);
    //add the pressed class from CSS
    activeBtn.classList.add("pressed");
    // use the setTimeout method to remove the class to bring it back to original state
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}

function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:console.log("Oops!, something's broken..");
    }
}