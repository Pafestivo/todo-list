import Project from "./createProject";

let activatedProject = {name: 'No Project Selected', id: 'Default ID'}



const title = document.getElementById('project-title-h');
const addTaskBtn = document.getElementById('add-task-btn');
const deleteFormBtn = document.getElementById('delete-project');


function addProject() {
  const newProjectInput = document.getElementById('new-project-input');
  const projectList = document.getElementById('projects-list');
  const projectName = newProjectInput.value;

  const newProject = new Project(projectName);
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = newProject.name;
  projectTitle.id = newProject.id;
  projectTitle.addEventListener('click', () => {
    changeActiveProject(newProject)
    deleteFormBtn.classList.remove('hidden')
    addTaskBtn.classList.remove('hidden')
  })
  projectList.appendChild(projectTitle);
}

function changeActiveProject(activeProject) {
  activatedProject = activeProject;
  title.textContent = activatedProject.name;
  refreshToDos();
}

function updateProjectDetails() {
  const activatedProjectTitle = document.getElementById(activatedProject.id);
  if (activatedProjectTitle) {
    activatedProjectTitle.textContent = activatedProject.name;
  }
  title.textContent = activatedProject.name;
}

function deleteProject() {
  const activatedProjectTitle = document.getElementById(activatedProject.id);
  activatedProjectTitle.remove();
  activatedProject = {name: 'No Project Selected'};
  updateProjectDetails();
  deleteFormBtn.classList.add('hidden');
  addTaskBtn.classList.add('hidden');
}

function applyRename() {
  if(activatedProject.id !== 'Default ID') {
    const renameInput = document.getElementById('change-name-input');
    activatedProject.setName(renameInput.value);
    return true;
  }
}

// todos

function addTodo() {
  const taskTitle = document.getElementById('task-title');
  const taskDescription = document.getElementById('task-description');
  const taskUrgency = document.getElementById('urgency');
  const taskDateField = document.getElementById('due-date');

  if(taskTitle.value !== "" &&
  taskDescription.value !== "" && 
  taskDateField.value !== "") // if no field is empty
  {
    // create todo for the current project
    activatedProject.addTodo(taskTitle.value, taskDescription.value, taskUrgency.value, taskDateField.value)
    refreshToDos();
  } else alert("Form wasn't filled properly - No task was added");
}

function deleteTodo(id) {
  activatedProject.removeTodo(id);
  refreshToDos();
}

function refreshToDos() {
  const todosContainer = document.getElementById('todos-container');
  todosContainer.textContent = "";

  activatedProject.getTodos().forEach(todo => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('task-div', `${todo.priority.toLowerCase()}-urg`);
    todoContainer.id = todo.id;

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');

    const emptyCircle = document.createElement('i');
    const checkedCircle = document.createElement('i');
    const todoTitle = document.createElement('p');
    emptyCircle.classList.add('btn', 'fa-regular', 'fa-circle');
    checkedCircle.classList.add('btn', 'fa-regular', 'fa-circle', 'hidden');
    todoTitle.classList.add('task-title');
    todoTitle.textContent = todo.name;
    taskName.append(emptyCircle, checkedCircle, todoTitle);

    const dueDate = document.createElement('p');
    dueDate.classList.add('due-date');
    dueDate.textContent = todo.dueDate.split("-").reverse().join("-");// reverse the date string

    const priority = document.createElement('p');
    priority.classList.add('priority');
    priority.textContent = todo.priority;

    const todoActions = document.createElement('div');
    const editBtn = document.createElement('i');
    const deleteBtn = document.createElement('i');
    todoActions.classList.add('task-actions');
    editBtn.classList.add('btn', 'fa-regular', 'fa-pen-to-square');
    deleteBtn.classList.add('btn', 'fa-solid', 'fa-trash');
    deleteBtn.addEventListener('click', () => {
      deleteTodo(todo.id);
    })
    todoActions.append(editBtn, deleteBtn);

    todoContainer.append(taskName, dueDate, priority, todoActions);
    todosContainer.appendChild(todoContainer);
  });
}

export { addProject, updateProjectDetails, deleteProject, applyRename, addTodo }
