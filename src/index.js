import './styles/styles.css';
import './styles/header.css';
import './styles/main.css';
import './styles/sidebar.css';
import { openProjectForm, addProject} from './scripts/addProject';

const newProject = document.getElementById('add-project');
const submitProject = document.getElementById('submit-project');
newProject.addEventListener('click', openProjectForm);
submitProject.addEventListener('click', addProject);