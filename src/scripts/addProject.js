import { projects } from "./projectsArray";
import { refreshList } from "./refreshList";

const newProject = document.getElementById('new-project');
const projectForm = document.getElementById('project-form');

function switchForm() {
  if(projectForm.classList.contains('hidden')) {
    newProject.classList.add('hidden');
    projectForm.classList.remove('hidden');
  } else {
    projectForm.classList.add('hidden');
    newProject.classList.remove('hidden');
  }
}

// when + is clicked, push the new project name to the object arrays.
function pushProj() {
  const newProjectInput = document.getElementById('new-project-input');
  const project = {
    title: newProjectInput.value
  }
  projects.push(project);
  refreshList();
}

export { switchForm, pushProj }




