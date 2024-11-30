
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
        return ["title", "price", "discount", "description", "size", "season", "extras", "imagefront", "imageback", "type"];
    }

    /**
     * Gets called every time a defined attribute changes
     */
    attributeChangedCallback(attrName, oldVal, newVal) {
        if(attrName.toLowerCase() === "title") {
            const div = this.root.querySelector(".product-card-container");
            let p = div.querySelector("#product_name") 
            ? div.querySelector("#product_name") 
            : document.createElement("p");
            p.className = "text-title pc-top-item";
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
        else if(attrName.toLowerCase() === 'discount'){
            if(Number(newVal) > 0 && Number(newVal) !== 100){
                const div = this.root.querySelector(".product-card-container");
                let p = div.querySelector("#product_price") 
                ? div.querySelector("#product_price") 
                : document.createElement("p");
                p.className = "text-subtitle pc-info-item";
                const previousPrice = document.createElement('s');
                const currentPrice = document.createElement('b');
                const priceNumber = parseFloat(this.getAttribute('price').replace('$ ', ''));
                previousPrice.textContent = p.textContent;
                previousPrice.className = "text-disabled";
                const discountNumber = parseFloat(this.getAttribute('discount'));
                const discountPriceNumber = priceNumber * ((discountNumber) / 100);
                currentPrice.textContent = " $" + Math.trunc(priceNumber - discountPriceNumber).toString();
                p.textContent = '';
                p.append(previousPrice);
                p.append(currentPrice);

                let discountBadge = div.querySelector("#product_discount") 
                ? div.querySelector("#product_discount") 
                : document.createElement("p");
                discountBadge.className = "text-title pc-discount-item";
                discountBadge.textContent = Math.trunc(parseInt(newVal)).toString() + "% OFF";
            }
            else if(Number(newVal) === 100) {
                // Provisional soldout logic added when discount equals 100
                const div = this.root.querySelector(".product-card-container");
                let p = div.querySelector("#product_price") 
                ? div.querySelector("#product_price") 
                : document.createElement("p");
                p.className = "text-subtitle pc-info-item";
                const previousPrice = document.createElement('s');
                const currentPrice = document.createElement('b');
                previousPrice.textContent = p.textContent;
                previousPrice.className = "text-disabled";
                currentPrice.textContent = " SOLD OUT";
                p.textContent = '';
                p.append(previousPrice);
                p.append(currentPrice);
                // soldout on button
                const soldButton = this.root.querySelector("#product_button");
                soldButton.className = "product-button-disabled pc-info-item";
                soldButton.textContent = "SOLD OUT";
                // soldout badge
                const soldoutBadge = this.root.querySelector("#product_soldout");
                soldoutBadge.className = "text-title pc-soldout-item";
                soldoutBadge.textContent = "SOLD OUT";
            }
            
        }
        else if(attrName.toLowerCase() === "size") {
            const div = this.root.querySelector(".product-card-container");
            let select = div.querySelector("#product_sizes") 
            ? div.querySelector("#product_sizes") 
            : document.createElement("select");
            select.className = "hidden";
            let sizeArray = newVal.split(",");
            sizeArray.forEach(element => {
                let option = document.createElement("option");
                option.value = element;
                option.text = element;
                select.append(option);
            });
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
        else if(attrName.toLowerCase() === "extras") {
            if(newVal === "sticker_pack"){
                const div = this.root.querySelector(".product-card-container");
                let p = div.querySelector("#product_extra") 
                ? div.querySelector("#product_extra") 
                : document.createElement("p");
                p.className = "text-title pc-extra-item hidden";
                p.textContent = "+ Sticker pack";
                // div.querySelector(".product-card-info").append(p);
            }
            
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
    setupStyleForModal = () => {
        this.root.querySelector(".product-card-container").className = "product-card-modal";
        if(this.getAttribute("imageback") !== ''){
            this.root.querySelector(".flip-image").className = "flip-image-modal";
            this.root.querySelector("#product_image_back").className = "product-image-modal";
        }
        else {
            this.root.querySelector(".non-flip-image").className = "non-flip-image-modal";
        }
        this.root.querySelector(".product-image").className = "product-image-modal";
        this.root.querySelector("#product_modal_top").className = "";
        this.root.querySelector("#product_description").className = "text-subtitle pc-info-item";
        this.root.querySelector("#product_size_text").className = "pc-info-item-bold sizes-margin";
        this.root.querySelector("#product_sizes").className = "";
        this.root.querySelector("#product_season").className = "text-title pc-season-item";
        if(this.getAttribute("extras") === 'sticker_pack'){
            this.root.querySelector("#product_extra").className = "text-title pc-extra-item";
        }
        if(Number(this.getAttribute("discount")) > 0 && Number(this.getAttribute("discount")) !== 100){
            this.root.querySelector("#product_discount").className = "text-title pc-discount-item-modal";
            this.root.querySelector("#product_button").className = "product-button-modal product-button";
        }
        else if(Number(this.getAttribute("discount")) === 100){
            this.root.querySelector("#product_soldout").className = "text-title pc-soldout-item-modal";
            this.root.querySelector("#product_button").className = "product-button-modal product-button-disabled";
        }
        else {
            this.root.querySelector("#product_button").className = "product-button-modal product-button";
        }
        this.root.querySelector("#product_terms").className = "pc-info-item-terms";
        this.root.querySelector("#product_info_top").className = "pc-top-container-modal";
    }

    /**
     * 
     */
    registerEventListeners = () => {
        this.root.querySelector("#product_button").addEventListener("click", this.handleClickButton);
        this.root.querySelector(".product-card-info").addEventListener("click", this.handleClickCard);
        this.root.querySelector("#close_modal_button").addEventListener("click", this.handleCloseModal);
        this.root.querySelector(".flip-image").addEventListener("click", this.handleFlipCard);
        this.root.querySelector("#product_terms_link").addEventListener("click", this.handleClickTerms);
    }

    /**
     * 
     * @param {*} event 
     */
    handleClickCard = (event) => {
        const customEvent = new CustomEvent("clickCard", {
            detail: {
                id: this.getAttribute("id"),
                title: this.getAttribute("title"),
                description: this.getAttribute("description"),
                size: this.getAttribute("size"),
                season: this.getAttribute("season"),
                extras: this.getAttribute("extras"),
                price: this.getAttribute("price"),
                discount: this.getAttribute("discount"),
                imagefront: this.getAttribute("imagefront"),
                imageback: this.getAttribute("imageback"),
            }
        });
        this.root.dispatchEvent(customEvent);
    }

    /**
     * 
     */
    handleCloseModal = (event) => {
        const customEvent = new Event("closeCard");
        this.root.dispatchEvent(customEvent);
    }

    /**
     * 
     */
    handleClickButton = () => {
        if(Number(this.getAttribute('discount')) !== 100){
            const api_url = "https://api.whatsapp.com/send?";
            const phone = "524491205859";
            const text = encodeURI(`Hello, i'm interested on the item:
            ${this.getAttribute("title")}
            ${this.getAttribute("description")}
            Price ${this.getAttribute("price")}
            Discount ${this.getAttribute("discount")}
            Size ${this.getSelectedSize()}
            `);
            const target_url = `${api_url}phone=${phone}&text=${text}`;
            window.open(target_url, "_blank").focus();
        }
    }

    /**
     * 
     */
    handleFlipCard = () => {
        this.root.querySelector(".flip-image").className = (this.flippedImageFlag?
            "flip-image flip-image-hover" :
            "flip-image");
        this.flippedImageFlag = !this.flippedImageFlag;
    }

    /**
     * 
     */
    handleClickTerms = () => {
        this.handleCloseModal();
        window.location.hash = "#terms-section";

        // NOT NEEDED FOR NOW
        // if (navigator.userAgent.match(/Chrome|AppleWebKit/)) { 
        //     window.location.href = "#terms-section";
        //     window.location.href = "#terms-section";
        // } else {
        //     window.location.hash = "#terms-section";
        // }
    }

    /**
     * 
     */
    handleLoadingState = () => {
        // this.root.querySelector("#loading-icon").className = "hidden";
        // this.root.querySelector("#product_card").className = "product-card-container";
    }

    /**
     * 
     */
    getSelectedSize = () => {
        return this.root.querySelector("#product_sizes").value
        ? this.root.querySelector("#product_sizes").value 
        : "S";
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
    get discount() {
        return this.getAttribute("discount");
    }

    set discount(value) {
        this.setAttribute("discount", value);
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
    get extras() {
        return this.getAttribute("extras");
    }

    set extras(value) {
        this.setAttribute("extras", value);
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

    /**
     * Callback for when element gets disconnected from DOM
     */
    disconnectedCallback() {
        this.root.removeEventListener("click", this.handleClickCard);
    }


}

export default ProductCard;
