'use strict';
// Query Selectors
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        'Your guess was too High 📈';
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        'Your guess was too Low 📉';
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});
