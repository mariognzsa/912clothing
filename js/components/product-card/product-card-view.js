
const template = document.createElement("template");
template.innerHTML =`
<div class="product-card-container">
    <img id="product_image" src="src/img/1/1_4.JPG" alt="Sweatshirt" class="product-image">
    <div class="product-card-info">
        <p id="product_name" class="text-title pc-info-item">Product name</p>
        <p id="product_price" class="text-subtitle pc-info-item">$389</p>
    </div>
</div>

<style>
    @import url("js/components/product-card/product-card-styles.css");
</style>
`;

export default template;