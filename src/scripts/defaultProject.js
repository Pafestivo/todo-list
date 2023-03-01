import Project from "./createProject";

const defaultProject = new Project('Click the title to rename!')

defaultProject.addTodo(
  'Task Name', 
  'This is the template of each task!', 
  'Priority', 
  'Due Date');

defaultProject.addTodo(
  'Click on tasks to view description', 
  'You can also edit anything you want in this page.', 
  'Low', 
  '2027-5-27');

defaultProject.addTodo(
  'Use the + icon to add new tasks', 
  'Adding a task will only add it to the project you currently viewing.', 
  'Medium', 
  '2027-5-20');

defaultProject.addTodo(
  'Rename your projects by clicking the title', 
  'You can rename your projects by clicking on the project title.', 
  'High', 
  '2029-5-12');

defaultProject.addTodo(
  'Use the sidebar "Add New" button to add new projects', 
  'You can add new projects and navigate between projects using the sidebar.', 
  'Medium', 
  '2027-5-20');

defaultProject.addTodo(
  'Use the green trash icon to delete projects', 
  'The green trash icon at the bottom will delete the currently viewed project.', 
  'High', 
  '2027-5-15');

defaultProject.addTodo(
  'Use the red trash icon to delete tasks', 
  'The red trash icon at the right of each task will delete it.', 
  'High', 
  '2027-5-15');

defaultProject.addTodo(
  'Click the empty circle to mark tasks as completed.', 
  'The empty circle will fill up once you click it. Another click will reverse it.', 
  'Low', 
  '2027-5-9');


export { defaultProject }