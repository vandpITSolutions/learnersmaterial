const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '✅';
  completeBtn.title = 'Mark as done';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.title = 'Delete task';
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(actions);
  list.appendChild(li);

  input.value = '';
});
s