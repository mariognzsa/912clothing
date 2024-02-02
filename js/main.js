import ProductCard from "./components/product-card/product-card-viewModel.js";
import ShopContainer from "./components/shop-container/shop-container-viewModel.js";

const loadCustomComponents = () => {
    customElements.define("product-card", ProductCard);
    customElements.define("shop-container", ShopContainer);
}

document.addEventListener('DOMContentLoaded', () => {
    // HTML loaded
    
    loadCustomComponents();
});
