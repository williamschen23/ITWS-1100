class MyHeader extends HTMLElement {
    connectCallback() {
        this.innerHTML = `
        <p>Hello</p>
        <header>
            <a href="./projects.html">Projects</a>
            <a href="./labs/lab02/chenw23-WilliamsChen-resume.html">Resume</a>
        </header>
        `
    }
}

customElements.define('Main-Header', MyHeader)