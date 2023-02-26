import { projects } from "./projectsArray";

let selectedProject = projects[0];
const projTitleHeader = document.getElementById('project-title-h');

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
  projTitleHeader.textContent = selectedProject.title;
  // add the event listener to each newly created h2 element
  clickToGetName();
}

function clickToGetName() {
  const allProjects = document.querySelectorAll('div#projects-list > h2')

  allProjects.forEach((project) => {
    project.addEventListener('click', () => {
      projTitleHeader.textContent = project.textContent;
      selectedProject = projects.find((selected) => selected.title === project.textContent)
      console.log(selectedProject);
    });
  })
}

export { refreshList, selectedProject };