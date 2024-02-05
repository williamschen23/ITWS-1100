class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header id="Header">
            <ul>
                <li><a href="./labs/lab01/chenw23-lab1-AzureStatus.pdf">Lab 1</li>
                <li><a href="./labs/lab02/chenw23-WilliamsChen-resume.html">Lab 2</li>
                <li><a href="./labs/lab03/fileStructure.html">Lab 3</li>
            </ul>
            </header>
        `
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <footer id="Footer">
                <a href="./projects.html">Projects</a>
                <a href="./labs/lab02/chenw23-WilliamsChen-resume.html">Resume</a>
                <p class="wee"></p>
            </footer>
        `
    }
}


customElements.define('main-header', Header)
customElements.define('main-footer', Footer)