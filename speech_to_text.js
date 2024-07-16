
 //Ensure SpeechRecognition is available
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    alert('Speech Recognition is not supported in this browser.');
    throw new Error('Speech Recognition is not supported in this browser.');
}

const recognition = new SpeechRecognition();
recognition.continuous = false;

recognition.onresult = function(event) {
    const result = event.results[0][0].transcript;
    document.querySelector('.txt').value = result;
};

recognition.onerror = function(event) {
    console.error('Speech recognition error detected: ' + event.error);
};

document.querySelector('.bt').addEventListener('click', function() {
    recognition.lang = 'en-US';  // You can set a default language or make this dynamic as needed
    recognition.start();
});
