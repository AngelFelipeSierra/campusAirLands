export class FormClientes extends HTMLElement {
    constructor (){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/ `
        <form id="formCliente">
            <div class="mb-3">
                <label for="numeroId" class="form-label">Numero de identificacion</label>
                <input type="number" class="form-control" id="numeroId" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="nombres" class="form-label">Nombres</label>
                <input type="text" class="form-control" id="nombres">
            </div>
            <div class="mb-3">
                <label for="apellidos" class="form-label">Apellidos</label>
                <input type="text" class="form-control" id="apellidos">
            </div>
            <div class="mb-3">
                <label for="telefono" class="form-label">Nro Telefono</label>
                <input type="number" class="form-control" id="telefono">
            </div>
            <div class="mb-3">
                <label for="fechaNacimiento" class="form-label">Fecha Nacimiento</label>
                <input type="date" class="form-control" id="fechaNacimiento">
            </div>
            <div class="mb-3">
                <label for="ciudadOrigen" class="form-label">Cuidad origen</label>
                <input type="text" class="form-control" id="ciudadOrigen">
            </div>
            <div class="mb-3">
                <label for="paisOrigen" class="form-label">Pais origen</label>
                <input type="text" class="form-control" id="paisOrigen">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Correo</label>
                <input type="email" class="form-control" id="email">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`
        this.saveData();
    }
    saveData = () => {
        let formulario = document.querySelector("#formCliente");
        formulario.addEventListener("submit", (e)=>{
            e.preventDefault()
            let data = Object.fromEntries(new FormData(e.target))
            //opc[e.submitter.dataset.accion](data);
            console.log(JSON.stringify(data));
        })
    }
}
customElements.define("form-clientes", FormClientes);

