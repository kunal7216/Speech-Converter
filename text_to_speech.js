let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector(".lang-select");

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = ''; // Clear existing options

  console.log("Available voices:", voices);

  voices.forEach((voice, i) => {
    const lang = voice.lang;
    if (lang.startsWith('hi') || lang.startsWith('ta') || 
        lang.startsWith('te') || lang.startsWith('gu') || 
        lang.startsWith('bn') || lang.startsWith('ml') || 
        lang.startsWith('mr')) { // Filtering for Indian languages
      console.log(`Adding voice: ${voice.name} (${voice.lang})`);
      let option = new Option(`${voice.name} (${voice.lang})`, i);
      voiceSelect.options.add(option);
    }
  });

  if (voices.length > 0 && voiceSelect.options.length > 0) {
    speech.voice = voices[voiceSelect.selectedIndex];
  }
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

document.querySelector(".bt1").addEventListener("click", () => {
  speech.text = document.querySelector(".txt").value;
  window.speechSynthesis.speak(speech);
});

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
