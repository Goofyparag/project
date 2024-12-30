document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Add task
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    // Add task on pressing Enter
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTaskBtn.click();
      }
    });
  
    // Add task to the list
    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  });