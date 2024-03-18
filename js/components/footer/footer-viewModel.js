
import footer from "./footer-view.js";

/**
 * Custom component for handling and displaying 
 * footer on the shop
 * 
 * <footer-card></footer-card>
 */
class Footer extends HTMLElement {
    constructor() {
        super();
        // const shadowRoot = this.attachShadow({mode: "closed"});
        this.root = this.attachShadow({ mode: "closed" });
        let clone = footer.cloneNode(true);
        this.root.append(clone);
    }
}

export default Footer;