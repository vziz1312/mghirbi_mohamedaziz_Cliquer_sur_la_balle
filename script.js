document.addEventListener("DOMContentLoaded", () => {
  console.log("Jeu 'Cliquer sur la balle' initialisé !");

  const ball = document.getElementById('ball');
  const gameContainer = document.getElementById('game-container');
  let scoreDisplay = document.getElementById('score');
  let timeDisplay = document.getElementById('time');
  const timeSelect = document.getElementById('time-select');

  if (ball) ball.style.display = 'none';

  if (!scoreDisplay) {
    scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'score';
    scoreDisplay.style.margin = '8px';
    document.body.insertBefore(scoreDisplay, document.body.firstChild);
  }
  if (!timeDisplay) {
    timeDisplay = document.createElement('div');
    timeDisplay.id = 'time';
    timeDisplay.style.margin = '8px';
    document.body.insertBefore(timeDisplay, scoreDisplay.nextSibling);
  }

  const playButton = document.querySelector('.glow-on-hover') ||
                     document.getElementById('play') ||
                     document.querySelector('[data-action="play"]') ||
                     Array.from(document.querySelectorAll('button')).find(b => /play/i.test(b.textContent));

  function getInitialTime() {
    if (!timeSelect) return 30;
    const v = parseInt(timeSelect.value, 10);
    return Number.isFinite(v) && v > 0 ? v : 30;
  }
  function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
  let score = 0;
  let timeLeft = getInitialTime();
  let timerInterval = null;
  let gameActive = false;
  function updateDisplays() {
    if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
    if (timeDisplay) timeDisplay.textContent = `Time: ${formatTime(timeLeft)}`;
  }
  if (timeSelect) {
    timeSelect.addEventListener('change', () => {
      if (!gameActive) {
        timeLeft = getInitialTime();
        updateDisplays();
      }
    });
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
    timeLeft = getInitialTime();
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
  timeLeft = getInitialTime();
  updateDisplays();
});

