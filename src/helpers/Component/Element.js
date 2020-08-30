/**
 * Element Class for create custom element
 *
 */
class Element extends HTMLElement {
	/**
	 * Constructor
	 *
	 */
	constructor() {
		super();

		/**
		 * Props for passing data from attribute element
		 *
		 */
		this.$props = [];

		this.created();
	}

	/**
	 * Do something after element created!
	 *
	 */
	created() {}

	/**
	 * Do Something before element render
	 *
	 */
	beforeRender() {}

	/**
	 * Do Something after element render
	 *
	 */
	rendered() {}

	/**
	 * Render element (using string)
	 *
	 */
	render() {}

	/**
	 * HTML Element after connect
	 *
	 */
	connectedCallback() {
		this.beforeRender();

		this.rendering();

		this.rendered();
	}

	static get observedAttributes() {
		return this.$props;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;

		this.rendering();
	}

	disconnectedCallback() {}

	adoptedCallback() {}

	rendering() {
		this.innerHTML = this.render();
	}
}

export default Element;
