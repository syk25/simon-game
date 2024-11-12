const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let level = 0;

function playSound(name) {
    const color = new Audio(`./sounds/${name}.mp3`);
    color.play();
}

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut();
    $(`#${randomChosenColour}`).fadeIn();

    playSound(randomChosenColour);
    $("#level-title").text(`Level ${level++}`);
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

$("#test").on("click", nextSequence);

$(".btn").on("click", (event) => {
    const userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);

    playSound(userChosenColor);
});

$(document).on("keydown", nextSequence);
