import { selectedProject } from "./refreshList";

const form = document.getElementById('change-project-name');
const title = document.getElementById('project-title-h');

function openRenameForm() {
  form.classList.remove('hidden')
  title.classList.add('hidden')
}

function closeRenameForm() {
  form.classList.add('hidden')
  title.classList.remove('hidden')
}

function applyRename() {
  const renameInput = document.getElementById('change-name-input'); // the input to change project name
  const headerTitle = document.getElementById('project-title-h'); // the project title on main area

  selectedProject.title = renameInput.value;
  headerTitle.textContent = selectedProject.title;
}

export { openRenameForm, closeRenameForm, applyRename };

