// game values
let min = 1;
let max = 10;
let winningNum = 5;
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
        setMessage(`Congrats!! You Won`, 'green', 'green');
        hint(5)
        console.log(guess)
    }else{
        guessesLeft -= 1;
        // checking how many guesses left
        chances(guessesLeft);
        // giving user a hint
        hint(guess);
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
        hints.textContent = `Press 'Play Again' for another round`;
        hints.style.color = 'green';
    }
}

// function to check how many guesses left
function chances(guessesLeft){
    if(guessesLeft <= 0){
        setMessage(`Wrong Answer!! You've lost`, 'red', 'red');
        guessInput.disabled = true;
    }else{
        setMessage(`Wrong Answer!! You've ${guessesLeft} guesses left`, 'red', 'red');
    }
}

function setMessage(msg, color){
    guessInput.style.borderColor = color
    message.style.color = color;
    message.textContent = msg;
}