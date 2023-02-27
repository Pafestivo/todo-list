export default function Todo(name, description, priority, dueDate) {

  const id = crypto.randomUUID();
  let done = false;
  return {
    get id() {
      return id;
    },
    get name() {
      return name;
    },
    get description() {
      return description;
    },
    get priority() {
      return priority;
    },
    get dueDate() {
      return dueDate;
    },
    get isDone() {
      return done;
    },
    set priority(updatedValue) {
      this.priority = updatedValue;
    },
    set toggleDone(value) {
      this.done = value
    },
  }
}