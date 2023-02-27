import Project from "./createProject";

export default function addProject() {
  const newProjectInput = document.getElementById('new-project-input');
  const projectList = document.getElementById('projects-list');
  const projectName = newProjectInput.value;

  const newProject = new Project(projectName);
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = newProject.name;
  projectTitle.addEventListener('click', () => {
    changeActiveProject(newProject)
  })
  projectList.appendChild(projectTitle);
}

function changeActiveProject(activeProject) {
  const title = document.getElementById('project-title-h');

  title.textContent = activeProject.name;
}

