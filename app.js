// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const scoreCounting1 = document.querySelectorAll('span')[0];
// const scoreCounting2 = document.querySelectorAll('span')[1];
// const scoreOptioning1 = document.querySelectorAll('#scoreOption')[0];

// let p1score = 0;
// let p2score = 0;
// let winningScore = 5;
// let isGameOver = false;

// btn1.addEventListener('click', () => {
//     // if game is not over let this happen
//     if (!isGameOver) {
//         p1score += 1;
//         if (p1score === winningScore) {
//             isGameOver = true;
//             scoreCounting1.classList.add('has-text-success');
//             scoreCounting2.classList.add('has-text-danger');
//             btn1.disabled = true;
//             btn2.disabled = true;

//         // dissables the button when game is over
//         }
//         scoreCounting1.textContent = p1score;
//         // text content and innerText does the same thing
//     }
// })

// btn2.addEventListener('click', function () {

//     if (!isGameOver) {
//         p2score += 1;
//         if (p2score === winningScore) {
//             isGameOver = true;
//             scoreCounting2.classList.add('has-text-success');
//             scoreCounting1.classList.add('has-text-danger');
//             btn1.disabled = true;
//             btn2.disabled = true;

//         }
//         scoreCounting2.textContent = p2score;
//     }
// })

// scoreOptioning1.addEventListener('change', function () {
//    winningScore = parseInt(this.value);
//     // parseInt here is turning the options values from strings to int
//     startAgain();
// })


// btn3.addEventListener('click', startAgain)
// // reset button function has been done on the bottom so we can just pass it next to rest instead 

// // function to restart the game
// function startAgain() {
//     isGameOver = false;
//     p1score = 0;
//     p2score = 0;
//     scoreCounting1.textContent = 0;
//     scoreCounting2.textContent = 0;
//     scoreCounting2.classList.remove('has-text-success', 'has-text-danger');
//     scoreCounting1.classList.remove('has-text-danger', 'has-text-success');
//     btn1.disabled = false;
//     btn2.disabled = false;

//     // undissabled the buttons to false so players can play


// }

// rewritting new code////////////////////////////////////////
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#scoreCount1')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#scoreCount2')
}
const btn3 = document.querySelector('#btn3');
const scoreOptioning1 = document.querySelectorAll('#scoreOption')[0];
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {

    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;

            // dissables the button when game is over
        }
        player.display.textContent = player.score;
        // text content and innerText does the same thing
    }
}
function startAgain() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // undissabled the buttons to false so players can play
}
p1.button.addEventListener('click', () => {
    // if game is not over let this happen
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
});
scoreOptioning1.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    // parseInt here is turning the options values from strings to int
    startAgain();
})
btn3.addEventListener('click', startAgain)