import Todo from "./createTodo";

export default function Project(name) {

  const id = crypto.randomUUID()
  let todos = [];
  this.name = name;
  return {
    name,
    get id() {
      return id;
    },
    getTodos() {
      return todos;
    },
    setName(newName) {
      this.name = newName
    },
    getTodo(todoId) {
      for(let i = todos.length - 1; i >= 0; i--) {
        if(todos[i].id === todoId) {
          return todos[i];
        } 
      }
    },
    addTodo(todoName, description, priority, dueDate) {
     const todo = new Todo(todoName, description, priority, dueDate);
     todos.push(todo);
    },
    removeTodo(todoId) {
      todos = todos.filter((todo) => todo.id !== todoId);
    },
    clearTodos() {
      todos = [];
    }
  }
}