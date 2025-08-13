const form = document.querySelector('#form');
const textInput = document.querySelector('#text-input');
const select = document.querySelector('#voice-select');
const synth = window.speechSynthesis;
let voices;
const addVoicesToSelect = () => {
  voices = synth.getVoices();
  for (let index = 0; index < voices.length; index++) {
    const voice = voices[index];
    const txtVoice = document.createTextNode(voice.name);
    const option = document.createElement('option');
    option.appendChild(txtVoice);
    if (voice.default) {
      option.textContent += ' - DEFAULT';
    }
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('value', voice.name);
    select.appendChild(option);
  }
};

const onSubmit = (e) => {
  e.preventDefault();
  const utterThis = new SpeechSynthesisUtterance(textInput.value);
  const selectedOption = select.selectedOptions[0].value;
  synth.speak(utterThis);
  //   textInput.value = '';
  console.log(selectedOption);

  for (let index = 0; index < voices.length; index++) {
    const voice = voices[index];
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
};

addVoicesToSelect();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = addVoicesToSelect;
}
form.addEventListener('submit', onSubmit);
