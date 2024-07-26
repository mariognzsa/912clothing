
const template = document.createElement("template");
template.innerHTML =`
<style>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    @import url("js/components/shop-container/shop-container-styles.css");
</style>
<div class="shop-container">
    <div class="shop-top-container">
        <div class="dropdown-box">
            <div id="dropdown-collections" class="dropdown">
                <button class="dropbtn">
                    <span class="dropdown-text">Collections</span>
                    <i class="material-icons dropdown-icon">expand_more</i>
                </button>
                <div id="dropdown-collections-content" class="dropdown-content">
                    <a id="filter-s4" class="dropdown-text">Season 4</a>
                    <a id="filter-s3" class="dropdown-text">Season 3</a>
                    <a id="filter-s2" class="dropdown-text">Season 2</a>
                    <a id="filter-s1" class="dropdown-text">Season 1</a>
                </div>
            </div>
        </div>
        <div class="search-box">
            <input id="search-input" type="text" placeholder="SEARCH" class="search-input">
            <button id="search-button" type="button" class="search-button">
                <i class="material-icons search-icon">search</i>
            </button>
        </div>
        <p id="search_season" class="badge-search-season">Search season</p>
    </div>
    <div id="shop-product-container" class="shop-bottom-container">
    
    </div>
    <p class="terms-container">
        BY MAKING A PURCHASE FROM NINE TWELVE, CUSTOMERS ACCEPT AND AGREE TO BE BOUND BY THESE <a href="#terms-section">TERMS AND CONDITIONS</a>.
    </p>
    <div id="myModal" class="modal">
        <div id="product_modal" class="modal-content">

        </div>
    </div>
</div>

`;

export default template;
