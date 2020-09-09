import { Component } from "../helpers/index.js";

class Navbar extends Component {
  created() {
    this.$props = ["title"];
  }

  render() {
    return `
      <nav class="shadow navbar bg-primary text-white">
        <span class="navbar-brand mb-0 h1">${this.title}</span>
      </nav>
    `;
  }
}

customElements.define("x-navbar", Navbar);
