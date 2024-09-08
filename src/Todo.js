export default class Todo {
	constructor({ id, title, desc, priority, projectId, completed, dueDate }) {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.priority = priority;
		this.projectId = projectId || null;
		this.completed = completed;
		this.dueDate = dueDate || '';
		this.container = null;
	}

	build = (element) => {
		const container = document.createElement('li');
		container.classList.add('todo');

		container.innerHTML = `
		<input type="checkbox" class="complete" ${this.completed ? 'checked' : ''}>
		<article class="${this.priority} ${this.completed ? 'completed' : ''}">
			<span class="priority-span"></span>
			<header>
				<h4 class="title" contenteditable>${this.title}</h4>
				
				<menu>
					<li>
						<label for="dueDate" hidden>Due date</label>
						<input name="dueDate" class="dueDate" type="date" value="${this.dueDate}">
					</li>
					<li>
						<label for="priority" hidden>Priority</label>
						<select class="priority">
							<option value="low" ${this.priority === 'low' ? 'selected' : ''}>Low</option>
							<option value="medium" ${this.priority === 'medium' ? 'selected' : ''}>Medium</option>
							<option value="high" ${this.priority === 'high' ? 'selected' : ''}>High</option>
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

		const article = container.querySelector('article');
		const titleEl = article.querySelector('.title');
		const dueDateEl = article.querySelector('.dueDate');
		const descriptionEl = article.querySelector('.desc');
		const priorityEl = article.querySelector('.priority');
		const deleteBtn = article.querySelector('.delete');
		const completeCheckbox = container.querySelector('.complete');

		// update completion status
		completeCheckbox.addEventListener('change', (e) => {
			this.update('completed', e.target.checked);
			article.classList.toggle('completed', e.target.checked);
		});

		// update names
		titleEl.addEventListener('focusout', (e) => this.update('title', e.target.textContent));
		dueDateEl.addEventListener('input', (e) => this.update('dueDate', e.target.value));
		descriptionEl.addEventListener('focusout', (e) => this.update('desc', e.target.textContent));

		// update priority
		priorityEl.addEventListener('input', (e) => {
			article.classList.remove(this.priority);
			article.classList.add(e.target.value);
			this.update('priority', e.target.value);
		});

		deleteBtn.addEventListener('click', this.delete);
	};

	update = (field, data) => {
		// don't update if the data hasn't changed
		if (this[field] === data) return;

		// format the data
		if (typeof data === 'string') data = data.trim();

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
