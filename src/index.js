import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import './styles/styles.css';
import './styles/popup.css';
import './styles/media-queries.css';

import { openAddProjectForm, closeAddProjectForm, openRenameForm, closeRenameForm, openAddTaskForm, closeAddTaskForm, openVerifyDeletionForm, closeVerifyDeletionForm } from './scripts/switchForms';
import { addProject, applyRename, updateProjectDetails, deleteProject, addTodo, refreshToDos, isRenameAvailable, restoreProject } from './scripts/manageProject';
import { loadLocalStorage } from './scripts/localStorage';

const newProject = document.getElementById('new-project');
const submitProject = document.getElementById('submit-project');
const newProjectInput = document.getElementById('new-project-input');
const title = document.getElementById('project-title-h');
const saveName = document.getElementById('save-name');
const renameInput = document.getElementById('change-name-input');
const addTaskBtn = document.getElementById('add-task-btn');
const closeTaskForm = document.getElementById('close-form');
const submitTask = document.getElementById('submit-task');
const deleteFormBtn = document.getElementById('delete-project');
const verifyDeletion = document.getElementById('yes');
const cancelDeletion = document.getElementById('no');
const recycleBinTitle = document.getElementById('recycle-bin-title');
const recycleBin = document.getElementById('recycle-bin');
const restoreProjectBtn = document.getElementById('restore-project');
const openMobileSidebar = document.getElementById('open-mobile-sidebar');
const closeMobileSidebar = document.getElementById('close-mobile-sidebar')
const sideBar = document.getElementById('side-bar')

pageLoad();

document.addEventListener('keydown', (e) => { // shortcut escape to close forms
  if(e.key === 'Escape') {
    closeAddProjectForm();
    closeAddTaskForm();
    closeRenameForm();
    closeVerifyDeletionForm();
  }
})
document.addEventListener('click', (e) => { // click outside of sidebar on mobile hides the sidebar
  if(window.innerWidth < 1000 && (e.target.closest('#main') || e.target.closest('#header')) && e.target !== openMobileSidebar) {
    sideBar.classList.add('opacity-hidden');
  }
})
window.onresize = () => { // automatically hide or show sidebar on resizing
  if(window.innerWidth > 1000) sideBar.classList.remove('opacity-hidden');
}
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
  addProject(newProjectInput.value);
});
title.addEventListener('click', () => {
  if(isRenameAvailable()) { // if project allow rename
    openRenameForm();
  }
});
saveName.addEventListener('click', (e) => {
  e.preventDefault();
  applyRename();
  updateProjectDetails();
  closeRenameForm();
})
addTaskBtn.addEventListener('click', openAddTaskForm);
closeTaskForm.addEventListener('click', closeAddTaskForm);
submitTask.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
  closeAddTaskForm();
})
deleteFormBtn.addEventListener('click', openVerifyDeletionForm)
verifyDeletion.addEventListener('click', () => {
  deleteProject();
  closeVerifyDeletionForm();
});
cancelDeletion.addEventListener('click', closeVerifyDeletionForm)
recycleBinTitle.addEventListener('click', () => {
  if(recycleBin.classList.contains('hidden')) {
    recycleBin.classList.remove('hidden');
  } else {
    recycleBin.classList.add('hidden');
  }
})
restoreProjectBtn.addEventListener('click', restoreProject);
openMobileSidebar.addEventListener('click', toggleMobileSidebar);
closeMobileSidebar.addEventListener('click', toggleMobileSidebar);


function toggleMobileSidebar() {
  if(sideBar.classList.contains('opacity-hidden') || sideBar.classList.contains('first-load-hide')) {
    sideBar.classList.remove('opacity-hidden');
    sideBar.classList.remove('first-load-hide');
  } else sideBar.classList.add('opacity-hidden');
}

function pageLoad() {
  if(localStorage.length !== 0) {
    loadLocalStorage();
  } else {
    updateProjectDetails();
    refreshToDos();
  }
}