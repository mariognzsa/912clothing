//<h1 id="navbar-logo" class="logo">912</h1>
//<img src="../favicon-32x32.png" id="navbar-logo" class="logo" alt="">

const navbar = document.createElement("navbar");
navbar.innerHTML =`
<header class="banner">
    <nav id="navbar" class="navbar sticky">   
        <a id="navbar_link_shop" class="navbar-link" href="#shop-section">shop</a>
        <div id="navbar_logo" class="logo">
            <h1>912</h1>
            <h4 class="navbar-logo-lettering">nine twelve</h4>
        </div>
        <a id="navbar_link_about" class="navbar-link" href="">about</a>

        <div class="navbar-responsive">
            <div id="navbar_responsive_logo" class="navbar-responsive-logo">
                <h1>912</h1>
                <h4 class="navbar-logo-lettering">nine twelve</h4>
            </div>

            <div class="menu-button">
                <svg id="menu-svg" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 8l16 0" />
                    <path d="M4 16l16 0" />
                </svg>
            </div>
        </div>
    </nav>

    <div class="banner-text">
        <h2 class="logo-number">912</h2>
        <p class="logo-lettering">Nine Twelve</p>
    </div>
</header>

<style>
    @import url("js/components/navbar/navbar-styles.css");
</style>

`;

export default navbar;