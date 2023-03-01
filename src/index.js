import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import './styles/styles.css';
import './styles/popup.css';
import { openAddProjectForm, closeAddProjectForm, openRenameForm, closeRenameForm, openAddTaskForm, closeAddTaskForm, openVerifyDeletionForm, closeVerifyDeletionForm } from './scripts/switchForms';
import { addProject, applyRename, updateProjectDetails, deleteProject, addTodo, refreshToDos, isRenameAvailable, addProjectToSidebar, restoreProject} from './scripts/manageProject';
import { defaultProject } from './scripts/defaultProject';

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

// load the default project first
addProjectToSidebar(defaultProject);
updateProjectDetails();
refreshToDos();

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