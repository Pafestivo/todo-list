import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import './styles/styles.css';
import './styles/popup.css';
import { openAddProjectForm, closeAddProjectForm, openRenameForm, closeRenameForm } from './scripts/switchForms';
import addProject from './scripts/addProject';

const newProject = document.getElementById('new-project'); // new project button in sidebar
const submitProject = document.getElementById('submit-project'); // submit project button in sidebar
const newProjectInput = document.getElementById('new-project-input'); // the input of adding new project
const title = document.getElementById('project-title-h'); // project title in the main area
const saveName = document.getElementById('save-name'); // the submit rename form
const renameInput = document.getElementById('change-name-input'); // the rename form input


newProject.addEventListener('click', () => {
  openAddProjectForm();
  newProjectInput.value = "";
  newProjectInput.focus();
});
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
title.addEventListener('click', () => {
  openRenameForm();
  renameInput.focus();
  renameInput.value = title.textContent;
});
saveName.addEventListener('click', (e) => {
  e.preventDefault();
  closeRenameForm();
})
