export class TablaClientes extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/ `
        <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Numero identificacion</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Telefono</th>    
                        <th>Fecha Nacimiento</th>
                        <th>Cuidad Origen</th>
                        <th>Pais Origen</th>
                        <th>Email</th>
                    </tr>
                </thead>
            </table>`
    }
}
customElements.define("tabla-clientes", TablaClientes);

