const form = document.querySelector('#item-form');

function onSubmit(e) {
  e.preventDefault();
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority').value;
  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const item = formData.get('item');
  const priority = formData.get('priority-input');
  const entries = formData.entries();
  const myForm = [...entries];

  console.log(myForm);
}
form.addEventListener('submit', onSubmit2);
