
import navbar from "./navbar-view.js";

/**
 * Custom component for handling and displaying 
 * navbar on the shop
 * 
 * <navbar-card></navbar-card>
 */
class Navbar extends HTMLElement {
    constructor() {
        super();
        // const shadowRoot = this.attachShadow({mode: "closed"});
        this.root = this.attachShadow({ mode: "closed" });
        let clone = navbar.cloneNode(true);
        this.root.append(clone);
        
        this.registerEventListeners();
        this.registerScrollListener();
    }

    registerScrollListener() {
        document.addEventListener('scroll', () => {
            const nav = this.root.querySelector('#navbar');
            //const links = this.root.querySelectorAll('a');
            const linkShop = this.root.querySelector('#navbar_link_shop');
            const linkAbout = this.root.querySelector('#navbar_link_about');
            const logo = this.root.querySelector('#navbar_logo');
            const svgPaths = this.root.querySelectorAll('#menu-svg path');
            const logoResponsive = this.root.querySelector('#navbar_responsive_logo');

            if(window.scrollY > 100){
                nav.className = 'navbar sticky scrolled';
                linkShop.className = 'navbar-link scrolledText';
                linkAbout.className = 'navbar-link scrolledText';
                logo.className = 'logo scrolledLogo';
                logoResponsive.className ='scrolledText';

                svgPaths.forEach(path => {
                    path.setAttribute('stroke', '#000');
                });
            } else {
                nav.className = 'navbar sticky';
                linkShop.className = 'navbar-link';
                linkAbout.className = 'navbar-link';
                logo.className = 'logo';
                logoResponsive.className ='navbar-responsive-logo';
                
                svgPaths.forEach(path => {
                    path.setAttribute('stroke', '#fff');
                });
            }
        });
    }

    registerEventListeners() {
        this.root.querySelector("#menu_open").addEventListener("click", this.handleOpenEvent);
        this.root.querySelector("#menu_close").addEventListener("click", this.handleCloseEvent);
        this.root.querySelector("#link-shop").addEventListener("click", this.handleShopLinkClick);
        this.root.querySelector("#link-logo").addEventListener("click", this.handleLogoLinkClick);
    }

    /**
     * 
     * @param {Event} event 
     */
    handleOpenEvent = (event) => {
        const modal = this.root.querySelector('#modal');
        modal.className = 'modal open-menu';
    }

    /**
     * 
     * @param {Event} event 
     */
    handleCloseEvent = (event) => {
        const modal = this.root.querySelector('#modal');
        modal.className = 'modal close-menu';
    }
    
    /**
     * 
     * @param {Event} event 
     */
    handleShopLinkClick = (event) => {
        const modal = this.root.querySelector('#modal');
        modal.className = 'modal close-menu';
    }

    /**
     * 
     * @param {Event} event 
     */
    handleLogoLinkClick = (event) => {
        const modal = this.root.querySelector('#modal');
        modal.className = 'modal close-menu';
    }
}

export default Navbar;