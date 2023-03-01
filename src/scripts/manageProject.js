import Project from "./createProject";
import { defaultProject } from "./defaultProject";

let activatedProject = defaultProject;

const title = document.getElementById('project-title-h');
const addTaskBtn = document.getElementById('add-task-btn');
const deleteFormBtn = document.getElementById('delete-project');
const todosContainer = document.getElementById('todos-container');
const AddTaskOverlay = document.getElementById('add-task-overlay');
const taskFormH1 = document.getElementById('task-form-h1');
const taskIdHolder = document.getElementById('taskID');
const submitTask = document.getElementById('submit-task');
const newProjectInput = document.getElementById('new-project-input');
const recycleBin = document.getElementById('recycle-bin');
const restoreProjectBtn = document.getElementById('restore-project');
const projectList = document.getElementById('projects-list');
const recycleCount = document.getElementById('recycle-count');

function addProject() {
  const projectName = newProjectInput.value;

  if(newProjectInput.value !== "") {
    const newProject = new Project(projectName);
    addProjectToSidebar(newProject)
  } else alert("Empty projects can't be added");
}

function addProjectToSidebar(newProject) {
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = newProject.name;
  projectTitle.id = newProject.id; // give the sidebar title same id as the project
  projectTitle.addEventListener('click', () => {
    changeActiveProject(newProject);
    deleteFormBtn.classList.remove('hidden');
    addTaskBtn.classList.remove('hidden');
    restoreProjectBtn.classList.add('hidden');
    const activatedProjectTitle = document.getElementById(activatedProject.id);
    if(activatedProjectTitle.parentElement === recycleBin) {
      restoreProjectBtn.classList.remove('hidden');
      addTaskBtn.classList.add('hidden');
    }
  })
  projectList.appendChild(projectTitle);
}

function changeActiveProject(activeProject) {
  activatedProject = activeProject;
  title.textContent = activatedProject.name;
  refreshToDos();
}

function updateProjectDetails() {
  const activatedProjectTitle = document.getElementById(activatedProject.id); // the title of the activated project in sidebar
  if (activatedProjectTitle) {// if it has a sidebar title
    activatedProjectTitle.textContent = activatedProject.name;
  }
  title.textContent = activatedProject.name; // the title in the main area
}

function deleteProject() {
  const activatedProjectTitle = document.getElementById(activatedProject.id);

  if(activatedProjectTitle.parentElement === recycleBin) { // if it's already in recycle bin
    activatedProjectTitle.remove(); // remove completely
    recycleCount.textContent = recycleBin.childElementCount; // update the recycle counter
  }
  else {
    recycleBin.appendChild(activatedProjectTitle); // move to recycle bin
    recycleCount.textContent = recycleBin.childElementCount; // update the recycle counter
  }
  activatedProject = {name: 'No Project Selected', id: 'no-project'}; // set active project to no project
  updateProjectDetails();
  todosContainer.textContent = ""; // reset todos
  deleteFormBtn.classList.add('hidden');
  addTaskBtn.classList.add('hidden');
  restoreProjectBtn.classList.add('hidden');
}

function applyRename() {
  if(activatedProject.id !== 'no-project') {
    const renameInput = document.getElementById('change-name-input');
    if(renameInput.value !== "") activatedProject.setName(renameInput.value);
    else alert("Project name can't be empty");
  }
}

function isRenameAvailable() {
  if(activatedProject.id !== 'no-project') return true;
}

function restoreProject() {
  const activatedProjectTitle = document.getElementById(activatedProject.id);

  projectList.appendChild(activatedProjectTitle);
  recycleCount.textContent = recycleBin.childElementCount; // update the recycle counter
  restoreProjectBtn.classList.add('hidden');
}





// TODOS

