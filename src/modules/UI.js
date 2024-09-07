import Project from './Project'
// import ToDo from './ToDo'

export default class UI {
	constructor() {
		this.projectList = document.querySelector('#projectList')
		this.todoList = document.querySelector('#todos')

		const projectJson = JSON.parse(window.localStorage.getItem('projects'))
		this.projects = projectJson?.length
			? projectJson.map((json) => new Project(json))
			: [new Project()]
	}

	load = () => {
		// handle default project
		if (this.projects.length) {
			for (const project of this.projects) {
				this.addProject(project)
			}
		}
	}

	addProject = (project) => {
		const li = document.createElement('li')
		li.textContent = project.name
		this.projectList.append(li)
	}
}
