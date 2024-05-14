import Project from './Project';

export default class Todo extends Project {
	constructor({ title, description, project, dueDate, priority, parent }) {
		super({ project, parent });

		this.id = crypto.randomUUID();
		this.title = title;
		this.description = description;
		this.project = project;
		this.dueDate = dueDate;
		this.priority = priority;
		this.element = null;
	}

	add() {
		const element = document.createElement('li');
		element.innerHTML = `
      <h3>${this.project} / ${this.title}</h3>
      <p>Here is a description</p>
      <button class="delete">delete</button>
    `;
		this.element = element;
		this.parent.append(element);

		const deleteBtn = element.querySelector('.delete');
		deleteBtn.addEventListener('click', () => this.remove());
	}

	remove() {
		// remove from list
		this.delete(this.id);

		// remove element
		this.element.remove();
	}
}
