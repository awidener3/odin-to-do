import './styles.css';
import Todo from './Todo';
import Project from './Project';

// this will eventually be stored locally
const projects = [];

// create default project
const defaultProject = new Project({ name: 'default' });
projects.push(defaultProject);

// set project title
const projectHeader = document.querySelector('#project-title');
projectHeader.textContent = 'default';

// add listener
const addTodoBtn = document.querySelector('.add-todo');
addTodoBtn.addEventListener('click', () => {
	let project;
	let projectName;

	if (!projectName || projectName === 'default' || projectName === '') {
		// add to default project
		project = defaultProject;
		projectName = 'default';
	} else if (projects.filter((project) => project.name !== projectName).length) {
		// project not found - build a new project
		project = new Project({ name: projectName });
		projects.push(project);
	} else {
		// find existing project
		project = projects.find((project) => project.name === projectName);
	}

	// create todo
	const todo = new Todo({
		title: document.querySelector('#todo-title').value,
		description: '',
		project: projectName,
		dueDate: '',
		priority: '',
		parent: document.querySelector('.todos'),
	});

	// add to project
	project.push(todo);

	// add to DOM
	todo.add();
});
