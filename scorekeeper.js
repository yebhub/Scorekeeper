var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var resetButton = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;



//similar actions on p1 and p2 buttons need to be coupled out into a single function 
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score ++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner")
            gameOver = true;
        }
     p1Display.textContent = p1Score;

    }

})

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score ++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner")
            gameOver = true;
        }
     p2Display.textContent = p2Score;
    }
    
   
})

resetButton.addEventListener("click", function(){
   reset();

})


//change events run whenever value changes 
numInput.addEventListener("change", function(){
    winningScore = Number(this.value);
    winningScoreDisplay.textContent = this.value;
    reset();

});

function reset(){
    p1Score = 0;
    p2Score = 0;
    gameOver = false
    p2Display.textContent = p2Score;
    p1Display.textContent = p1Score;

    spans = document.querySelectorAll("span")
    for(i = 0; i < spans.length; i++){
        if(spans[i].classList.contains("winner")){
            spans[i].classList.remove("winner");
        }    
    }

}