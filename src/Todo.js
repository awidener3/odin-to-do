export default class Todo {
	constructor({ id, title, desc, status, projectId }) {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.status = status;
		this.projectId = projectId || null;
		this.container = null;
	}

	build = (element) => {
		const container = document.createElement('li');

		container.innerHTML = `
		<article class="todo ${this.status}">
			<span class="status-span"></span>
			<header>
				<h3 class="title" contenteditable>${this.title}</h3>
				<menu>
					<li>
						<label for="status" hidden>Status</label>
						<select class="status">
							<option value="not-started" ${this.status === 'not-started' ? 'selected' : ''}>Not started</option>
							<option value="in-progress" ${this.status === 'in-progress' ? 'selected' : ''}>In progress</option>
							<option value="done" ${this.status === 'done' ? 'selected' : ''}>Done</option>
						</select>
					</li>
					<li>
						<button type="button" class="delete"><i class="fa-solid fa-trash"></i></button>
					</li>
				</menu>
			</header>
			<p class="desc" contenteditable>${this.desc}</p>
		</article>
		`;

		element.append(container);
		this.container = container;

		const titleEl = container.querySelector('.title');
		const descriptionEl = container.querySelector('.desc');
		const statusEl = container.querySelector('.status');
		const deleteBtn = container.querySelector('.delete');

		titleEl.addEventListener('focusout', (e) => this.update('title', e.target.textContent));
		descriptionEl.addEventListener('focusout', (e) => this.update('desc', e.target.textContent));
		statusEl.addEventListener('input', (e) => {
			const article = container.querySelector('article');
			article.classList.remove(this.status);
			article.classList.add(e.target.value);

			this.update('status', e.target.value);
		});

		deleteBtn.addEventListener('click', this.delete);
	};

	update = (field, data) => {
		// don't update if the data hasn't changed
		if (this[field] === data) return;

		// format the data
		data = data.trim();

		// update the instance
		this[field] = data;

		// update local storage
		const todos = JSON.parse(localStorage.getItem('todos'));
		for (const item of todos) {
			if (item.id === this.id) item[field] = data;
		}
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	delete = () => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		let updatedTodos = todos.filter((todo) => todo.id !== this.id);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
		this.container.remove();
	};
}
