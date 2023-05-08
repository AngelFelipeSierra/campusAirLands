export class NavMenu extends HTMLElement {
    constructor (){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/ `
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid navbar">
                <img class="nav-logo" src="/img/logoPrincipal-s.png" alt="">
                <a class="navbar-brand titulo" href="/index.html">Campus Air Lands</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link link" aria-current="page" href="/registro-clientes.html">Clientes</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link link" href="/rutas.html">Rutas</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link link" href="/compra-tiquetes.html">Tiquetes</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link link" href="#">Personal Aereo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}
customElements.define("nav-menu", NavMenu);