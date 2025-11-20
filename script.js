document.addEventListener("DOMContentLoaded", () => {
  console.log("Jeu 'Cliquer sur la balle' initialisé !");

  const ball = document.getElementById('ball');
  const gameContainer = document.getElementById('game-container');
  let scoreDisplay = document.getElementById('score');
  let timeDisplay = document.getElementById('time');

  let playButton = document.querySelector('.glow-on-hover') ||
                   document.getElementById('play') ||
                   document.querySelector('[data-action="play"]') ||
                   Array.from(document.querySelectorAll('button')).find(b => /play/i.test(b.textContent));

  if (!scoreDisplay) {
    scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'score';
    scoreDisplay.style.margin = '8px';
    scoreDisplay.textContent = 'Score: 0';

    const header = document.querySelector('header') || document.body;
    header.insertBefore(scoreDisplay, header.firstChild);
  }

  if (!timeDisplay) {
    timeDisplay = document.createElement('div');
    timeDisplay.id = 'time';
    timeDisplay.style.margin = '8px';
    timeDisplay.textContent = 'Time: 30s';

    if (scoreDisplay.parentNode) {
      scoreDisplay.parentNode.insertBefore(timeDisplay, scoreDisplay.nextSibling);
    } else {
      document.body.appendChild(timeDisplay);
    }
  }

  let score = 0;
  let timeLeft = 30;
  let timerInterval = null;
  let gameActive = false;

  function updateDisplays() {
    if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
    if (timeDisplay) timeDisplay.textContent = `Time: ${timeLeft}s`;
  }

  function moveBall() {
    if (!gameContainer || !ball) return;
    const maxX = Math.max(0, gameContainer.clientWidth - ball.clientWidth);
    const maxY = Math.max(0, gameContainer.clientHeight - ball.clientHeight);
    const x = Math.floor(Math.random() * (maxX + 1));
    const y = Math.floor(Math.random() * (maxY + 1));
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
  }

  function endGame() {
    clearInterval(timerInterval);
    timerInterval = null;
    gameActive = false;
    if (ball) ball.style.display = 'none';
    if (playButton) playButton.disabled = false;
    alert(`Game Over! Your final score is: ${score}`);
    updateDisplays();
  }

  function startGame() {
    if (gameActive) return;
    gameActive = true;
    score = 0;
    timeLeft = 30;
    updateDisplays();
    if (ball) {
      ball.style.display = 'block';
      moveBall();
    }
    if (playButton) playButton.disabled = true;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      updateDisplays();
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  if (ball) {
    ball.addEventListener('click', () => {
      if (!gameActive) return;
      score++;
      updateDisplays();
      moveBall();
    });
  }

  if (playButton) {
    playButton.addEventListener('click', startGame);
  } else {
    document.addEventListener('click', (e) => {
      const t = e.target;
      if (t && /play/i.test((t.textContent || '').trim())) startGame();
    });
  }

  updateDisplays();
  
});

