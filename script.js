class Person {
	constructor(name, birthYear) {
		this.fullName = name
		this.birthYear = birthYear
	}

	/**
	 * @param {string | string[]} name
	 */
	set fullName(name) {
		if (name.includes(' ')) this._fullName = name
	}
}
