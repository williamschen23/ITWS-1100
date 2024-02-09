class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="Header">
                <nav>
                    <a href="../../index.html"><img src="../../resources/home-icon.png" alt="Home Button"></a>
                    <p>Labs</p>
                    <ul>
                        <li><a href="../projects.html">Projects</a></li>
                    </ul>
                </nav>
            </header>
        `
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let script = document.getElementsByTagName('script');
        let src_js = script[script.length-1].src;
        let src = src_js.substring(0, src_js.length-12);
        this.innerHTML = `
            <Footer class="Footer">
                <p>${window.location.pathname}</p>
                <ul>
                    <li><a href="https://github.com/williamschen23"><img src="${src}/github-mark-white.png" alt="Home Button"></a><li>
                    <li><a href="mailto:chenwill2005@gmail.com"><img src="${src}/gmail_icon.png" alt="Home Button"></a><li>
                </ul>
            </Footer>
        `
    }
}


customElements.define('main-header', Header)
customElements.define('main-footer', Footer)