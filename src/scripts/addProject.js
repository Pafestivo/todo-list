const newProject = document.getElementById('new-project');
const projectForm = document.getElementById('project-form');
const projects = [
  {
    title: "My First Project"
  }
]

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

function refreshList() {
  const projectList = document.getElementById('projects-list');
  // refresh the array to display the new list of projects.
  projectList.textContent = "";

  // make the project list to dynamically take its content from array.
  projects.forEach((project) => {
    const projTitle = document.createElement('h2');
    projTitle.textContent = project.title;
    projectList.appendChild(projTitle);
  })
}

export { switchForm, pushProj, refreshList }




