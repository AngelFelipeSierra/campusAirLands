export class RegistroClientes extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/ `
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Registrate Ahora !
        </button>
        <a href="/listas-clientes.html"><button type="button" class="btn btn-primary" id="btn-tabla">Ver Clientes</button></a>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content modal-card">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Registro de Clientes</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form-clientes></form-clientes>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;
        //this.saveData();
    }
}
customElements.define("registro-clientes", RegistroClientes);