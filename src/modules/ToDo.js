export default class ToDo {
	constructor(todo, desc, notes, project) {
		this.todo = todo;
		this.desc = desc;
		this.notes = notes;
		this.project = project;
		this.completed = false;
	}

	get todo() {
		return this._todo;
	}

	set todo(value) {
		this._todo = value.trim();
	}

	get desc() {
		return this._desc;
	}

	set desc(value) {
		this._desc = value.trim();
	}

	toggleCompleted() {
		this.completed = !this.completed;
	}

	isCompleted() {
		return this.completed;
	}
}
