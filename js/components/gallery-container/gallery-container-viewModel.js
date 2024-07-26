
import template from "./gallery-container-view.js";

/**
 * Custom component for handling and displaying 
 * product cards on the shop
 * 
 * <gallery-container></gallery-container>
 */
class GalleryContainer extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "closed" });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        this.registerEventListeners();
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
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        // pass
    }

    /**
     * 
     */
    registerEventListeners = () => {
        // pass
    }

    /**
     * Callback for when element gets disconnected from DOM
     */
    disconnectedCallback() {
        // pass
    }


}

export default GalleryContainer;
