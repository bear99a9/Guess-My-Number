'use strict';
// Query Selectors
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // no number inputed
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }

  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when players guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Your guess was too High 📈'
          : 'Your guess was too Low 📉';
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😢';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
