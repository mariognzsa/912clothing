
const navbar = document.createElement("navbar");
navbar.innerHTML =`
<header class="banner">
    <nav class="navbar d-flex align-center sticky">
        <a class="navbar-link" href="#shop-section">shop</a>
        <a class="navbar-link" href="">about</a>    
    </nav>

    <div class="banner-text">
        <h1 class="logo-number">912</h1>
        <p class="logo-lettering">Nine Twelve</p>
    </div>

    <div class="social">
        <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
            </svg>
        </a> 
    </div>
</header>

<style>
    @import url("js/components/navbar/navbar-styles.css");
</style>

`;

export default navbar;