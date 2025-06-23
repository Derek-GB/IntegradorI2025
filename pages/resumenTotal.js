document.addEventListener("DOMContentLoaded", () => {
  mostrarFormulario();
  renderizarTabla();
  document.getElementById("descargarBtn").addEventListener("click", confirmarDescarga);
});

function mostrarFormulario() {
  const contenedor = document.getElementById("resumenFormulario");
  const datos = JSON.parse(localStorage.getItem("datosFormulario"));

  if (!datos) {
    contenedor.innerHTML = "<p><strong>No hay información del formulario registrada.</strong></p>";
    return;
  }

  contenedor.innerHTML = `
    <p><strong>Fecha:</strong> ${datos.fecha}</p>
    <p><strong>Tipo de comida:</strong> ${datos.comida}</p>
    <p><strong>Cantidad de personas:</strong> ${datos.personas}</p>
    <p><strong>Nombre del albergue:</strong> ${datos.albergue}</p>
  `;
}

const categorias = [
  { clave: "carnes", nombre: "Carnes" },
  { clave: "proteinas", nombre: "Proteínas" },
  { clave: "verduras", nombre: "Verduras" },
  { clave: "olores", nombre: "Olores" },
  { clave: "abarrotes", nombre: "Abarrotes" },
  { clave: "limpieza", nombre: "Limpieza" }
];

function cargarDatos(categoria) {
  const datos = JSON.parse(localStorage.getItem(categoria));
  return Array.isArray(datos) ? datos : [];
}

function renderizarTabla() {
  const tbody = document.querySelector("#tablaResumen tbody");
  tbody.innerHTML = "";

  let total = 0;

  categorias.forEach(({ clave, nombre }) => {
    const items = cargarDatos(clave);
    items.forEach((item) => {
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
    // Implementar lógica de descarga si deseas
  }
}


