import ProductCard from "./components/product-card/product-card-viewModel.js";
import ShopContainer from "./components/shop-container/shop-container-viewModel.js";
import GalleryContainer from "./components/gallery-container/gallery-container-viewModel.js";
import TermsContainer from "./components/terms-container/terms-container-viewModel.js";
import Navbar from "./components/navbar/navbar-viewModel.js";
import Footer from "./components/footer/footer-viewModel.js";

const loadCustomComponents = () => {
    customElements.define("product-card", ProductCard);
    customElements.define("shop-container", ShopContainer);
    customElements.define("gallery-container", GalleryContainer);
    customElements.define("terms-container", TermsContainer);
    customElements.define("navbar-card", Navbar);
    customElements.define("footer-card", Footer);
};

document.addEventListener('DOMContentLoaded', () => {
    loadCustomComponents();
    $("#loading_spinner").show();
    window.onload = () => {
        // console.log("Page loaded");
        $('#loading_spinner').hide();
        $('#app').show();
    }
});
