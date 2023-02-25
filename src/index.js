import './styles/styles.css';
import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import switchForm from './scripts/addProject';

const newProject = document.getElementById('new-project');
const submitProject = document.getElementById('submit-project');
const newProjectName = document.getElementById('new-project-name');
newProject.addEventListener('click', switchForm);
submitProject.addEventListener('click', (e) => {
  e.preventDefault()
  newProjectName.value = "";
  switchForm()
});
