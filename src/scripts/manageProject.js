import Project from "./createProject";

let activatedProject = {};

const title = document.getElementById('project-title-h');


function addProject() {
  const newProjectInput = document.getElementById('new-project-input');
  const projectList = document.getElementById('projects-list');
  const projectName = newProjectInput.value;

  const newProject = new Project(projectName);
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = newProject.name;
  projectTitle.id = newProject.id;
  projectTitle.addEventListener('click', () => {
    changeActiveProject(newProject)
  })
  projectList.appendChild(projectTitle);
}

function changeActiveProject(activeProject) {
  activatedProject = activeProject;
  title.textContent = activatedProject.name;
}

function updateProjectDetails() {
  const projectTitle = document.getElementById(activatedProject.id);
  projectTitle.textContent = activatedProject.name;
  title.textContent = activatedProject.name;
}

function applyRename() {
  const renameInput = document.getElementById('change-name-input');
  activatedProject.setName(renameInput.value);
}

export { addProject, updateProjectDetails, applyRename }
