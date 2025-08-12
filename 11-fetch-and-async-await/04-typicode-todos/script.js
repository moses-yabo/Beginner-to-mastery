const typiCodeForm = document.querySelector('#todo-form');
const input = document.querySelector('input');
const todosContainer = document.querySelector('#todo-list');
const URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = async () => {
  try {
    const response = await fetch(URL + '?_limit=10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    data.forEach((el) => {
      addEl(el);
    });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTodos = async (e) => {
  console.log('on Dobbule click');

  const todoId = e.target.dataset.id;

  if (confirm('Are you sure you want to delete this ?')) {
    try {
      const response = await fetch(URL + `/${todoId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      e.target.remove();
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  }
};
const onSubmit = async (e) => {
  e.preventDefault();
  if (input.value === '') return;
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        title: input.value,
        completed: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(input.value);

    addEl(input.value);
    input.value = '';
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw new Error(error);
  }
};

const onStateChange = async (e) => {
  let isCompleted;

  const dataId = e.target.getAttribute('data-id');
  console.log(e.target.dataset.id);
  if (e.target.classList.contains('todo')) {
    isCompleted = e.target.classList.toggle('done');
  }

  try {
    const response = await fetch(URL + `/${dataId}`, {
      method: 'PUT',
      body: JSON.stringify({
        completed: isCompleted,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw new Error(error);
  }
};

function addEl(value) {
  const text = document.createTextNode(value.title || value);
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(text);
  todosContainer.appendChild(div);

  div?.setAttribute('data-id', value.id || 101);
  console.log(value?.id);
  if (value.completed) {
    div.classList.toggle('done');
  }
}

todosContainer.addEventListener('click', onStateChange);
typiCodeForm.addEventListener('submit', onSubmit);
todosContainer.addEventListener('dblclick', deleteTodos);
document.addEventListener('DOMContentLoaded', getTodos);
