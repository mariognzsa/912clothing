
import template from "./product-card-view.js";

/**
 * Custom component for handling and displaying 
 * product cards on the shop
 * 
 * <product-card></product-card>
 */
class ProductCard extends HTMLElement {
    constructor() {
        super();
        // const shadowRoot = this.attachShadow({mode: "closed"});
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
        return ["productname", "productprice", "productimage", "type"];
    }

    /**
     * Gets called every time a defined attribute changes
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        // console.log("Attribute changed", attrName, oldVal, newVal);
        if(attrName.toLowerCase() === "productname") {
            const div = this.root.querySelector(".product-card-container");
            let p = div.querySelector("#product_name") 
            ? div.querySelector("#product_name") 
            : document.createElement("p");
            p.className = "text-title pc-info-item";
            p.textContent = newVal;
            // div.querySelector(".product-card-info").append(p);
        }
        else if(attrName.toLowerCase() === "productprice") {
            const div = this.root.querySelector(".product-card-container");
            let p = div.querySelector("#product_price") 
            ? div.querySelector("#product_price") 
            : document.createElement("p");
            p.className = "text-subtitle pc-info-item";
            p.textContent = newVal;
            // div.querySelector(".product-card-info").append(p);
        }
        else if(attrName.toLowerCase() === "productimage") {
            const div = this.root.querySelector(".product-card-container");
            let img = div.querySelector("#product_image") 
            ? div.querySelector("#product_image") 
            : document.createElement("img");
            img.className = "product-image";
            img.src = newVal;
            img.alt = "product image";
            // div.append(img);
        }
        else if(attrName.toLowerCase() === "type") {
            if(newVal == "modal"){
                const div = this.root.querySelector(".product-card-container");
                div.className = "product-card-modal";
            }
        }
    }

    /**
     * 
     */
    registerEventListeners = () => {
        this.root.addEventListener("click", this.handleClickCard);
    }

    /**
     * 
     * @param {*} event 
     */
    handleClickCard = (event) => {
        console.log(event)
        const customEvent = new CustomEvent("clickCard", {
            detail: {
                id: this.getAttribute("id"),
                name: this.getAttribute("productname"),
                price: this.getAttribute("productprice"),
                image: this.getAttribute("productimage"),
            }
        });
        console.log("dispatch", customEvent);
        this.root.dispatchEvent(customEvent);
    }
    
    /**
     * 
     */


    /**
     * 
     */
    get productname() {
        return this.getAttribute("productname");
    }

    set productname(value) {
        this.setAttribute("productname", value);
    }

    /**
     * 
     */
    get productprice() {
        return this.getAttribute("productprice");
    }

    set productprice(value) {
        this.setAttribute("productprice", value);
    }

    /**
     * 
     */
    get productimage() {
        return this.getAttribute("productimage");
    }

    set productimage(value) {
        this.setAttribute("productimage", value);
    }

    /**
     * 
     */
    get type() {
        return this.getAttribute("type");
    }

    set type(value) {
        this.setAttribute("type", value);
    }

    /**
     * Callback for when element gets disconnected from DOM
     */
    disconnectedCallback() {
        this.root.removeEventListener("click", this.handleClickCard);
    }


}

export default ProductCard;
