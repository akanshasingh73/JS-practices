let startTime,
  eplasedTime = 0,
  running = false,
  timerInterval;

function start() {
  if (running) return;
  running = true;
  startTime = Date.now() - eplasedTime;
  timerInterval = setInterval(update, 10);
}

function stop() {
  if (!running) return;
  running = false;
  clearInterval(timerInterval);
}

function reset() {
  running = false;
  clearInterval(timerInterval);
  document.getElementById('display').textContent = '00:00:00';
  eplasedTime = 0;
}

function update() {
  eplasedTime = Date.now() - startTime;
  document.getElementById('display').textContent = format(eplasedTime);
}

function format(ms) {
  const mintues = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10);

  return (
    String(mintues).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0') +
    ':' +
    String(milliseconds).padStart(2, '0')
  );
}
