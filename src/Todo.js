export default class Todo {
	constructor({ id, title, desc, status }) {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.status = status;
		this.container = null;
	}

	build = (element) => {
		const container = document.createElement('li');

		container.innerHTML = `
		<article class="todo ${this.status.replaceAll(' ', '-')}">
			<span class="status"></span>
			<header>
				<h3 class="title" contenteditable>${this.title}</h3>
				<p>${this.status}</p>
			</header>
			<p class="desc" contenteditable>${this.desc}</p>
		</article>
		`;

		element.append(container);
		this.container = container;

		const titleEl = container.querySelector('.title');
		const descriptionEl = container.querySelector('.desc');

		titleEl.addEventListener('focusout', (e) => this.update('title', e.target.textContent));
		descriptionEl.addEventListener('focusout', (e) => this.update('desc', e.target.textContent));
	};

	update = (field, data) => {
		// don't update if the data hasn't changed
		if (this[field] === data) return;

		// format the data
		data = data.trim();
		this.container.querySelector(`.${field}`).textContent = data;

		// update the instance
		this[field] = data;

		// update local storage
		const todos = JSON.parse(localStorage.getItem('todos'));
		for (const item of todos) {
			if (item.id === this.id) item[field] = data;
		}
		localStorage.setItem('todos', JSON.stringify(todos));
	};
}
