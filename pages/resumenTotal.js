document.addEventListener("DOMContentLoaded", () => {
  mostrarFormulario();
  renderizarTabla();

  document.getElementById("descargarBtn").addEventListener("click", confirmarDescarga);
  document.getElementById("btnGuardarDatos")?.addEventListener("click", guardarDatosEnAPI);
});

// --- MOSTRAR DATOS DEL FORMULARIO ---
function mostrarFormulario() {
  const contenedor = document.getElementById("resumenFormulario");
  const datos = JSON.parse(localStorage.getItem("datosFormulario"));

  console.clear();
  console.log("Datos cargados desde localStorage:", datos);

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
          <td>${datos.fecha || "-"}</td>
          <td>${datos.comida || "-"}</td>
          <td>${datos.personas || "-"}</td>
          <td>${datos.albergue || '<span style="color:red;">No registrado</span>'}</td>
        </tr>
      </tbody>
    </table>
  `;
}

// --- RENDERIZAR TABLA DE PRODUCTOS ---
const categorias = [
  { clave: "carnes", nombre: "Carnes" },
  { clave: "proteinas", nombre: "Proteínas" },
  { clave: "verduras", nombre: "Verduras" },
  { clave: "oloresSeleccionados", nombre: "Olores" },
  { clave: "abarrotesSeleccionados", nombre: "Abarrotes" },
  { clave: "limpiezaSeleccionados", nombre: "Limpieza" }
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
    tr.innerHTML = <td colspan="4" style="text-align: center;">No hay productos registrados.</td>;
    tbody.appendChild(tr);
  }
}

// --- CONFIRMAR DESCARGA ---
function confirmarDescarga() {
  const confirmar = confirm("¿Deseas confirmar la descarga del resumen?");
  if (confirmar) {
    alert("Descarga en proceso... (aquí podrías implementar la descarga en PDF o CSV)");
  }
}

// --- POSTEAR DATOS A LA API ---
async function guardarDatosEnAPI() {
  const datosFormulario = JSON.parse(localStorage.getItem("datosFormulario"));
  if (!datosFormulario || !datosFormulario.albergue) {
    alert("Faltan datos del formulario o nombre del albergue.");
    return;
  }
  try {
    // Conseguir el ID del albergue
    const respuesta = await axios.get(https://apiintegrador-production-8ef8.up.railway.app/api/albergues/consulta/nombre/${encodeURIComponent(datosFormulario.albergue)});
    const albergueEncontrado = respuesta.data[0];
    if (!albergueEncontrado) throw new Error("Albergue no encontrado");

    const idAlbergue = albergueEncontrado.idAlbergue;

    // Armar el array de productos
    const productos = [];
    categorias.forEach(({ clave }) => {
      const items = cargarDatos(clave);
      items.forEach((item) => {
        productos.push({
          producto: item.producto || item.tipo || item.nombre || "N/A",
          unidad: item.unidad || "-",
          cantidad: item.cantidad || "-",
          categoria: clave
        });
      });
    });

    // POST principal
    const response = await axios.post("https://apiintegrador-production-8ef8.up.railway.app/api/consumibles", {
      fechaCreacion: datosFormulario.fecha,
      tipoComida: datosFormulario.comida,
      cantidadPersonas: datosFormulario.personas,
      idAlbergue: idAlbergue,
      productos: productos 
    });

    alert("Datos guardados exitosamente en la API.");
    console.log("Respuesta:", response.data);
  } catch (error) {
    console.error("Error al guardar en la API:", error);
    alert("Ocurrió un error al guardar los datos. Revisa la consola.");
  }
}

window.addEventListener("pageshow", () => {
  mostrarFormulario();
});