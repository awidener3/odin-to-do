export default class Project {
	constructor({ name, parent }) {
		this.name = name;
		this.parent = parent;
		this.todos = [];
	}

	push(todo) {
		this.todos.push(todo);
	}

	delete(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id);
	}
}
