import { addProject, projects, trashProjects } from "./manageProject";

function loadLocalStorage() {
  const lsProjects = JSON.parse(localStorage.getItem('projects'));
  const lsTrashProjects = JSON.parse(localStorage.getItem('trashProjects'))

  // this loop creates projects from localStorage data
  for(let i = 0; i < lsProjects.length; i++) {
    addProject(lsProjects[i].name);
    const currentProject = projects[i]; // from website

    // this loop creates tasks for each project according to localStorage data
    for(let l = 0; l < lsProjects[i].todos.length; l++) {
      const currentTask = lsProjects[i].todos[l]; // from localStorage
      currentProject.addTodo(currentTask.name, currentTask.description, currentTask.priority, currentTask.dueDate);
    }
  }

    // this loop creates recycled projects from localStorage data
    if(lsTrashProjects) {
      const recycleBin = document.getElementById('recycle-bin');
      const recycleCount = document.getElementById('recycle-count');

      for(let i = 0; i < lsTrashProjects.length; i++) {
        addProject(lsTrashProjects[i].name);
        lsProjects.pop()
        trashProjects.push(projects.at(-1));
        projects.pop()
        localStorage.setItem('projects', JSON.stringify(projects))
        const currentProjectTitle = document.getElementById(trashProjects[i].id);
        const currentProject = trashProjects[i]; // from website
        recycleBin.appendChild(currentProjectTitle);
        recycleCount.textContent = recycleBin.childElementCount;
    
        // this loop creates tasks for each project according to localStorage data
        for(let l = 0; l < lsTrashProjects[i].todos.length; l++) {
          const currentTask = lsTrashProjects[i].todos[l]; // from localStorage
          currentProject.addTodo(currentTask.name, currentTask.description, currentTask.priority, currentTask.dueDate);
        }
      }
    }
}

export { loadLocalStorage }