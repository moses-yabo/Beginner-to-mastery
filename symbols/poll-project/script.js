const results = document.querySelector('#results');
const pollForm = document.querySelector('#poll-form');
console.log(pollForm);

const pollOptions = new Map();
pollOptions.set('React', 0);
pollOptions.set('Vue', 0);
pollOptions.set('Svelte', 0);
pollOptions.set('Angular', 0);
pollOptions.set('Other', 0);
function displayResults() {
  results.innerHTML = '';
  for (const [option, votes] of pollOptions) {
    const optionEl = document.createElement('div');
    optionEl.classList.add(
      'border-bottom',
      'p-2',
      'd-flex',
      'justify-content-between'
    );
    optionEl.innerHTML = `<strong>${option} :</strong> ${votes}`;
    results.appendChild(optionEl);
  }
}
function submitForm(e) {
  e.preventDefault();
  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );
  const voteCount = pollOptions.get(selectedOption.value);

  pollOptions.set(selectedOption.value, voteCount + 1);
  displayResults();
  pollForm
    .querySelectorAll('input,button')
    .forEach((el) => el.setAttribute('disabled', 'true'));
}
pollForm.addEventListener('submit', submitForm);
