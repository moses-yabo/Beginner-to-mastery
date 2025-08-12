const ul = document.querySelector('.items');
//QUICK & DIRTY
function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `
            ${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
  `;
  ul.appendChild(li);
}
createListItem('akazi');
//CLEAN & PERFOMANT
function AddItem(textContent) {
  const li = document.createElement('li');
  li.className = 'item';
  const text = document.createTextNode(textContent);
  li.appendChild(text);
  const button = document.createElement('button');
  button.classList.add('remove-item', 'btn-link', 'text-red');
  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-xmark');
  button.appendChild(icon);

  li.appendChild(button);
  ul.appendChild(li);
}
AddItem('AMASI');
AddItem('UMNGQUSHO');
AddItem('MANGO');
