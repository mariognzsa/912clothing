
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

        document.addEventListener('scroll', () => {
            const nav = this.root.querySelector('#navbar');
            const links = this.root.querySelectorAll('a');
            const logo = this.root.querySelector('#navbar_logo');
            const svgPaths = this.root.querySelectorAll('#menu-svg path');
            const logoResponsive = this.root.querySelector('#navbar_responsive_logo');

            if(window.scrollY > 100){
                nav.className = 'navbar sticky scrolled';
                logo.className = 'logo scrolledLogo';
                logoResponsive.className ='scrolledText';

                links.forEach(element => {
                    element.className = 'navbar-link scrolledText';
                });

                svgPaths.forEach(path => {
                    path.setAttribute('stroke', '#000');
                });
            } else {
                nav.className = 'navbar sticky';
                logo.className = 'logo';
                logoResponsive.className ='navbar-responsive-logo';

                links.forEach(element => {
                    element.className = 'navbar-link';
                });
                
                svgPaths.forEach(path => {
                    path.setAttribute('stroke', '#fff');
                });
            }
        });
    }
}

export default Navbar;