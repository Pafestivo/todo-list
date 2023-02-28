export default function Todo(name, description, priority, dueDate) {

  const id = crypto.randomUUID();
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
    }
  }
}