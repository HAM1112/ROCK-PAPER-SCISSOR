let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s'); 


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber ]
}

function convertToWord (letter){
    if(letter ==='r') return "Rock";
    if(letter ==='p') return "Paper";
    return "Scissor"
}

function wins(userChoice , computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. YOU WIN`;
}

function draw(){
    console.log("draw");
}

function lose(){
    //computerScore++;
}




function game(userChoice){
    const computerChoice = getComputerChoice();
    if ((userChoice == 'r' && computerChoice == 's' ) ||
        (userChoice == 'p' && computerChoice == 'r') ||
        (userChoice == 's' && computerChoice == 'p')){

            wins(userChoice, computerChoice); 
        }
    else if (userChoice === computerChoice){
        
        draw(userChoice, computerChoice);
    }
    else if ((userChoice == 'r' && computerChoice == 'p' ) ||
    (userChoice == 'p' && computerChoice == 's') ||
    (userChoice == 's' && computerChoice == 'r')){

        lose(userChoice, computerChoice);
    }

}

function main(){
    rock_div.addEventListener('click',function(){
    game('r');
    })

    paper_div.addEventListener('click',function(){
    game('p');
    })

    scissor_div.addEventListener('click',function(){
    game('s');
    })
}

main();


