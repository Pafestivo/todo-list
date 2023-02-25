const newProject = document.getElementById('new-project');
const projectForm = document.getElementById('project-form');

export default function switchForm() {
  if(projectForm.classList.contains('hidden')) {
    newProject.classList.add('hidden');
    projectForm.classList.remove('hidden');
  } else {
    projectForm.classList.add('hidden');
    newProject.classList.remove('hidden');
  }
}