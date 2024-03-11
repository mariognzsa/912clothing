
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
        return ["title", "price", "description", "season", "imagefront", "imageback", "type"];
    }

    /**
     * Gets called every time a defined attribute changes
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("Attribute changed", attrName, oldVal, newVal);
        if(attrName.toLowerCase() === "title") {
            const div = this.root.querySelector(".product-card-container");
            let p = div.querySelector("#product_name") 
            ? div.querySelector("#product_name") 
            : document.createElement("p");
            p.className = "text-title pc-info-item";
            p.textContent = newVal;
            // div.querySelector(".product-card-info").append(p);
        }
        if(attrName.toLowerCase() === "description") {
            const div = this.root.querySelector(".product-card-container");
            let p = div.querySelector("#product_description") 
            ? div.querySelector("#product_description") 
            : document.createElement("p");
            p.className = "text-subtitle pc-info-item";
            p.textContent = newVal;
            // div.querySelector(".product-card-info").append(p);
        }
        else if(attrName.toLowerCase() === "price") {
            const div = this.root.querySelector(".product-card-container");
            let p = div.querySelector("#product_price") 
            ? div.querySelector("#product_price") 
            : document.createElement("p");
            p.className = "text-subtitle pc-info-item";
            p.textContent = newVal;
            // div.querySelector(".product-card-info").append(p);
        }
        else if(attrName.toLowerCase() === "imagefront") {
            const div = this.root.querySelector("#product_image_front_container");
            let img = div.querySelector("#product_image") 
            ? div.querySelector("#product_image") 
            : document.createElement("img");
            img.className = "product-image";
            img.src = newVal;
            img.alt = "product image";
            div.append(img);
        }
        else if(attrName.toLowerCase() === "imageback") {
            const div = this.root.querySelector("#product_image_back_container");
            let img = div.querySelector("#product_image_back") 
            ? div.querySelector("#product_image_back") 
            : document.createElement("img");
            img.className = "product-image";
            img.src = newVal;
            img.alt = "product image back";
            div.append(img);
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
        this.root.querySelector("#product_button").addEventListener("click", this.handleClickButton);
        // this.root.addEventListener("click", this.handleClickCard);
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
    handleClickButton = () => {
        const api_url = "https://api.whatsapp.com/send?";
        const phone = "524491058706";
        const text = encodeURI(`
        Hello, i'm interested on the item:
        ${this.getAttribute("title")}
        ${this.getAttribute("description")}
        ${this.getAttribute("price")}
        size: L
        `);
        const target_url = `${api_url}phone=${phone}&text=${text}`;
        window.open(target_url, "_blank").focus();
    }
    /**
     * 
     */
    get title() {
        return this.getAttribute("title");
    }

    set title(value) {
        this.setAttribute("title", value);
    }

    /**
     * 
     */
    get price() {
        return this.getAttribute("price");
    }

    set price(value) {
        this.setAttribute("price", value);
    }

    /**
     * 
     */
    get description() {
        return this.getAttribute("description");
    }

    set description(value) {
        this.setAttribute("description", value);
    }

    /**
     * 
     */
    get season() {
        return this.getAttribute("season");
    }

    set season(value) {
        this.setAttribute("season", value);
    }

    /**
     * 
     */
    get imagefront() {
        return this.getAttribute("imagefront");
    }

    set imagefront(value) {
        this.setAttribute("imagefront", value);
    }

    /**
     * 
     */
    get imageback() {
        return this.getAttribute("imageback");
    }

    set imageback(value) {
        this.setAttribute("imageback", value);
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
