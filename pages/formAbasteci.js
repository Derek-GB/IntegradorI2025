// Función para crear fila en tabla con botón eliminar
function crearFila(datos, tablaId) {
  const tabla = document.getElementById(tablaId);
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${datos[0]}</td>
    <td>${datos[1]}</td>
    <td>${datos[2]}</td>
    <td><button type="button" class="btn-eliminar"><span class="material-icons">delete</span></button></td>
  `;
  fila.querySelector('.btn-eliminar').addEventListener('click', () => {
    tabla.removeChild(fila);
    actualizarLocalStorage(tablaId);
  });
  tabla.appendChild(fila);
}

// Función para agregar producto de forma genérica sin alertas
function agregarProducto(tipoId, unidadId, cantidadId, tablaId, claveLocalStorage = null) {
  const tipo = document.getElementById(tipoId).value.trim();
  const unidad = document.getElementById(unidadId).value.trim();
  const cantidad = document.getElementById(cantidadId).value.trim();

  if (tipo && unidad && cantidad && parseInt(cantidad) > 0) {
    crearFila([tipo, unidad, cantidad], tablaId);

    if (claveLocalStorage) {
      let datos = JSON.parse(localStorage.getItem(claveLocalStorage)) || [];
      datos.push({ tipo, unidad, cantidad });
      localStorage.setItem(claveLocalStorage, JSON.stringify(datos));
    }

    document.getElementById(tipoId).value = "";
    document.getElementById(unidadId).value = "";
    document.getElementById(cantidadId).value = "";
  }
}

// Función para actualizar localStorage de carnes y proteínas
function actualizarLocalStorage(tablaId) {
  const tabla = document.getElementById(tablaId);
  const filas = tabla.querySelectorAll('tr');
  const productos = [];
  filas.forEach(fila => {
    const celdas = fila.querySelectorAll('td');
    if (celdas.length === 4) {
      productos.push({
        tipo: celdas[0].textContent,
        unidad: celdas[1].textContent,
        cantidad: celdas[2].textContent
      });
    }
  });
  const claves = {
    'tablaResumen': 'carnes',
    'tablaProteina': 'proteinas',
    'tablaVerdura': 'verduras',
    'tablaOlor': 'olores',
    'tablaAbarroteResumen': 'abarrotes',
    'tablaLimpieza': 'limpieza'
  };
  if (claves[tablaId]) {
    localStorage.setItem(claves[tablaId], JSON.stringify(productos));
  }
}

// Eventos para botones de agregar

document.getElementById('btnAgregarCarne').addEventListener('click', () => {
  agregarProducto('tipoCarne', 'unidad', 'cantidad', 'tablaResumen', 'carnes');
});

document.getElementById('btnAgregarProteina').addEventListener('click', () => {
  agregarProducto('tipoProteina', 'unidadProteina', 'cantidadProteina', 'tablaProteina', 'proteinas');
});

document.getElementById('btnAgregarOlor').addEventListener('click', () => {
  agregarProducto('tipoOlor', 'unidadOlor', 'cantidadOlor', 'tablaOlor', 'olores');
});

document.getElementById('btnAgregarAbarrote').addEventListener('click', () => {
  agregarProducto('tipoAbarrote', 'unidadAbarrote', 'cantidadAbarrote', 'tablaAbarroteResumen', 'abarrotes');
});

document.getElementById('btnAgregarLimpieza').addEventListener('click', () => {
  agregarProducto('productoLimpiezaNuevo', 'unidadLimpiezaNuevo', 'cantidadLimpiezaNuevo', 'tablaLimpieza', 'limpieza');
});

// Verduras con 2 filas posibles

document.getElementById('btnAgregarVerdura').addEventListener('click', () => {
  const tipo1 = document.getElementById('tipoVerdura1').value.trim();
  const unidad1 = document.getElementById('unidadVerdura1').value.trim();
  const cantidad1 = document.getElementById('cantidadVerdura1').value.trim();

  const tipo2 = document.getElementById('tipoVerdura2').value.trim();
  const unidad2 = document.getElementById('unidadVerdura2').value.trim();
  const cantidad2 = document.getElementById('cantidadVerdura2').value.trim();

  const verduras = JSON.parse(localStorage.getItem('verduras')) || [];

  if (tipo1 && unidad1 && cantidad1 && parseInt(cantidad1) > 0) {
    crearFila([tipo1, unidad1, cantidad1], 'tablaVerdura');
    verduras.push({ tipo: tipo1, unidad: unidad1, cantidad: cantidad1 });
  }

  if (tipo2 && unidad2 && cantidad2 && parseInt(cantidad2) > 0) {
    crearFila([tipo2, unidad2, cantidad2], 'tablaVerdura');
    verduras.push({ tipo: tipo2, unidad: unidad2, cantidad: cantidad2 });
  }

  localStorage.setItem('verduras', JSON.stringify(verduras));

  document.getElementById('tipoVerdura1').value = "";
  document.getElementById('unidadVerdura1').value = "kg";
  document.getElementById('cantidadVerdura1').value = "";

  document.getElementById('tipoVerdura2').value = "";
  document.getElementById('unidadVerdura2').value = "kg";
  document.getElementById('cantidadVerdura2').value = "";
});

// Al cargar la página, rellenar todas las tablas desde localStorage
window.addEventListener('load', () => {
  const claves = [
    { tabla: 'tablaResumen', clave: 'carnes' },
    { tabla: 'tablaProteina', clave: 'proteinas' },
    { tabla: 'tablaVerdura', clave: 'verduras' },
    { tabla: 'tablaOlor', clave: 'olores' },
    { tabla: 'tablaAbarroteResumen', clave: 'abarrotes' },
    { tabla: 'tablaLimpieza', clave: 'limpieza' }
  ];

  claves.forEach(({ tabla, clave }) => {
    const datos = JSON.parse(localStorage.getItem(clave)) || [];
    datos.forEach(({ tipo, unidad, cantidad }) => {
      crearFila([tipo, unidad, cantidad], tabla);
    });
  });
});
