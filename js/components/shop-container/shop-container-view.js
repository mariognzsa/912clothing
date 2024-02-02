
const template = document.createElement("template");
template.innerHTML =`
<div class="shop-container">
    <div class="shop-top-container">
        <div class="search-box">
            <input id="search-input" type="text" placeholder="SEARCH" class="search-input">
            <button id="search-button" type="button" class="search-button">
                <i class="material-icons search-icon">search</i>
            </button>
        </div>
    </div>
    <div id="shop-product-container" class="shop-bottom-container">
    
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    @import url("js/components/shop-container/shop-container-styles.css");
</style>
`;

export default template;
