
const template = document.createElement("template");
template.innerHTML =`
<div class="product-card-container">
    <div id="product_modal_top" class="modal-header hidden">
        <button id="close_modal_button" type="button" class="close-modal-button">
            <i class="material-icons search-icon">close</i>
        </button>
    </div>
    <div class="flip-image">
        <div id="product_image" class="flip-image-inner">
            <div id="product_image_front_container" class="flip-image-front">
                <img id="product_image" src="src/img/1/1_front.jpg" alt="Sweatshirt" class="product-image">
            </div>
            <div id="product_image_back_container" class="flip-image-back">
                <img id="product_image_back" src="src/img/1/1_back.jpg" alt="Sweatshirt back" class="product-image">
            </div>
        </div>
    </div>
    <div class="product-card-info">
        <div id="product_info_top" class="pc-top-container">
            <p id="product_name" class="text-title pc-top-item">Product name</p>
            <p id="product_season" class="text-title pc-season-item">Product season</p>
        </div>
        <p id="product_description" class="text-subtitle pc-info-item hidden">Item description</p>
        <p id="product_extra" class="text-title pc-extra-item hidden">+ Sticker pack</p>
        <p id="product_price" class="text-subtitle pc-info-item">$0</p>
        <p id="product_size_text" class="pc-info-item-bold hidden">Available sizes</p>
        <p id="product_sizes" class="pc-info-item-bold"></p>
        <div id="product_button_container" class="pc-info-item">
            <a id="product_button" target="_blank" href="#" class="product-button pc-info-item">Order now</a>
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    @import url("js/components/product-card/product-card-styles.css");
</style>
`;

export default template;
