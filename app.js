import './Components/nav-menu/nav-menu.js';
import './Components/registro-clientes/registro-clientes.js';
import './Components/tabla -clientes/tabala-clientes.js';
import './Components/rutas-clientes/rutas-clientes.js';
import './Components/form-clientes/form-clientes.js';

document.addEventListener("DOMContentLoaded", () => {
    getClientes();
})

async function getClientes() {
    const url = "http://localhost:3000/clientes"
    try {
        const res = await fetch(url);
        console.log(res);
        const data = res.json();
        console.log(data.clientes);
        verClientes(data.clientes);
    } catch (error) {
        console.log(error)
    }
}

function verClientes(clientes){
    const tbody = document.querySelector("#lista-clientes");
    clientes.forEach(cliente => {
        const { numeroId, nombres, apellidos, telefono, fechaNacimiento, ciudadOrigen, paisOrigen, email} = cliente
        const rows = document.createElement('tr');
        rows.innerHTML = `
        <td>${numeroId}</td>
        <td>${nombres}</td>
        <td>${apellidos}</td>
        <td>${telefono}</td>
        <td>${fechaNacimiento}</td>
        <td>${ciudadOrigen}</td>
        <td>${paisOrigen}</td>
        <td>${email}</td>`;
        tbody.appendChild(rows)
    });
}