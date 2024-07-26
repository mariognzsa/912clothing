const navbar = document.createElement("navbar");
navbar.innerHTML =`
<style>
    @import url("js/components/navbar/navbar-styles.css");
</style>
<header class="banner">
    <nav id="navbar" class="navbar sticky">   
        <a id="navbar_link_shop" class="navbar-link" href="#shop-section">shop</a>
        <a id="navbar_logo" class="logo" href="#navbar-section">
            <h1 class="navbar-logo-number">912</h1>
            <h4 class="navbar-logo-lettering">nine twelve</h4>
        </a>
        <a id="navbar_link_about" class="navbar-link" href="#gallery-section">about</a>

        <div class="navbar-responsive">
            <a id="navbar_responsive_logo" class="navbar-responsive-logo none" href="#navbar-section">
                <h1 class="navbar-logo-number">912</h1>
                <h4 class="navbar-logo-lettering">nine twelve</h4>
            </a>

            <button class="menu-button" type="button" id="menu_open">
                <svg id="menu-svg" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 8l16 0" />
                    <path d="M4 16l16 0" />
                </svg>
            </button>
        </div>
    </nav>

    <div class="banner-text">
        <h2 class="logo-number">912</h2>
        <p class="logo-lettering">Nine Twelve</p>
    </div>

    <div class="modal" id="modal">
        <div class="modal-menu">
            <a id="link-logo" class="modal-logo" href="#navbar-section">
                <h1 class="modal-logo-number">912</h1>
                <h4 class="modal-logo-lettering">nine twelve</h4>
            </a>
            <a id="link-shop" href="#shop-section">Shop</a>
            <a id="link-about" href="#gallery-section">About</a>
            <button class="close" type="button" id="menu_close">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
</header>

`;

export default navbar;
