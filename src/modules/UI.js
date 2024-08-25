import Project from './Project';
import ToDo from './ToDo';

export default class UI {
	constructor() {
		// this.projectList = document.querySelector('#projectList');
		this.todoList = document.querySelector('#todos');
	}

	loadUI = () => {
		// Add listener to buttons
		// this.addProject(new Project('Default'));
		this.addTodo(new ToDo('New Todo', 'No description'));

		document.querySelector('#newTodo').addEventListener('click', this.addTodo);
	};

	showTaskForm = () => {};

	// addProject = (project) => {
	// 	const li = document.createElement('li');
	// 	li.textContent = project.name;

	// 	this.projectList.append(li);
	// };

	addTodo = (todo) => {
		const li = document.createElement('li');
		li.classList.add('todo');

		const liData = document.createElement('div');
		liData.innerHTML = `
      <h3 class="todo-title">${todo.todo}</h3>
      <p class="todo-description">${todo.desc}</p>
    `;

		li.addEventListener('click', () => {
			todo.toggleCompleted();
			todo.isCompleted()
				? li.classList.add('complete')
				: li.classList.remove('complete');
		});

		li.append(liData);

		this.todoList.append(li);
	};
}
