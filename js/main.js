import ProductCard from "./components/product-card/product-card-viewModel.js";
import ShopContainer from "./components/shop-container/shop-container-viewModel.js";
import Navbar from "./components/navbar/navbar-viewModel.js";
import data from "../src/data/products.json" assert { type: 'json' };

const loadCustomComponents = () => {
    customElements.define("product-card", ProductCard);
    customElements.define("shop-container", ShopContainer);
    customElements.define("navbar-card", Navbar);
};

document.addEventListener('DOMContentLoaded', () => {
    // HTML loaded
    
    loadCustomComponents();
});
