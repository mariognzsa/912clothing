
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
        
            if(window.scrollY > 100){
                nav.className = 'navbar sticky scrolled';
                links.forEach(element => {
                    element.className = 'navbar-link scrolledText';
                });
            } else {
                nav.className = 'navbar sticky';
                links.forEach(element => {
                    element.className = 'navbar-link';
                });
            }
        });
    }
}

export default Navbar;