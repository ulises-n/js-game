let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  ties : 0,
  losses : 0
};

updateScoreElement();

greet();

function playGame(playerMove){
  const computerMove = pickComputerMove();
  
  let result = '';

  if (playerMove === 'scissors')
  {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors'){
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if(playerMove === 'rock') {
    if(computerMove === 'rock'){
      result = 'Tie.';
    }else if(computerMove === 'paper'){
      result = 'You lose.';
    }else{
      result = 'You win.';
    } 
  }

  if(result === 'You win.'){
    score.wins += 1;
  }else if(result === 'Tie.') {
    score.ties += 1;
  }else if(result === 'You lose.') {
    score.losses += 1;
  }

  updateScoreElement();

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result')
    .innerHTML = result;
  
  document.querySelector('.js-moves')
    .innerHTML = `You <img src="/images/${playerMove}-emoji.png" alt="" class="move-icon"> <img src="/images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
  }

  function pickComputerMove () {
    const randomNumber = Math.random();
      
    let computerMove = '';
  
    if(randomNumber >= 0 && randomNumber < 1 / 3){
      computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else {
      computerMove = 'scissors';
    }
    return computerMove;
  }
  function greet() {
    let name = prompt('Hola, Escribe tu nombre...');
    document.querySelector('.js-result')
      .innerHTML = `Hey, ${name} : ) , prueba tu suerte!`; 
    if(!name){
      document.querySelector('.js-result')
      .innerHTML = `Prueba tu suerte persona misteriosa...`; 
    }
  }

  
