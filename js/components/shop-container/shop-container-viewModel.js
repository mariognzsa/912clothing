
import template from "./shop-container-view.js";
import products from "../../../src/data/products.js";

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
        this.productModal = this.root.querySelector("#myModal");
        this.productModalFlag = false;
        this.doubleEventFlag = false;
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
                product.title = item.title;
                product.description = item.description;
                product.season = "Collection " + item.season_released;
                product.price = `$ ${item.price}.00`;
                product.size = item.sizes.join(", ");
                product.imagefront = item.images[0]? item.images[0] : '';
                product.imageback = item.images[1]? item.images[1] : '';
                product.root.addEventListener("clickCard", this.onOpenProductModal);
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
        this.root.querySelector("#filter-all").addEventListener("click", this.filterEvent);
        this.root.querySelector("#filter-s1").addEventListener("click", this.filterEvent);
        this.root.querySelector("#filter-s2").addEventListener("click", this.filterEvent);
        this.root.querySelector("#filter-s3").addEventListener("click", this.filterEvent);
    }

    filterEvent = (event) => {
        console.log("Event filter", event.target.id);
        this.clearProductContainer();
        this.restoreProductArray();
        
        if(event.target.id == "filter-all"){
            this.products = this.searchAction("");
            this.setupProducts("No search results.");
        }
        else if(event.target.id == "filter-s1"){
            this.products = this.filterAction("1");
            this.setupProducts("No search results.");
        }
        else if(event.target.id == "filter-s2"){
            this.products = this.filterAction("2");
            this.setupProducts("No search results.");
        }
        else if(event.target.id == "filter-s3"){
            this.products = this.filterAction("3");
            this.setupProducts("No search results.");
        }
        
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

    filterAction = (filter) => {
        return this.products.filter((product) => {
            console.log("product ", product.season_released, filter);
            return (product.season_released.includes(filter));
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
     * 
     */
    onOpenProductModal = (event) => {
        console.log("Event", event);
        const product = document.createElement("product-card");
        product.title = event.detail.title;
        product.price = event.detail.price;
        product.description = event.detail.description;
        product.size = event.detail.size;
        product.season = event.detail.season;
        product.imagefront = event.detail.imagefront;
        product.imageback = event.detail.imageback;
        product.type = "modal";
        product.root.addEventListener("closeCard", this.onCloseProductModal);
        this.productModal.querySelector("#product_modal").append(product);
        this.productModal.style.display = "block";
    }

    onCloseProductModal = (event) => {
        console.log("Event close", event);
        this.productModal.querySelector("#product_modal").innerHTML = "";
        this.productModal.style.display = "none";
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
        window.removeEventListener("click", this.handleCloseModal);
    }

}

export default ShopContainer;
