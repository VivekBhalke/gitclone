var sequence = [];
var userSequence = [];
var level = 1;
$("body").one("keydown" , function (){
    startGame();
})

function generateAudio(classText)
{
    switch (classText){
        case "green" :
            return "./sounds/green.mp3";
        case "red" :
            return "./sounds/red.mp3";
        case "yellow" :
            return "./sounds/yellow.mp3";
        case "blue" : 
            return "./sounds/blue.mp3";
    }
}
function generateClass(randNo){
    switch (randNo){
        case 0 :
            return "green";
        case 1 :
            return "red";
        case 2 :
            return "yellow";
        case 3 : 
            return "blue";
    }
}
function animatePress(classText)
{
    var element = "." + classText;
    $(element).addClass("pressed");
    setTimeout(function(){
        $(element).removeClass("pressed");
    },100);
}
function playSound(classText)
{
    var fileName = "./sounds/" + classText + ".mp3";
    var audio = new Audio(fileName);
    audio.play();
}
function initalLogic()
{
    userSequence = [];
    console.log("inital logic called");
    var randNo = Math.random();
    randNo = randNo * 4;
    randNo = Math.floor(randNo);
    var classText = generateClass(randNo);
    animatePress(classText);
    playSound(classText);
    $("#level-title").html("Level " + level);
    sequence.push(classText);    
    
}
$(".btn").on("click" , function (event){
    var clickedButton = event.target;
    var classValues = clickedButton.classList;
    var classText = classValues[1];
    console.log("in the click callback" + classValues[1]);
    animatePress(classText);
    playSound(classText);
   
    userSequence.push(classText);
    var currentLevel = userSequence.length - 1;
    checkAnswer(currentLevel);
});
function checkAnswer(currentLevel){    
    
    console.log(userSequence);
    console.log(sequence);
    if(userSequence[currentLevel] == sequence[currentLevel])
    {
        if(userSequence.length == sequence.length)
        {
            level++;
            setTimeout(function(){
                initalLogic();
            },1000);
        }
        else{
            console.log("wrong")
        }
    }
    else{
        sequence = [];
        level = 0;
        $("#level-title").html("Game over press any key to restart");
        $("body").css("background", "red");
        setTimeout(function(){
            $("body").css("background","#011F3F")
        },1000)

        $("body").one("keydown" , function (){
           setTimeout(function(){
            startGame();
           },500   )
        })
        
        console.log("wrong")
    }
}

function startGame(){
    initalLogic();   
        
}