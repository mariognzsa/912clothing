
const navbar = document.createElement("navbar");
navbar.innerHTML =`
<header class="banner">
    <nav id="navbar" class="navbar sticky">
        <a class="navbar-link" href="#shop-section">shop</a>
        <a class="navbar-link" href="">about</a>    
    </nav>

    <div class="banner-text">
        <h1 class="logo-number">912</h1>
        <p class="logo-lettering">Nine Twelve</p>
    </div>
</header>

<style>
    @import url("js/components/navbar/navbar-styles.css");
</style>

`;

export default navbar;