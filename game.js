const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut();
    $(`#${randomChosenColour}`).fadeIn();

    console.log(randomChosenColour);
    const color = new Audio(`./sounds/${randomChosenColour}.mp3`);
    color.play();
}

$("#test").on("click", nextSequence);
