
const template = document.createElement("template");
template.innerHTML =`
<div class="shop-container">
    <div class="shop-top-container">
        <div class="dropdown-box">
            <div class="dropdown">
                <button class="dropbtn">
                    <span class="dropdown-text">Collections</span>
                    <i class="material-icons">expand_more</i>
                </button>
                <div class="dropdown-content">
                    <a id="filter-all" class="dropdown-text">All</a>
                    <a id="filter-s1" class="dropdown-text">Season 1</a>
                    <a id="filter-s2" class="dropdown-text">Season 2</a>
                    <a id="filter-s3" class="dropdown-text">Season 3</a>
                </div>
            </div>
        </div>
        <div class="search-box">
            <input id="search-input" type="text" placeholder="SEARCH" class="search-input">
            <button id="search-button" type="button" class="search-button">
                <i class="material-icons search-icon">search</i>
            </button>
        </div>
    </div>
    <div id="shop-product-container" class="shop-bottom-container">
    
    </div>
    <div id="myModal" class="modal">
        <div id="product-modal" class="modal-content">

        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    @import url("js/components/shop-container/shop-container-styles.css");
</style>
`;

export default template;
