import Element from "./Element";

class Component extends Element {
	constructor() {
		super();

		this._componentName = "";
	}

	/**
	 * @mutator
	 * set component name
	 *
	 */
	static set componentName(newName) {
		let name = "x-" + newName;

		name = name.replace(/([A-Z])/g, "$1");
		name = name.toLowerCase();

		this._componentName = name;
	}

	/**
	 * @mutator
	 * get component name
	 *
	 */
	static get componentName() {
		return this._componentName;
	}

	/**
	 * @function
	 * static function for register new element
	 *
	 */
	static register(Element) {
		Element.componentName = Element.name;
		customElements.define(Element.componentName, Element);
	}
}

export default Component;
