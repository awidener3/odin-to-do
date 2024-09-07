export default class Project {
	constructor(params) {
		this.id = params?.id || crypto.randomUUID()
		this.name = params?.name || 'Default'
		this.todos = params?.todos || []

		this.save()
	}

	save() {
		const existingProjects = JSON.parse(window.localStorage.getItem('projects'))
		if (existingProjects.length) {
			const updated = existingProjects.map((project) => {
				if (project.id === this.id) {
					project = this.toJson()
				}
				return project
			})

			window.localStorage.setItem('projects', JSON.stringify(updated))
		} else {
			window.localStorage.setItem('projects', JSON.stringify([this.toJson()]))
		}
	}

	toJson() {
		return {
			id: this.id,
			name: this.name,
			todos: this.todos
		}
	}
}
