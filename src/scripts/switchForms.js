const newProject = document.getElementById('new-project');
const projectForm = document.getElementById('project-form');
const renameForm = document.getElementById('change-project-name');
const title = document.getElementById('project-title-h');

function openAddProjectForm() {
  newProject.classList.add('hidden');
  projectForm.classList.remove('hidden');
}

function closeAddProjectForm() {
  projectForm.classList.add('hidden');
  newProject.classList.remove('hidden');
}

function openRenameForm() {
  renameForm.classList.remove('hidden')
  title.classList.add('hidden')
}

function closeRenameForm() {
  renameForm.classList.add('hidden')
  title.classList.remove('hidden')
}

export { openAddProjectForm, closeAddProjectForm, openRenameForm, closeRenameForm }