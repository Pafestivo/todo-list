import Project from "./createProject";

let activatedProject = {name: 'No Project Selected'}



const title = document.getElementById('project-title-h');
const addTaskBtn = document.getElementById('add-task-btn');
const deleteFormBtn = document.getElementById('delete-project');


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
    deleteFormBtn.classList.remove('hidden')
    addTaskBtn.classList.remove('hidden')
  })
  projectList.appendChild(projectTitle);
}

function changeActiveProject(activeProject) {
  activatedProject = activeProject;
  title.textContent = activatedProject.name;
}

function updateProjectDetails() {
  const activatedProjectTitle = document.getElementById(activatedProject.id);
  if (activatedProjectTitle) {
    activatedProjectTitle.textContent = activatedProject.name;
  }
  title.textContent = activatedProject.name;
}

function deleteProject() {
  const activatedProjectTitle = document.getElementById(activatedProject.id);
  activatedProjectTitle.remove();
  activatedProject = {name: 'No Project Selected'};
  updateProjectDetails();
  deleteFormBtn.classList.add('hidden');
  addTaskBtn.classList.add('hidden');
}

function applyRename() {
  const renameInput = document.getElementById('change-name-input');
  activatedProject.setName(renameInput.value);
}

export { addProject, updateProjectDetails, deleteProject, applyRename }
