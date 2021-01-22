const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const scoreCount1 = document.querySelectorAll('span')[0];
const scoreCount2 = document.querySelectorAll('span')[1];
const scoreOption = document.querySelector('#scoreOption');

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

btn1.addEventListener('click', () => {
    // if game is not over let this happen
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
        }
        scoreCount1.textContent = p1score;
        // text content and innerText does the same thing
    }
});

btn2.addEventListener('click', () => {

    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true;
        }
        scoreCount2.textContent = p2score;
    }
})

scoreOption.addEventListener('change', () => {
    winningScore = parseInt(this.value);
    // parseInt here is turning the options values from strings to int
    startAgain();
});


btn3.addEventListener('click', startAgain)
// reset button function has been done on the bottom so we can just pass it next to rest instead 

// function to restart the game
function startAgain() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    scoreCount1.textContent = 0;
    scoreCount2.textContent = 0;
}
