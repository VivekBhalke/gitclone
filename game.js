buttonColors = ["blue" , "green" , "yellow" ,"red"];
gamepattern = [];
userClickedPattern = [];
var level = 0;
function nextSequence(){
    userClickedPattern = [];
    var randNo = Math.random();
    randNo = randNo * 4;
    randNo = Math.floor(randNo);
    var randomChosenColor = buttonColors[randNo];
    gamepattern.push(randomChosenColor);
    animatePress(randomChosenColor)
    var audio = new Audio("./sounds/" + randomChosenColor +".mp3");
    audio.play();
    $("#level-title").html("Level " + level)
    level++;
}

function getInput()
{
    $(".btn").on("click" , function(event){
        var userChosenColor = event.target.classList[1];
        userClickedPattern.push(userChosenColor);
    })
    checkAnswer(userSequence.length - 1)
}
function animatePress(currentColor)
{
    var color = "#" + currentColor;
    $(color).addClass("pressed");
    setTimeout(function(){
        $(color).removeClass("pressed");
    } , 100);
}
function checkAnswer(currentLevel)
{
    if(userSequence[currentLevel] == gamepattern[currentLevel]){
        setTimeout(nextSequence , 1000);
    }
}
function startGame()
{
    $("body").on("keydown" , function(){
        nextSequence();
    })
}