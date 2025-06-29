document.addEventListener("DOMContentLoaded", () => {
    mostrarFormulario();
    renderizarTabla();
    document.getElementById("descargarBtn").addEventListener("click", confirmarDescarga);
});

function mostrarFormulario() {
    const contenedor = document.getElementById("resumenFormulario");
    // Asumo que 'datosFormulario' se guarda en tu formulario.html
    const datos = JSON.parse(localStorage.getItem("datosFormulario"));

    if (!datos) {
        contenedor.innerHTML = "<p><strong>No hay información del formulario registrada.</strong></p>";
        return;
    }

    contenedor.innerHTML = `
        <h2>Datos del Formulario</h2>
        <table class="tabla-horizontal">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Tipo de Comida</th>
                    <th>Cantidad de Personas</th>
                    <th>Nombre del Albergue</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${datos.fecha}</td>
                    <td>${datos.comida}</td>
                    <td>${datos.personas}</td>
                    <td>${datos.albergue}</td>
                </tr>
            </tbody>
        </table>
    `;
}

// --- CLAVES CORREGIDAS PARA QUE COINCIDAN CON LAS DE GUARDADO EN LOCALSTORAGE ---
// Este es el fragmento clave en tu resumenTotal.js
const categorias = [
    { clave: "carnes", nombre: "Carnes" },
    { clave: "proteinas", nombre: "Proteínas" },
    { clave: "verduras", nombre: "Verduras" },
    { clave: "oloresSeleccionados", nombre: "Olores" },      // ¡Clave corregida!
    { clave: "abarrotesSeleccionados", nombre: "Abarrotes" },// ¡Clave corregida!
    { clave: "limpiezaSeleccionados", nombre: "Limpieza" }   // ¡Clave corregida!
];

function cargarDatos(categoria) {
    const datos = JSON.parse(localStorage.getItem(categoria));
    return Array.isArray(datos) ? datos : [];
}

function renderizarTabla() {
    const tbody = document.querySelector("#tablaResumen tbody");
    tbody.innerHTML = ""; // Limpia la tabla antes de renderizar

    let total = 0;

    categorias.forEach(({ clave, nombre }) => {
        const items = cargarDatos(clave);
        items.forEach((item) => {
            // Asegura que las propiedades se lean correctamente (puede ser 'producto', 'tipo', 'nombre')
            const producto = item.producto || item.tipo || item.nombre || "N/A";
            const unidad = item.unidad || "-";
            const cantidad = item.cantidad || "-";

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${nombre}</td>
                <td>${producto}</td>
                <td>${unidad}</td>
                <td>${cantidad}</td>
            `;
            tbody.appendChild(tr);
            total++;
        });
    });

    if (total === 0) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td colspan="4" style="text-align: center;">No hay productos registrados.</td>`;
        tbody.appendChild(tr);
    }
}

function confirmarDescarga() {
    const confirmar = confirm("¿Deseas confirmar la descarga del resumen?");
    if (confirmar) {
        alert("Descarga en proceso... (aquí podrías implementar la descarga en PDF o CSV)");
        // Lógica para generar y descargar un archivo (CSV, PDF, etc.)
        // Esto es más complejo y requeriría librerías adicionales o lógica de backend
    }
}