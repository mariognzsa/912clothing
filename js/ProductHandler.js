import data from "../src/data/products.json" assert { type: 'json' };
import { ProductModel } from "./models/ProductModel.js";

export default class ProductHandler {
    products;

    constructor() {
        this.products = [];
    }

    /**
     * Initial setup of products
     */
    getProducts() {
        if(data){
            data.forEach((item) => {
                let product = new ProductModel(item);
                this.products.push(product);
            });
        }
    }

    /**
     * Function that adds products listing to HTML container
     * @param {String} containerId 
     */
    addProductsOnContainer(containerId) {
        if(this.products?.length > 0){
            this.products.forEach((product) => {
                document.getElementById(containerId).appendChild(this.generateNodeForProduct(product));
            });
        }
    }

    /**
     * Function that generates HTML element with product card information
     * @param {ProductModel} product 
     * @returns {HTMLDivElement} 
     */
    generateNodeForProduct(product) {
        const node = document.createElement("div");
        node.className = "el-wrapper";
        let boxup = document.createElement("div");
        boxup.className = "box-up";
        let image = document.createElement("img");
        image.className = "img";
        image.src = product.images[0]; // TODO: implement multiple image slider
        let imgInfo = document.createElement("div");
        imgInfo.className = "img-info";
        let infoInner = document.createElement("div");
        infoInner.className = "info-inner";
        let title = document.createElement("span");
        title.className = "p-name";
        title.appendChild(document.createTextNode(product.title));
        let description = document.createElement("span");
        description.className = "p-company";
        description.appendChild(document.createTextNode(product.description));
        infoInner.appendChild(title);
        infoInner.appendChild(description);
        imgInfo.appendChild(infoInner);
        boxup.appendChild(image);
        boxup.appendChild(imgInfo);
        node.appendChild(boxup);
        let boxdown = document.createElement("div");
        boxdown.className = "box-down";
        let hbg = document.createElement("div");
        hbg.className = "h-bg";
        let hbgInner = document.createElement("div");
        hbgInner.className = "h-bg-inner";
        let cart = document.createElement("a");
        cart.className = "cart";
        cart.href = "#";
        let price = document.createElement("span");
        price.className = "price";
        price.appendChild(document.createTextNode("$" + product.price));
        let addToCart = document.createElement("span");
        addToCart.className = "add-to-cart";
        let addCartTxt = document.createElement("span");
        addCartTxt.className = "txt";
        addCartTxt.appendChild(document.createTextNode("Add to cart"));
        addToCart.appendChild(addCartTxt);
        cart.appendChild(price);
        cart.appendChild(addToCart);
        hbg.appendChild(hbgInner);
        boxdown.appendChild(hbg);
        boxdown.appendChild(cart);
        node.appendChild(boxdown);
        return node;
    }

}
