const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  console.error('Speech Recognition API not supported in this browser');
} else {
  const rec = new SpeechRecognition();
  rec.lang = 'en-ZA';
  rec.continuous = false;

  rec.onresult = function (e) {
    console.log(e.results);
  };

  rec.onerror = function (e) {
    console.error('Speech recognition error:', e.error);
  };

  rec.start();
}
