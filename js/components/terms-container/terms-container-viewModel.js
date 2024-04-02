
import template from "./terms-container-view.js";

/**
 * Custom component for shop container and
 * product display
 * 
 * <shop-container></shop-container>
 */
class TermsContainer extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "closed" });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
    }

    /**
     * Define allowed attributes
     * @returns 
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Gets called every time a defined attribute changes
     * @param {string} attrName 
     * @param {Array} oldVal 
     * @param {Array} newVal 
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        // pass
    }

    /**
     * Callback for when element gets disconnected from DOM
     */
    disconnectedCallback() { }

}

export default TermsContainer;
