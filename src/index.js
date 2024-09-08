import Project from './Project';
import './style.css';
import Todo from './Todo';

const sampleTodos = [
	{
		id: 0,
		title: 'Todo #1',
		desc: "A todo that I haven't started",
		status: 'not-started',
		projectId: 'default',
	},
	{
		id: 1,
		title: 'Todo #2',
		desc: "A todo that I'm doing.",
		status: 'in-progress',
		projectId: '0',
	},
	{
		id: 2,
		title: 'Todo #3',
		desc: "A todo that I've done.",
		status: 'done',
		projectId: '0',
	},
];

const sampleProjects = [
	{
		id: 'default',
		title: 'Default',
		selected: true,
	},
	{
		id: '0',
		title: 'Project 1',
		selected: false,
	},
];

if (!localStorage.getItem('todos')) {
	localStorage.setItem('todos', JSON.stringify(sampleTodos));
}

if (!localStorage.getItem('projects')) {
	localStorage.setItem('projects', JSON.stringify(sampleProjects));
}

class UI {
	constructor() {
		this.aside = document.querySelector('aside');
		this.todoListEl = document.querySelector('#todoList');
		this.addTodoBtn = document.querySelector('#addTodo');
		this.addProjectBtn = document.querySelector('#addProject');
		this.projectListEl = document.querySelector('#projectList');
		this.projectForm = document.querySelector('#projectForm');
		this.projectName = document.querySelector('#projectName');

		this.todos = JSON.parse(localStorage.getItem('todos'));
		this.projects = JSON.parse(localStorage.getItem('projects'));
		this.currentProjectId = this.projects.find((project) => project.selected).id || 'default';
	}

	load = () => {
		// #region todos
		this.setTodos();

		this.addTodoBtn.addEventListener('click', () => {
			const defaultTodo = {
				id: crypto.randomUUID(),
				title: 'New todo',
				desc: 'Add a description...',
				status: 'not-started',
				projectId: this.currentProjectId,
			};

			const todos = JSON.parse(localStorage.getItem('todos'));
			todos.push(defaultTodo);
			localStorage.setItem('todos', JSON.stringify(todos));

			const newTodo = new Todo(defaultTodo);
			newTodo.build(this.todoListEl);
		});
		// #endregion

		// #region projects
		// add projects to aside area
		const projectName = this.projects.find((project) => project.id === this.currentProjectId).title;
		this.projectName.textContent = projectName;

		this.setProjects();

		this.projectName.addEventListener('focusout', (e) => {
			const newTitle = e.target.textContent.trim();

			// update local storage
			const projects = JSON.parse(localStorage.getItem('projects'));
			for (const project of projects) {
				if (project.id === this.currentProjectId) {
					project.title = newTitle;
				}
			}
			localStorage.setItem('projects', JSON.stringify(projects));

			this.setProjects();
		});

		this.addProjectBtn.addEventListener('click', () => {
			const defaultProject = {
				id: crypto.randomUUID(),
				title: 'New Project',
			};

			const projects = JSON.parse(localStorage.getItem('projects'));
			projects.push(defaultProject);
			localStorage.setItem('projects', JSON.stringify(projects));

			const newProject = new Project(defaultProject);
			newProject.build(this.projectListEl);
		});

		this.projectForm.addEventListener('change', (e) => {
			e.preventDefault();

			const formData = new FormData(this.projectForm);
			const newId = formData.get('selectedId');
			const projects = JSON.parse(localStorage.getItem('projects'));
			for (const project of projects) {
				if (project.id === this.currentProjectId) project.selected = false;
				if (project.id === newId) project.selected = true;
			}
			this.projects = projects;
			localStorage.setItem('projects', JSON.stringify(projects));

			this.currentProjectId = newId;
			const projectName = this.projects.find((project) => project.id === this.currentProjectId).title;
			this.projectName.textContent = projectName;
			this.setTodos();
		});
		// #endregion
	};

	setTodos = () => {
		this.todoListEl.innerHTML = '';
		this.todos = JSON.parse(localStorage.getItem('todos'));
		const currentProjectTodos = this.todos.filter((todo) => todo.projectId === this.currentProjectId);

		// add todos to content area
		for (const todo of currentProjectTodos) {
			const todoObj = new Todo(todo);
			todoObj.build(this.todoListEl);
		}
	};

	setProjects = () => {
		this.projectListEl.innerHTML = '';

		this.projects = JSON.parse(localStorage.getItem('projects'));
		for (const project of this.projects) {
			const projectObj = new Project(project);
			projectObj.build(this.projectListEl);
		}
	};
}

const homepage = new UI();
homepage.load();
