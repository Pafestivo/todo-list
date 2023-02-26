import './styles/styles.css';
import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import { openAddProjectForm, closeAddProjectForm, pushProj } from './scripts/addProject';
import { refreshList } from './scripts/refreshList';
import { openRenameForm, closeRenameForm, applyRename } from './scripts/mainArea';

// refresh project list on page load
refreshList();


const newProject = document.getElementById('new-project'); // add new button
const submitProject = document.getElementById('submit-project'); // the + button to add project
const newProjectInput = document.getElementById('new-project-input'); // the input for project name
const headerTitle = document.getElementById('project-title-h'); // the project title on main area
const saveName = document.getElementById('save-name'); // the save button to change the name
const renameInput = document.getElementById('change-name-input'); // the input to change project name

document.addEventListener('keydown', (e) => { // close forms when clicking escape
  if(e.key === "Escape") {
    closeAddProjectForm();
    closeRenameForm();
  }
});
newProject.addEventListener('click', () => {
  openAddProjectForm();
  newProjectInput.focus();
});
newProjectInput.addEventListener('focusout', () => {
  setTimeout(() => {
    closeAddProjectForm();
  }, 200);
});
submitProject.addEventListener('click', (e) => {
  e.preventDefault();
  pushProj();
  newProjectInput.value = "";
  closeAddProjectForm();
});
headerTitle.addEventListener('click', () => {
  openRenameForm();
  renameInput.focus();
  renameInput.value = headerTitle.textContent;
});
renameInput.addEventListener('focusout', () => {
  setTimeout(() => {
    closeRenameForm();
  }, 200);
});
saveName.addEventListener('click', (e) => {
  e.preventDefault();
  applyRename();
  closeRenameForm();
  refreshList();
});


