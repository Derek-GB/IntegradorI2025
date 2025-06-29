 // Claves y nombres para mostrar
  const categorias = [
    { clave: "carnes", nombre: "Carnes" },
    { clave: "proteinas", nombre: "Proteínas" },
    { clave: "verduras", nombre: "Verduras" },
    { clave: "olores", nombre: "Olores" },
    { clave: "abarrotes", nombre: "Abarrotes" },
    { clave: "limpieza", nombre: "Limpieza" }
  ];

  // Función para cargar datos de cada categoría
  function cargarDatos(categoria) {
    const datos = JSON.parse(localStorage.getItem(categoria));
    return Array.isArray(datos) ? datos : [];
  }

  // Guardar datos
  function guardarDatos(categoria, datos) {
    localStorage.setItem(categoria, JSON.stringify(datos));
  }

  // Renderiza la tabla combinada
  function renderizarTabla() {
    const tbody = document.querySelector("#tablaResumen tbody");
    tbody.innerHTML = "";

    let totalItems = 0;

    categorias.forEach(({clave, nombre}) => {
      const items = cargarDatos(clave);
      items.forEach((item, index) => {
        totalItems++;
        // Producto puede estar en .producto, .tipo o .nombre
        const producto = item.producto || item.tipo || item.nombre || "";
        const unidad = item.unidad || "";
        const cantidad = item.cantidad || "";

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${nombre}</td>
          <td>${producto}</td>
          <td>${unidad}</td>
          <td>${cantidad}</td>
          <td>
            <button class="btn-eliminar" data-categoria="${clave}" data-index="${index}" aria-label="Eliminar">
              <span class="material-icons">delete</span>
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    });

    if (totalItems === 0) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="5" style="text-align:center;">No hay productos agregados aún.</td>`;
      tbody.appendChild(tr);
    }
  }

  // Eliminar fila
  function eliminarFila(event) {
    if (!event.target.closest(".btn-eliminar")) return;
    const btn = event.target.closest(".btn-eliminar");
    const categoria = btn.dataset.categoria;
    const index = Number(btn.dataset.index);

    if (categoria && !isNaN(index)) {
      let datos = cargarDatos(categoria);
      datos.splice(index, 1);
      guardarDatos(categoria, datos);
      renderizarTabla();
    }
  }

  // Inicialización
  document.addEventListener("DOMContentLoaded", () => {
    renderizarTabla();
    document.body.addEventListener("click", eliminarFila);
  });