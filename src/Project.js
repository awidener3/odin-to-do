export default class Project {
	constructor({ id, title, selected }) {
		this.id = id;
		this.title = title;
		this.selected = selected || false;
	}

	build = (element) => {
		const container = document.createElement('li');
		container.classList.add('project');
		container.innerHTML = `
		<input type="radio" name="selectedId" id="${this.id}" value="${this.id}" ${this.selected ? 'checked' : ''}>
		<label for=${this.id}>${this.title}</label>
		`;

		element.append(container);
		this.container = container;
	};

	update = (field, data) => {
		// don't update if the data hasn't changed
		if (this[field] === data) return;

		// format the data
		data = data.trim();

		// update the instance
		this[field] = data;

		// update local storage
		const projects = JSON.parse(localStorage.getItem('projects'));
		for (const item of projects) {
			if (item.id === this.id) item[field] = data;
		}
		localStorage.setItem('projects', JSON.stringify(projects));
	};
}
