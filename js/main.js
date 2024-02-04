import ProductCard from "./components/product-card/product-card-viewModel.js";
import Navbar from "./components/navbar/navbar-viewModel.js";
import data from "../src/data/products.json" assert { type: 'json' };

const loadCustomComponents = () => {
    customElements.define("product-card", ProductCard);
    customElements.define("navbar-card", Navbar);
}

document.addEventListener('DOMContentLoaded', () => {
    // HTML loaded
    
    loadCustomComponents();

    // provisional way of showing products
    const container = document.querySelector(".shop-container");
    data.forEach((item) => {
        let product = document.createElement("product-card");
        product.productname = item.title;
        product.productprice = `$ ${item.price}.00`;
        product.productimage = item.images[0];
        container.append(product);
    });

});
