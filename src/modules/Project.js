export default class Project {
	constructor(name = 'New Project') {
		this.name = name;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}
}
