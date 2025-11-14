document.addEventListener("DOMContentLoaded", () => {
  console.log("Jeu 'Cliquer sur la balle' initialisé !");
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Jeu 'Cliquer sur la balle' initialisé !");

  const ball = document.getElementById('ball');
  const gameContainer = document.getElementById('game-container');
  const scoreDisplay = document.getElementById('score');
  let score = 0;
  function moveBall() {
    const maxX = gameContainer.clientWidth - ball.clientWidth;
    const maxY = gameContainer.clientHeight - ball.clientHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
  }
  ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveBall();
  });
  moveBall();
  
});
