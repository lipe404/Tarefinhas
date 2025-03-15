// Captura dos elementos HTML principais
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Adiciona evento de clique no botão "Adicionar"
addButton.addEventListener('click', addTask);

// Permite adicionar a tarefa ao pressionar "Enter" enquanto o input está focado
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evita o envio do formulário
    addTask();
  }
});

/**
 * Função para adicionar uma nova tarefa à lista
 */
function addTask() {
  const taskText = taskInput.value.trim(); // Remove espaços extras no início e no fim

  // Validação: impede que tarefas vazias sejam adicionadas
  if (taskText === '') {
    alert('Por favor, insira uma tarefa!');
    return;
  }

  // Criando o item da lista (li)
  const li = document.createElement('li');

  // Criando o span que contém o texto da tarefa
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Criando o botão de conclusão
  const doneButton = document.createElement('button');
  doneButton.classList.add('done');
  doneButton.setAttribute('aria-label', 'Marcar tarefa como concluída');
  doneButton.innerHTML = '<strong>✔</strong>'; // Alterado para um check ✔ ao invés de "Ok"

  // Criando o botão de exclusão
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.setAttribute('aria-label', 'Excluir tarefa');
  deleteButton.innerHTML = '<strong>🗑</strong>'; // Alterado para um ícone de lixeira

  // Evento para marcar a tarefa como concluída
  doneButton.addEventListener('click', function() {
    li.classList.toggle('done');
  });

  // Evento para excluir a tarefa
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  // Adicionando os elementos ao item da lista
  li.appendChild(taskSpan);
  li.appendChild(doneButton);
  li.appendChild(deleteButton);

  // Adicionando o item à lista
  taskList.appendChild(li);

  // Limpa o campo de entrada e foca nele para uma nova tarefa
  taskInput.value = '';
  taskInput.focus();
}
