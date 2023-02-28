export default function Todo(name, description, priority, dueDate) {

  const id = crypto.randomUUID();
  let done = false;
  this.name = name;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  return {
    get id() {
      return id;
    },
    name,
    description,
    dueDate,
    priority,
    setName(newName) {
      this.name = newName;
    },
    setDescription(newDesc) {
      this.description = newDesc;
    },
    setDueDate(newDate) {
      this.dueDate = newDate;
    },
    setPriority(newPrio) {
      this.priority = newPrio;
    },
    get isDone() {
      return done;
    },
    set toggleDone(value) {
      this.done = value
    },
  }
}