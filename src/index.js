import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import './styles/styles.css';
import './styles/popup.css';
import { openAddProjectForm, closeAddProjectForm, openRenameForm, closeRenameForm, openAddTaskForm, closeAddTaskForm } from './scripts/switchForms';
import addProject from './scripts/manageProject';

const newProject = document.getElementById('new-project');
const submitProject = document.getElementById('submit-project');
const newProjectInput = document.getElementById('new-project-input');
const title = document.getElementById('project-title-h');
const saveName = document.getElementById('save-name');
const renameInput = document.getElementById('change-name-input');
const addTaskBtn = document.getElementById('add-task-btn');
const closeTaskForm = document.getElementById('close-form');
const submitTask = document.getElementById('submit-task');


newProject.addEventListener('click', openAddProjectForm);
newProjectInput.addEventListener('focusout', () => {
  setTimeout(() => {
    closeAddProjectForm();
  }, 150);
});
renameInput.addEventListener('focusout', () => {
  setTimeout(() => {
    closeRenameForm();
  }, 150);
});
submitProject.addEventListener('click', (e) => {
  e.preventDefault();
  closeAddProjectForm();
  addProject();
});
title.addEventListener('click', openRenameForm);
saveName.addEventListener('click', (e) => {
  e.preventDefault();
  closeRenameForm();
})
addTaskBtn.addEventListener('click', openAddTaskForm);
closeTaskForm.addEventListener('click', closeAddTaskForm);
submitTask.addEventListener('click', (e) => {
  e.preventDefault();
  closeAddTaskForm();
})