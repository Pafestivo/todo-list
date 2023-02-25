const newProject = document.getElementById('add-project');
const projectForm = document.getElementById('project-form');

function openProjectForm() {

  newProject.classList.add('hidden');
  projectForm.classList.remove('hidden');
}

function addProject() {
  projectForm.classList.add('hidden');
  newProject.classList.add('hidden');
}

export { openProjectForm, addProject};