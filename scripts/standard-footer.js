class myStandardFooter extends HTMLElement {
    connectedCallback() { 
        this.innerHTML = 
        `   <footer>
        <section id="Footer-Nav">
            <nav> 
                <li><a href="Homepage.html"> Home </a> </li>
                <li> Portfolio </li>
                <li> Contact </li>
            </nav>
        </section>



        <section id="footer-social-media">
            <ul>
                <li>
                    <span class="icon"><i class="fa-brands fa-github"></i><a href=""></a></span>
                    <span class="text"> Git-Hub</span>
                </li>
                <li>
                    <span class="icon"><i class="fa-brands fa-linkedin-in"></i><a href=""></a></span>
                    <span class="text"> Linkedin</span>
                </li> 
            </ul>
        </section>

    </footer>`

    }
}

customElements.define("my-standard-footer", myStandardFooter)