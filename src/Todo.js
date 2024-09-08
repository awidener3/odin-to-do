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
		<article class="todo ${this.status}">
			<span class="status-span"></span>
			<header>
				<h3 class="title" contenteditable>${this.title}</h3>
				<label for="status" hidden>Status</label>
					<select class="status">
						<option value="not-started" ${this.status === 'not-started' ? 'selected' : ''}>Not started</option>
						<option value="in-progress" ${this.status === 'in-progress' ? 'selected' : ''}>In progress</option>
						<option value="done" ${this.status === 'done' ? 'selected' : ''}>Done</option>
					</select>
			</header>
			<p class="desc" contenteditable>${this.desc}</p>
		</article>
		`;

		element.append(container);
		this.container = container;

		const titleEl = container.querySelector('.title');
		const descriptionEl = container.querySelector('.desc');
		const statusEl = container.querySelector('.status');

		titleEl.addEventListener('focusout', (e) => this.update('title', e.target.textContent));
		descriptionEl.addEventListener('focusout', (e) => this.update('desc', e.target.textContent));
		console.log(statusEl);
		statusEl.addEventListener('input', (e) => {
			const article = container.querySelector('article');
			article.classList.remove(this.status);
			article.classList.add(e.target.value);

			this.update('status', e.target.value);
		});
	};

	update = (field, data) => {
		// don't update if the data hasn't changed
		if (this[field] === data) return;

		// format the data
		data = data.trim();
		// if (this.container.querySelector(`.${field}`).textContent) {
		// 	this.container.querySelector(`.${field}`).textContent = data;
		// }

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
