
import template from "./shop-container-view.js";
import products from "../../../src/data/products.json" assert { type: 'json' };

/**
 * Custom component for shop container and
 * product display
 * 
 * <shop-container></shop-container>
 */
class ShopContainer extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "closed" });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        this.registerEventListeners();
        this.restoreProductArray();
        this.setupProducts();
    }

    /**
     * Function that generates a child element per
     * product inside container
     * @param {string} [emptyMessage] optional message to show if no products to show
     */
    setupProducts(emptyMessage = "No products to show.") {
        if(this.products.length > 0) {
            this.products.forEach((item) => {
                let product = document.createElement("product-card");
                product.productname = item.title;
                product.productprice = `$ ${item.price}.00`;
                product.productimage = item.images[0];
                this.root.querySelector("#shop-product-container").append(product);
            });
        } else {
            let emptyProducts = document.createElement("span");
            emptyProducts.innerText = emptyMessage;
            this.root.querySelector("#shop-product-container").append(emptyProducts);
        }
        
    }

    /**
     * Registering event listeners
     */
    registerEventListeners() {
        this.root.querySelector("#search-button").addEventListener("click", this.handleSearchEvent);
        this.root.querySelector("#search-input").addEventListener("keypress", this.handleSearchEvent);
    }

    /**
     * 
     * @param {Event} event 
     */
    handleSearchEvent = (event) => {
        if((event instanceof KeyboardEvent && event?.key === "Enter") || (event instanceof PointerEvent)){
            const value = this.root.querySelector("#search-input").value;
            this.clearProductContainer();
            this.restoreProductArray();
            this.products = this.searchAction(value);
            this.setupProducts("No search results.");
        }        
    }

    /**
     * 
     */
    searchAction = (search) => {
        return this.products.filter((product) => {
            return (product.title.toLowerCase().includes(search.toLowerCase()));
        });
    }

    /**
     * 
     */
    restoreProductArray = () => {
        this.products = products? products : [];
    }

    /**
     * 
     */
    clearProductContainer = () => {
        this.root.querySelector("#shop-product-container").innerHTML = "";
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
    disconnectedCallback() {
        this.root.querySelector("#search-button").removeEventListener("click", this.handleSearchEvent);
        this.root.querySelector("#search-input").removeEventListener("keypress", this.handleSearchEvent);
    }

}

export default ShopContainer;
