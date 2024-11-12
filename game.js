const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

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

// 버튼 클릭 감지
$(".btn").on("click", (event) => {
    console.log(event.target.id);
    const userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});
