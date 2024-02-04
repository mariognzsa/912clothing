
import navbar from "./navbar-view.js";

/**
 * Custom component for handling and displaying 
 * navbar on the shop
 * 
 * <navbar-card></navbar-card>
 */
class Navbar extends HTMLElement {
    constructor() {
        super();
        // const shadowRoot = this.attachShadow({mode: "closed"});
        this.root = this.attachShadow({ mode: "closed" });
        let clone = navbar.cloneNode(true);
        this.root.append(clone);
    }
}

export default Navbar;