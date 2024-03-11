
const template = document.createElement("template");
template.innerHTML =`
<div class="product-card-container">
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
        <p id="product_name" class="text-title pc-info-item">Product name</p>
        <p id="product_description" class="text-subtitle pc-info-item">Item description</p>
        <p id="product_price" class="text-subtitle pc-info-item">$0</p>
        <div class="pc-info-item">
            <a id="product_button" target="_blank" href="#" class="product-button pc-info-item">Order now</a>
        </div>
    </div>
</div>

<style>
    @import url("js/components/product-card/product-card-styles.css");
</style>
`;

export default template;
