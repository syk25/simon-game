const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

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
}

$("#test").on("click", nextSequence);

$(".btn").on("click", (event) => {
    const userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    $(`#${userChosenColor}`).fadeOut();
    $(`#${userChosenColor}`).fadeIn();

    playSound(userChosenColor);
});
