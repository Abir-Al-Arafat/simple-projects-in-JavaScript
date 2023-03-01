// game values
let min = 10;
let max = 20;
let winningNum = randomNum(min, max);
let guessesLeft = 3;

// UI elements
const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const message = document.querySelector('.message');
const hints = document.querySelector('.hint');

// Assign maximum and minimum value in the UI
minNum.textContent = min;
maxNum.textContent = max;

// play again functionality
game.addEventListener('mousedown', reloadPage);

// guess button funtionality
guessBtn.addEventListener('click', function(){
    let guess = guessInput.value;

    // validation
    if(isNaN(guess) || guess < min || guess > max){
        // setting message and colors
        setMessage(`Please enter a number between ${min} and ${max}`, 'red', 'red');
    }

    // winning condition
    if (guess == winningNum){
        // disabling input field
        guessInput.disabled = true;
        // guessBtn.textContent = 'play again';
        // setting message and colors
        setMessage(`Congrats!! You've guessed the correct answer`, 'green', 'green');
        hint(guess)
        guessBtn.value = 'Play Again';
        guessBtn.className = 'play-again';
    }else{
        guessesLeft -= 1;
        // giving user a hint
        hint(guess);
        // checking how many guesses left
        chances(guessesLeft);
        guessInput.value = '';
    }
})

// function to give user hints
function hint(guess){
    if (guess < winningNum){
        hints.textContent = `Answer is too low`;
        hints.style.color = 'red';
    }else if (guess > winningNum){
        hints.textContent = `Answer is too high`;
        hints.style.color = 'red';
    }else{
        hints.textContent = `Press 'PLAY AGAIN' for another round`;
        hints.style.color = 'green';
        guessBtn.value = 'Play Again'
        guessBtn.className = 'play-again';
    }
}

// function to check how many guesses left
function chances(guessesLeft){
    if(guessesLeft <= 0){
        setMessage(`You've lost. The correct number was ${winningNum}`, 'red', 'red');
        guessInput.disabled = true;

        guessBtn.value = 'Play Again'
        guessBtn.className = 'play-again';
        hints.textContent = `Press 'PLAY AGAIN' for another round`;
        hints.style.color = 'green';
        
    }else{
        setMessage(`Wrong Answer!! You've ${guessesLeft} guesses left`, 'red', 'red');
    }
}

// sets message and color
function setMessage(msg, color){
    guessInput.style.borderColor = color
    message.style.color = color;
    message.textContent = msg;
}

// returns random number
function randomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// reloads page
function reloadPage(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
}