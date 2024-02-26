function addTask() {
    var newTaskInput = document.getElementById("new-task");
    var taskText = newTaskInput.value;
  
    if (taskText.trim() === "") {
      alert("Please enter a task!");
      return;
    }
  
    var todoList = document.getElementById("todo-list");
  
    var li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;
  
    todoList.appendChild(li);
  
    newTaskInput.value = "";
  }
  
  function removeTask(button) {
    var listItem = button.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
  }
  