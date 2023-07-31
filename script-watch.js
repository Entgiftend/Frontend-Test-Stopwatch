// Stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Get elements from the DOM
const display = document.getElementById('display');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Format time as HH:MM:SS
function formatTime(time) {
    const hours = Math.floor(time / (60 * 60 * 1000)).toString().padStart(2, '0');
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, '0');
    const seconds = Math.floor((time % (60 * 1000)) / 1000).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    startButton.disabled = true;
}

// Stop the stopwatch
function stop() {
    clearInterval(timerInterval);
    startButton.disabled = false;
}

// Reset the stopwatch
function reset() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    elapsedTime = 0;
    startButton.disabled = false;
}

// Update the stopwatch time
function updateTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

// Event listeners for buttons
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
