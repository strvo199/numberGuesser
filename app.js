//define var;
let min = 1,
    max = 10,
    guessesLeft = 3,
    winningNum = getRandom(min, max); 

    //define UI's;

const game = document.querySelector('#game'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      maxNum = document.querySelector('.max-num'),
      message = document.querySelector('.message'),
      minNum = document.querySelector('.min-num');


//Assign minNUm and maxNum
minNum.textContent = min;
maxNum.textContent = max;

//listen to play again
game.addEventListener('mousedown' ,function (e) {
    if (e.target.className ==='play-again') {
       window.location.reload()
    }
})

//listen to Submit

guessBtn.addEventListener('click',function () {
     guess = parseInt(guessInput.value)
    //when guess is null;
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please guesses must be between ${min} and ${max}.`,'red')
    }

    //guess is won
    if (guess === winningNum) {
        gameOver(true,`${guess} is coorect. YOU WIN!`)
    } else {
        guessesLeft -= 1
        if (guessesLeft === 0) {
            gameOver(false,`${guess} is wrong. YOU LOSE!`)
        } else {
            
            setMessage(`${guess} is wrong, you have ${guessesLeft} guesses Left`,'red')
            guessInput.value ='';
        }
    }
})



//gameOver

function gameOver(won,msg) {
    let color;
    won === true ? color = 'green' : color = 'red'
    guessInput.disabled = true;
    guessInput.style.borderColor= color
    message.style.color = color;
    setMessage(msg) 

    //play again
    guessBtn.value= 'PLAY AGAIN ';
    guessBtn.className += 'play-again'
}



//setMessage
function setMessage(msg,color) {
    message.textContent =msg;
    message.style.color = color;
}

function getRandom(min, max) {
   return (Math.floor(Math.random()*(max - min + 1)+ min))
}