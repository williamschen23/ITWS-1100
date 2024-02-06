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
            <Footer class="Footer">
                <p>Contacts: </p>
                <ul>
                    <li><a href="https://github.com/williamschen23"><img src="./resources/github-mark-white.png" alt="Home Button"></a><li>
                    <li><a href="mailto:chenwill2005@gmail.com"><img src="./resources/gmail_icon.png" alt="Home Button"></a><li>
                </ul>
            </Footer>
        `
    }
}


customElements.define('main-header', Header)
customElements.define('main-footer', Footer)