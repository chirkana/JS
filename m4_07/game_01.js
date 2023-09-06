'use strict';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);

const playGame = () => {
  let playerAnswer = +prompt(`Я загадал число от 1 до 100. Попробуй его угадать. Ввведи свой вариант:`);

  while (playerAnswer !== randomNumber) {
    if (Number.isNaN(playerAnswer)) {
      alert(`Введи число!`);
      playerAnswer = +prompt(`Попробуй ещё раз!`);
    }

    if (playerAnswer > randomNumber && playerAnswer !== null && playerAnswer !== 0) { 
      alert(`Меньше!`);
      playerAnswer = +prompt(`Попробуй ещё раз!`);
    }
  
    if (playerAnswer < randomNumber && playerAnswer !== null && playerAnswer !== 0) {
      alert(`Больше!`);
      playerAnswer = +prompt(`Попробуй ещё раз!`);    //если здесь убрать !== 0, при нажатии "Отмена", выводит "Больше"
    }
  
    if (playerAnswer === randomNumber) {
      alert(`Правильно!`);
    }

    if (playerAnswer === null) {
      alert(`Game Over`);                   // почему не выводит alert?
    }
  }
};

playGame();

// как сделать, чтобы, когда игрок вводит 0, всплывало "Больше"?