function addTodo() {
  const taskTitle = document.getElementById('task-title');
  const taskDescription = document.getElementById('task-description');
  const taskUrgency = document.getElementById('urgency');
  const taskDateField = document.getElementById('due-date');

  if (taskTitle.value !== "" && taskDescription.value !== "" ) {// if no field is empty    

    if(AddTaskOverlay.id === "editTodo") { // we're editing a todo
      const selectedTask = activatedProject.getTodo(taskIdHolder.id);
      selectedTask.setName(taskTitle.value);
      selectedTask.setDescription(taskDescription.value);
      selectedTask.setPriority(taskUrgency.value);
      if(taskDateField.value !== "") {
        selectedTask.setDueDate(taskDateField.value);
      } else selectedTask.setDueDate('No DueDate');
      refreshToDos();

    } else if (AddTaskOverlay.id === "add-task-overlay") { // we're adding a todo
      // create todo for the current project
      if(taskDateField.value === "") {
        activatedProject.addTodo(taskTitle.value, taskDescription.value, taskUrgency.value, 'No DueDate')
      } else activatedProject.addTodo(taskTitle.value, taskDescription.value, taskUrgency.value, taskDateField.value)
      refreshToDos();
      }
  } else alert("Form wasn't filled properly - No action was taken"); // if inputs are empty 
}


function deleteTodo(id) {
  if(activatedProject.name === 'Click the title to rename!') {
    alert("It's usually advised to read the instructions, rather than deleting them...");
  } else {
    activatedProject.removeTodo(id);
    refreshToDos();
  }
}

function refreshToDos() {
  todosContainer.textContent = "";

  activatedProject.getTodos().forEach(todo => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('task-div', `${todo.priority.toLowerCase()}-urg`);
    todoContainer.id = todo.id;
    todoContainer.addEventListener('click', (e) => {
      if(!e.target.classList.contains('btn')) { // if todo clicked, open edit page
        const taskTitle = document.getElementById('task-title');
        const taskDescription = document.getElementById('task-description');
        const taskDateField = document.getElementById('due-date');
        const taskUrgency = document.getElementById('urgency');

        AddTaskOverlay.classList.remove('hidden');
        AddTaskOverlay.id = 'editTodo';
        taskIdHolder.id = todo.id;
        taskFormH1.textContent = 'Edit Task';
        submitTask.value = 'Save Changes!';
        taskTitle.value = todo.name;
        taskDescription.value = todo.description;
        taskDateField.value = todo.dueDate;
        taskUrgency.value = todo.priority;
      } 
    });

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');

    const emptyCircle = document.createElement('i');
    const checkedCircle = document.createElement('i');
    const todoTitle = document.createElement('p');

    emptyCircle.classList.add('btn', 'fa-regular', 'fa-circle');
    checkedCircle.classList.add('btn', 'fa-solid', 'fa-circle-check', 'hidden');
    todoTitle.classList.add('task-title');

    todoTitle.textContent = todo.name;

    emptyCircle.addEventListener('click', () => {
      emptyCircle.classList.add('hidden');
      checkedCircle.classList.remove('hidden');
    })
    checkedCircle.addEventListener('click', () => {
      emptyCircle.classList.remove('hidden');
      checkedCircle.classList.add('hidden');
    })

    taskName.append(emptyCircle, checkedCircle, todoTitle);

    const dueDate = document.createElement('p');
    dueDate.classList.add('due-date');
    dueDate.textContent = todo.dueDate.split("-").reverse().join("-");// reverse the date string

    const priority = document.createElement('p');
    priority.classList.add('priority');
    priority.textContent = todo.priority;
;
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('btn', 'fa-solid', 'fa-trash');
    deleteBtn.addEventListener('click', () => {
      deleteTodo(todo.id);
    })

    todoContainer.append(taskName, dueDate, priority, deleteBtn);
    todosContainer.appendChild(todoContainer);
  });
}

export { addProject, updateProjectDetails, deleteProject, applyRename, addTodo, refreshToDos, isRenameAvailable, addProjectToSidebar, restoreProject }
