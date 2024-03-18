
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
        this.flippedImageFlag = false;
        this.root.append(clone);
        this.registerEventListeners();
    }

    /**
     * Define allowed attributes
     * @returns 
     */
    static get observedAttributes() {
        return ["title", "price", "description", "size", "season", "imagefront", "imageback", "type"];
    }

    /**
     * Gets called every time a defined attribute changes
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        // console.log("Attribute changed", attrName, oldVal, newVal);
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
            p.className = "text-subtitle pc-info-item hidden";
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
        else if(attrName.toLowerCase() === "size") {
            const div = this.root.querySelector(".product-card-container");
            let p = div.querySelector("#product_sizes") 
            ? div.querySelector("#product_sizes") 
            : document.createElement("p");
            p.className = "pc-info-item hidden";
            p.textContent = newVal;
            // div.querySelector(".product-card-info").append(p);
        }
        else if(attrName.toLowerCase() === "season") {
            const div = this.root.querySelector(".product-card-container");
            let p = div.querySelector("#product_season") 
            ? div.querySelector("#product_season") 
            : document.createElement("p");
            p.className = "text-title pc-season-item hidden";
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
            if(newVal !== ''){
                const div = this.root.querySelector("#product_image_back_container");
                let img = div.querySelector("#product_image_back") 
                ? div.querySelector("#product_image_back") 
                : document.createElement("img");
                img.className = "product-image";
                img.src = newVal;
                img.alt = "product image back";
                div.append(img);
            }
            else {
                const div = this.root.querySelector(".flip-image");
                div.className = "non-flip-image";
            }
        }
        else if(attrName.toLowerCase() === "type") {
            if(newVal == "modal"){
                this.setupStyleForModal();
            }
        }
    }

    /**
     * 
     */
    setupStyleForModal = () => {
        this.root.querySelector(".product-card-container").className = "product-card-modal";
        if(this.getAttribute("imageback") !== ''){
            this.root.querySelector(".flip-image").className = "flip-image-modal";
        }
        else {
            this.root.querySelector(".non-flip-image").className = "non-flip-image-modal";
        }
        this.root.querySelector(".product-image").className = "product-image-modal";
        this.root.querySelector("#product_modal_top").className = "";
        this.root.querySelector("#product_description").className = "text-subtitle pc-info-item";
        this.root.querySelector("#product_size_text").className = "pc-info-item-bold sizes-margin";
        this.root.querySelector("#product_sizes").className = "pc-info-item";
        this.root.querySelector("#product_season").className = "text-title pc-season-item";
        this.root.querySelector("#product_button_container").className = "product-button-modal";
    }

    /**
     * 
     */
    registerEventListeners = () => {
        this.root.querySelector("#product_button").addEventListener("click", this.handleClickButton);
        this.root.querySelector(".product-card-info").addEventListener("click", this.handleClickCard);
        this.root.querySelector("#close_modal_button").addEventListener("click", this.handleCloseModal);
    }

    /**
     * 
     * @param {*} event 
     */
    handleClickCard = (event) => {
        // console.log(event)
        const customEvent = new CustomEvent("clickCard", {
            detail: {
                id: this.getAttribute("id"),
                title: this.getAttribute("title"),
                description: this.getAttribute("description"),
                size: this.getAttribute("size"),
                season: this.getAttribute("season"),
                price: this.getAttribute("price"),
                imagefront: this.getAttribute("imagefront"),
                imageback: this.getAttribute("imageback"),
            }
        });
        // console.log("dispatch", customEvent);
        this.root.dispatchEvent(customEvent);
    }

    /**
     * 
     */
    handleCloseModal = (event) => {
        // console.log(event)
        const customEvent = new Event("closeCard");
        // console.log("dispatch", customEvent);
        this.root.dispatchEvent(customEvent);
    }

    /**
     * 
     */
    handleClickButton = () => {
        const api_url = "https://api.whatsapp.com/send?";
        const phone = "524491205859";
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
    get size() {
        return this.getAttribute("size");
    }

    set size(value) {
        this.setAttribute("size", value);
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
