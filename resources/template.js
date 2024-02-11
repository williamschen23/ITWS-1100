class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // current paththat calls the script
        let path = window.location.pathname;

        // takes out the path until the / 
        // edge case: default / will just become nothing
        let currDir = path.substring(0, path.lastIndexOf("/"));

        // configuring what file we are in and what the root directory
        // of the document is.
        let fileStructure = "Home";
        let rootDir = currDir;
        if(path.includes("labs")) {
            if(path.includes("projects")){
                rootDir = currDir + "/..";
                fileStructure = "Home → Projects"
            } else {
                rootDir = currDir + "/../..";
                fileStructure = "Home → Projects → " + currDir.substring(currDir.lastIndexOf("/")+1);
            }
        }

        this.innerHTML = `
            <header class="Header">
                <nav>
                    <a href="${rootDir}/index.html"><img src="${rootDir}/resources/home-icon.png" alt="Home Button"></a>
                    <p class=>${fileStructure}</p>
                    <ul>
                        <li><a href="${rootDir}/labs/projects.html">Projects</a></li>
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
        // takes the source directory of the script file, which is 
        // a constant call to this file path
        let script = document.getElementsByTagName('script');
        let src_js = script[script.length-1].src;
        
        // takes out the path to the last /
        let src = src_js.substring(0, src_js.lastIndexOf("/"));

        this.innerHTML = `
            <footer class="Footer">
                <nav>
                    <p><b>Contacts:</b></p>
                    <ul>
                        <li><a href="https://github.com/williamschen23"><img src="${src}/github-mark-white.png" alt="Home Button"></a><li>
                        <li><a href="mailto:chenwill2005@gmail.com"><img src="${src}/gmail_icon.png" alt="Home Button"></a><li>
                    </ul>
                </nav>
            </footer>
        `
    }
}


customElements.define('main-header', Header)
customElements.define('main-footer', Footer)