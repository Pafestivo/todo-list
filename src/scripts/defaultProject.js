import Project from "./createProject";

// get today's date
const date = new Date();
let day = date.getDate()
let month = date.toLocaleString('default', { month: 'short'})
let year = date.getFullYear()
let fullDate = `${month} ${day}, ${year}`

const defaultProject = new Project('Click the title to rename!')

defaultProject.addTodo(
  'Task Name', 
  'This is the template of each task!', 
  'Priority', 
  'dueDate');

defaultProject.addTodo(
  'Click on tasks to view description', 
  'You can also edit anything you want in this page.', 
  'Low', 
  fullDate);

  defaultProject.addTodo(
    'Task colors changes depends on the urgency', 
    'Green is low urgency, yellow is medium and red is high!', 
    'Low', 
    fullDate);

defaultProject.addTodo(
  'Use the + icon to add new tasks', 
  'Adding a task will only add it to the project you currently viewing.', 
  'Medium', 
  fullDate);

defaultProject.addTodo(
  'Rename your projects by clicking the title', 
  'You can rename your projects by clicking on the project title.', 
  'High', 
  fullDate);

defaultProject.addTodo(
  'Use the sidebar "Add New" button to add new projects', 
  'You can add new projects and navigate between projects using the sidebar.', 
  'Medium', 
  fullDate);

defaultProject.addTodo(
  'Use the green trash icon to delete projects', 
  'The green trash icon at the bottom will delete the currently viewed project.', 
  'High', 
  fullDate);

defaultProject.addTodo(
  'Use the red trash icon to delete tasks', 
  'The red trash icon at the right of each task will delete it.', 
  'High', 
  fullDate);

defaultProject.addTodo(
  'Click the empty circle to mark tasks as completed.', 
  'The empty circle will fill up once you click it. Another click will reverse it.', 
  'Low', 
  fullDate);

defaultProject.addTodo(
  'Deleted projects will be sent to recycle bin', 
  'You can either restore them from recycle bin or delete them forever.', 
  'Medium', 
  fullDate);


export { defaultProject }