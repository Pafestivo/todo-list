function switchRenameForm() {
  const form = document.getElementById('change-project-name');
  const title = document.getElementById('project-title-h');

  if(form.classList.contains('hidden')) {
    form.classList.remove('hidden')
    title.classList.add('hidden')
  } else {
    form.classList.add('hidden')
    title.classList.remove('hidden')
  }
}

export { switchRenameForm };

