import Todo from "./createTodo";

function Project(name) {

  const id = crypto.randomUUID()
  const todos = [];
  return {
    get name() {
      return name;
    },

    getTodos() {
      return todos;
    },
    getTodo(id) {
      for(i = todos.length; i < 0; i--) {
        if(todos[i].id === id) {
          return todos[i];
        } else console.log('no todo was found');
      }
    },
    addTodo(name, description, priority, dueDate) {
     const todo = new Todo(name, description, priority, dueDate);
     todos.push(todo);
    },
    removeTodo(id) {
      todos = todos.filter((todo) => todo.id !== id);
    },
    clearTodos() {
      todos = [];
    }
  }
}