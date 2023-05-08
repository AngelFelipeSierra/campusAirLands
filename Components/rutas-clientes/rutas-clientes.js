export class RutasClientes extends HTMLElement {
    constructor (){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/ `
        <form id="formRutas">
            <div class="mb-3">
                <label for="nombreRuta" class="form-label">Nombre de la ruta</label>
                <input required type="text" class="form-control" id="nombreRuta">
            </div>
            <div class="mb-3">
                <label for="ciudadOrigen" class="form-label">cuidad origen</label>
                <input required type="text" class="form-control" id="ciudadOrigen">
            </div>
            <div class="mb-3">
                <label for="cuidadDestino" class="form-label">cuidad destino</label>
                <input required type="text" class="form-control" id="cuidadDestino">
            </div>
            <div class="mb-3">
                <label for="millasTotales" class="form-label">total millas de la ruta</label>
                <input required type="number" class="form-control" id="millasTotales">
            </div>
            <div class="mb-3">
                <label for="valorMilla" class="form-label">valor de la milla por ruta</label>
                <input value="1000" required type="text" class="form-control" id="valorMilla">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="submit" class="btn btn-primary">Ver Rutas</button>
        </form>`

        this.saveData();
    }
    saveData = () => {
        let formulario = document.querySelector("#formRutas");
        formulario.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            //opc[e.submitter.dataset.accion](data);
            console.log(JSON.stringify(data));
        })
    }
}
customElements.define("rutas-clientes", RutasClientes);