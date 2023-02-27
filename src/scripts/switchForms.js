const newProject = document.getElementById('new-project');
const projectForm = document.getElementById('project-form');
const renameForm = document.getElementById('change-project-name');
const title = document.getElementById('project-title-h');
const AddTaskOverlay = document.getElementById('add-task-overlay');

// input fields
const newProjectInput = document.getElementById('new-project-input');
const renameInput = document.getElementById('change-name-input');
const taskDateField = document.getElementById('due-date');
const addTaskInputs = document.querySelectorAll('#add-task-form > input, textarea, select');


function openAddProjectForm() {
  newProject.classList.add('hidden');
  projectForm.classList.remove('hidden');
  newProjectInput.value = "";
  newProjectInput.focus();
}

function closeAddProjectForm() {
  projectForm.classList.add('hidden');
  newProject.classList.remove('hidden');
}

function openRenameForm() {
  renameForm.classList.remove('hidden')
  title.classList.add('hidden')
  renameInput.focus();
  renameInput.value = title.textContent;
}

function closeRenameForm() {
  renameForm.classList.add('hidden')
  title.classList.remove('hidden')
}

function openAddTaskForm() {
  AddTaskOverlay.classList.remove('hidden')
  addTaskInputs.forEach((textField) => {
    textField.value = "";
  })
}

function closeAddTaskForm() {
  AddTaskOverlay.classList.add('hidden')
}

export { openAddProjectForm, closeAddProjectForm, openRenameForm, closeRenameForm, openAddTaskForm, closeAddTaskForm }