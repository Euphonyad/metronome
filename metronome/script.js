let tempoInput = document.getElementById('tempo');
let measuresInput = document.getElementById('measures');
let timeSignatureInput = document.getElementById('time-signature');
let startStopButton = document.getElementById('start-stop');
let measureElement = document.getElementById('measure');
let beatElement = document.getElementById('beat');

let isPlaying = false;
let currentMeasure = 1;
let currentBeat = 1;
let tempo = 120;
let timeSignature = 4;
let numMeasures = 4;
let beatInterval;
let beatDuration;

// Update the metronome based on input values
function updateMetronome() {
  tempo = parseInt(tempoInput.value);
  numMeasures = parseInt(measuresInput.value);
  timeSignature = parseInt(timeSignatureInput.value);

  beatDuration = 60000 / tempo; // In milliseconds
  displayMetronome();
}

// Display the current measure and beats
function displayMetronome() {
  measureElement.innerHTML = currentMeasure; // Display measure
  beatElement.innerHTML = currentBeat; // Display beat
}

// Start/Stop the metronome
function startStopMetronome() {
  if (isPlaying) {
    clearInterval(beatInterval);
    startStopButton.innerHTML = 'Start';
  } else {
    beatInterval = setInterval(playBeat, beatDuration);
    startStopButton.innerHTML = 'Stop';
  }
  isPlaying = !isPlaying;
}

// Play a beat and update the measure/beat count
function playBeat() {
  displayMetronome();

  if (currentBeat < timeSignature) {
    currentBeat++;
  } else {
    currentBeat = 1;
    if (currentMeasure < numMeasures) {
      currentMeasure++;
    } else {
      currentMeasure = 1;
    }
  }
}

// Event listeners
tempoInput.addEventListener('input', updateMetronome);
measuresInput.addEventListener('input', updateMetronome);
timeSignatureInput.addEventListener('input', updateMetronome);
startStopButton.addEventListener('click', startStopMetronome);

// Initialize metronome
updateMetronome();
