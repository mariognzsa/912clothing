
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
                product.season = item.season_released;
                product.price = `$ ${item.price}.00`;
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
        window.addEventListener("click", this.onCloseProductModal);
    }

    filterEvent = (event) => {
        console.log("Event filter", event);
        this.clearProductContainer();
        this.restoreProductArray();
        this.products = this.searchAction("item");
        this.setupProducts("No search results.");
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
     * 
     */
    onOpenProductModal = (event) => {
        if(!this.productModalFlag) {
            console.log("Event", event);
            let product = document.createElement("product-card");
            product.productname = event.detail.name;
            product.productprice = event.detail.price;
            product.productimage = event.detail.image;
            product.type = "modal";
            this.productModal.querySelector("#product-modal").append(product);
            this.productModal.style.display = "block";
            this.productModalFlag = true;
            this.doubleEventFlag = true;
        }
    }

    onCloseProductModal = (event) => {
        if(!this.doubleEventFlag && this.productModalFlag){
            console.log("Event", event);
            if(event.target != this.productModal) {
                this.productModal.querySelector("#product-modal").innerHTML = "";
                this.productModal.style.display = "none";
                this.productModalFlag = false;
            }
        } else if(this.doubleEventFlag){
            this.doubleEventFlag = false;
        }
        
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
