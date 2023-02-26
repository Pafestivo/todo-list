function clickToGetName() {
  const projTitleHeader = document.getElementById('project-title-h');
  const allProjects = document.querySelectorAll('div#projects-list > h2')

  console.log(allProjects);

  allProjects.forEach((project) => {
    project.addEventListener('click', () => {
      projTitleHeader.textContent = project.textContent;
    });
  })
}

export { clickToGetName };
