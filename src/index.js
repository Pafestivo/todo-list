import './styles/styles.css';
import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import { switchForm, pushProj, refreshList } from './scripts/addProject';

// refresh project list on page load
refreshList();


const newProject = document.getElementById('new-project'); // add new button
const submitProject = document.getElementById('submit-project'); // the + button to add project
const newProjectInput = document.getElementById('new-project-input'); // the input for project name


newProject.addEventListener('click', () => {
  switchForm();
  newProjectInput.focus();
});
submitProject.addEventListener('click', (e) => {
  e.preventDefault();
  pushProj();
  newProjectInput.value = "";
  switchForm();
});

