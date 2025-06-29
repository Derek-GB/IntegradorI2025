// --- FUNCIONES DE GESTIÓN DE TABLAS Y LOCALSTORAGE ---

/**
 * @function crearFila
 * @description Crea una nueva fila en una tabla HTML con los datos proporcionados y añade un botón para eliminarla.
 * @param {Array<string>} datos - Un array con los datos para cada celda de la fila (producto, unidad, cantidad).
 * @param {string} tablaId - El ID de la tabla donde se añadirá la fila.
 */
function crearFila(datos, tablaId) {
    const tabla = document.getElementById(tablaId);
    // Verifica si la tabla existe antes de intentar añadir una fila
    if (!tabla) {
        console.error(`Error: La tabla con ID '${tablaId}' no fue encontrada.`);
        return;
    }
    const fila = document.createElement('tr');
    // Esta función se usa para las tablas individuales (ej. Proteinas, Olores, etc.)
    // Mantiene el botón de eliminar individual.
    fila.innerHTML = `
        <td>${datos[0]}</td>
        <td>${datos[1]}</td>
        <td>${datos[2]}</td>
        <td><button type="button" class="btn-eliminar-tabla"><span class="material-icons">delete</span></button></td>
    `;
    // Añade un 'event listener' al botón de eliminar para quitar la fila y actualizar el LocalStorage
    fila.querySelector('.btn-eliminar-tabla')?.addEventListener('click', (event) => {
        const filaActual = event.target.closest('tr');
        if (filaActual) {
            filaActual.remove(); // Elimina la fila del DOM
            actualizarLocalStorage(tablaId); // Actualiza el LocalStorage para reflejar el cambio
            renderizarTablaGlobal(); // Vuelve a renderizar la tabla de resumen principal
        }
    });
    tabla.appendChild(fila); // Añade la nueva fila a la tabla
}

/**
 * @function agregarProducto
 * @description Función genérica para añadir un producto a una tabla y guardarlo en LocalStorage.
 * No muestra alertas, solo procesa la adición si los datos son válidos.
 * @param {string} tipoId - ID del input que contiene el tipo/nombre del producto.
 * @param {string} unidadId - ID del input que contiene la unidad del producto.
 * @param {string} cantidadId - ID del input que contiene la cantidad del producto.
 * @param {string} tablaId - ID de la tabla donde se agregará la fila.
 * @param {string} [claveLocalStorage=null] - Clave para guardar los datos en LocalStorage (opcional).
 */
function agregarProducto(tipoId, unidadId, cantidadId, tablaId, claveLocalStorage = null) {
    // Obtiene los valores de los inputs y elimina espacios en blanco
    const producto = document.getElementById(tipoId)?.value.trim();
    const unidad = document.getElementById(unidadId)?.value.trim();
    const cantidad = document.getElementById(cantidadId)?.value.trim();

    // Valida que todos los campos estén llenos y la cantidad sea un número positivo
    if (producto && unidad && cantidad && parseInt(cantidad) > 0) {
        // Crea la fila en la tabla
        crearFila([producto, unidad, cantidad], tablaId);

        // Si se proporciona una clave de LocalStorage, guarda los datos
        if (claveLocalStorage) {
            // Obtiene los datos existentes o inicializa un array vacío
            let datos = JSON.parse(localStorage.getItem(claveLocalStorage)) || [];
            // Añade el nuevo producto
            datos.push({ producto, unidad, cantidad: parseInt(cantidad) }); // Asegura que la cantidad se guarda como número
            // Guarda los datos actualizados en LocalStorage
            localStorage.setItem(claveLocalStorage, JSON.stringify(datos));
        }

        // Limpia los campos del formulario después de agregar
        document.getElementById(tipoId).value = "";
        document.getElementById(unidadId).value = "";
        document.getElementById(cantidadId).value = "";

        renderizarTablaGlobal(); // Vuelve a renderizar la tabla de resumen principal
    }
}

/**
 * @function actualizarLocalStorage
 * @description Actualiza los datos de una tabla específica en LocalStorage.
 * @param {string} tablaId - El ID de la tabla cuyos datos se van a guardar.
 */
function actualizarLocalStorage(tablaId) {
    const tabla = document.getElementById(tablaId);
    // Si la tabla o su cuerpo (tbody) no existen, retorna un error.
    const tablaBody = tabla?.querySelector('tbody') || tabla; // Algunas tablas pueden no tener tbody directo
    if (!tablaBody) {
        console.error(`Error: La tabla con ID '${tablaId}' no fue encontrada para actualizar LocalStorage.`);
        return;
    }

    const filas = tablaBody.querySelectorAll('tr'); // Selecciona todas las filas de la tabla
    const productos = [];

    // Itera sobre cada fila para extraer los datos del producto
    filas.forEach(fila => {
        const celdas = fila.querySelectorAll('td');
        // Asegúrate de que la fila tenga suficientes celdas antes de intentar acceder a ellas
        if (celdas.length >= 3) {
            productos.push({
                producto: celdas[0].textContent,
                unidad: celdas[1].textContent,
                cantidad: parseInt(celdas[2].textContent)
            });
        }
    });

    // Mapeo de IDs de tabla a claves de LocalStorage
    const claves = {
        'tablaResumen': 'carnes', // Este ID se usa para el resumen principal, pero también para la tabla de carnes
        'tablaProteina': 'proteinas',
        'tablaVerdura': 'verduras',
        'tablaOlor': 'oloresSeleccionados',
        'tablaAbarroteResumen': 'abarrotesSeleccionados',
        'tablaLimpieza': 'limpiezaSeleccionados',
    };

    // Si la tablaId tiene una clave asociada en el mapeo, guarda los productos en LocalStorage
    if (claves[tablaId]) {
        localStorage.setItem(claves[tablaId], JSON.stringify(productos));
    } else {
        console.warn(`Advertencia: No se encontró una clave de LocalStorage para la tabla '${tablaId}'.`);
    }
}

/**
 * @function guardarProductoEnLocalStorage
 * @description Guarda un producto en una clave específica de LocalStorage. Actualiza si ya existe, añade si es nuevo.
 * @param {string} key - La clave de LocalStorage.
 * @param {string} name - El nombre del producto.
 * @param {number} quantity - La cantidad del producto.
 * @param {string} unit - La unidad del producto.
 */
function guardarProductoEnLocalStorage(key, name, quantity, unit) {
    let currentSelected = JSON.parse(localStorage.getItem(key)) || [];
    const newProduct = { nombre: name, cantidad: quantity, unidad: unit };
    const existingIndex = currentSelected.findIndex(item => item.nombre === name);

    if (existingIndex > -1) {
        // Si el producto ya existe, lo actualiza
        currentSelected[existingIndex] = newProduct;
    } else {
        // Si no existe, lo añade
        currentSelected.push(newProduct);
    }
    localStorage.setItem(key, JSON.stringify(currentSelected));
}

/**
 * @function eliminarProductoDeLocalStorage
 * @description Elimina un producto específico de una clave de LocalStorage.
 * @param {string} key - La clave de LocalStorage.
 * @param {string} name - El nombre del producto a eliminar.
 */
function eliminarProductoDeLocalStorage(key, name) {
    let currentSelected = JSON.parse(localStorage.getItem(key)) || [];
    // Filtra el array para excluir el producto con el nombre dado
    currentSelected = currentSelected.filter(item => item.nombre !== name);
    localStorage.setItem(key, JSON.stringify(currentSelected));
}

/**
 * @function actualizarTablaResumenEspecifica
 * @description Actualiza o elimina una fila de una tabla de resumen específica (ej. abarrotes, limpieza, olores).
 * @param {string} tablaId - El ID de la tabla de resumen específica.
 * @param {string} productoNombre - El nombre del producto.
 * @param {number} cantidad - La cantidad del producto (0 para eliminar).
 * @param {string} unidadTipo - La unidad del producto.
 * @param {string} categoria - La categoría del producto (usada para el botón de eliminar).
 */
function actualizarTablaResumenEspecifica(tablaId, productoNombre, cantidad, unidadTipo, categoria) {
    const tablaBody = document.getElementById(tablaId)?.querySelector('tbody');
    if (!tablaBody) {
        // No mostramos error, ya que esta función se llama para tablas específicas que podrían no estar presentes en todas las vistas.
        return;
    }

    // Busca si ya existe una fila para este producto
    let filaExistente = tablaBody.querySelector(`tr[data-product-name="${productoNombre}"]`);

    if (cantidad > 0) {
        if (filaExistente) {
            // Si la fila existe y la cantidad es mayor que 0, actualiza la cantidad y unidad
            filaExistente.querySelector('.resumen-cantidad').textContent = quantity;
            filaExistente.querySelector('.resumen-unidad').textContent = unidadTipo;
        } else {
            // Si no existe, crea una nueva fila
            const newRow = document.createElement('tr');
            newRow.setAttribute('data-product-name', productoNombre); // Establece un atributo para identificar la fila
            newRow.innerHTML = `
                <td>${productoNombre}</td>
                <td class="resumen-unidad">${unidadTipo}</td>
                <td class="resumen-cantidad">${cantidad}</td>
                <td>
                    <button class="btn-eliminar-resumen-especifico" data-product-name="${productoNombre}" data-categoria="${categoria}"><span class="material-icons">delete</span></button>
                </td>
            `;
            tablaBody.appendChild(newRow); // Añade la nueva fila a la tabla
        }
    } else {
        // Si la cantidad es 0 (o menor), elimina la fila existente
        if (filaExistente) {
            filaExistente.remove();
        }
    }
    // Vuelve a adjuntar los 'event listeners' a todos los botones de eliminar (para filas nuevas y existentes)
    adjuntarEventListenersEliminarResumenEspecifica(); // Llama a la función específica para los botones de las tablas de resumen detalladas
}

/**
 * @function adjuntarEventListenersEliminarResumenEspecifica
 * @description Adjunta (o re-adjunta) los 'event listeners' a todos los botones con la clase 'btn-eliminar-resumen-especifico'.
 * Esto es crucial cuando se añaden o eliminan filas dinámicamente.
 */
function adjuntarEventListenersEliminarResumenEspecifica() {
    document.querySelectorAll('.btn-eliminar-resumen-especifico').forEach(button => {
        // Remueve el 'event listener' existente para evitar duplicados
        button.removeEventListener('click', manejarEliminarProductoDesdeResumen);
        // Adjunta el 'event listener'
        button.addEventListener('click', manejarEliminarProductoDesdeResumen);
    });
}

/**
 * @function manejarEliminarProductoDesdeResumen
 * @description Maneja el evento de click para eliminar un producto desde una tabla de resumen específica.
 * También actualiza el formulario original (checkbox, input de cantidad) y LocalStorage.
 * @param {Event} event - El evento de click.
 */
function manejarEliminarProductoDesdeResumen(event) {
    const button = event.target.closest(".btn-eliminar-resumen-especifico"); // Usa closest para asegurar que el target es el botón
    if (!button) return; // Si no es el botón, salimos

    const productName = button.dataset.productName;
    const categoria = button.dataset.categoria; // Esta será la clave de localStorage

    let localStorageKey = categoria; // La categoría del dataset ya es la clave correcta
    let selectorInputCantidad = '';
    let formularioSectionId = '';
    let tablaResumenIdEspecifica = ''; // Variable para la tabla de resumen específica correcta

    // Determina los selectores correctos según la categoría
    switch (categoria) {
        case 'abarrotesSeleccionados':
            selectorInputCantidad = '.cantidad';
            formularioSectionId = 'seccionAbarrotes';
            tablaResumenIdEspecifica = 'tablaAbarroteResumen';
            break;
        case 'limpiezaSeleccionados':
            selectorInputCantidad = '.cantidad-limpieza';
            formularioSectionId = 'productosLimpiezaDisponibles';
            tablaResumenIdEspecifica = 'tablaLimpieza';
            break;
        case 'oloresSeleccionados':
            selectorInputCantidad = '.cantidad';
            formularioSectionId = 'productosOloresDisponibles';
            tablaResumenIdEspecifica = 'tablaOlor';
            break;
            // Las demás categorías se manejan de otra forma si no tienen checkbox
        case 'carnes':
            localStorageKey = 'carnes'; // Aunque ya es 'carnes', lo ponemos para claridad
            tablaResumenIdEspecifica = 'tablaResumen'; // Es la tabla principal para carnes
            break;
        case 'proteinas':
            localStorageKey = 'proteinas';
            tablaResumenIdEspecifica = 'tablaProteina';
            break;
        case 'verduras':
            localStorageKey = 'verduras';
            tablaResumenIdEspecifica = 'tablaVerdura';
            break;
        default:
            console.error('Categoría no reconocida al eliminar desde resumen:', categoria);
            return;
    }

    // Si existe un elemento de formulario asociado (para checkboxes), lo actualiza
    const productFormElement = document.querySelector(`#${formularioSectionId} .producto[data-product-name="${productName}"]`);
    if (productFormElement) {
        const checkbox = productFormElement.querySelector('input[type="checkbox"]');
        const cantidadInput = productFormElement.querySelector(selectorInputCantidad);
        if (checkbox) checkbox.checked = false;
        if (cantidadInput) {
            cantidadInput.value = '';
            cantidadInput.style.display = 'none';
        }
        productFormElement.style.display = 'flex'; // Vuelve a mostrar el elemento del formulario
    }

    // Elimina el producto de LocalStorage y actualiza la tabla de resumen específica
    eliminarProductoDeLocalStorage(localStorageKey, productName);
    // Pasa la tabla de resumen específica correcta para la categoría
    actualizarTablaResumenEspecifica(tablaResumenIdEspecifica, productName, 0, '', categoria);
    renderizarTablaGlobal(); // Vuelve a renderizar la tabla de resumen principal después de cualquier cambio
}


// --- FUNCIONES PARA SECCIONES CON CHECKBOX + INPUT DE CANTIDAD (Abarrotes, Limpieza, Olores) ---

/**
 * @function gestionarVisibilidadInputCantidad
 * @description Muestra u oculta el input de cantidad basado en el estado del checkbox.
 * @param {HTMLInputElement} checkbox - El elemento checkbox.
 * @param {string} inputClass - La clase CSS del input de cantidad asociado.
 */
function gestionarVisibilidadInputCantidad(checkbox, inputClass) {
    // Busca el div padre que contiene el checkbox y el input de cantidad
    const parentDiv = checkbox.closest('.producto');
    // Busca el input de cantidad dentro de ese div padre
    const inputCantidad = parentDiv?.querySelector(inputClass);

    if (!inputCantidad) return; // Asegúrate de que el input de cantidad exista

    if (checkbox.checked) {
        inputCantidad.style.display = 'inline-block'; // Muestra el input
        inputCantidad.focus(); // Pone el foco en el input
        // Si el input está vacío o con valor <= 0, lo inicializa en 1
        if (inputCantidad.value === '' || parseInt(inputCantidad.value) <= 0) {
            inputCantidad.value = 1;
        }
    } else {
        inputCantidad.style.display = 'none'; // Oculta el input
        inputCantidad.value = ''; // Limpia el valor
    }
}

/**
 * @function procesarCantidadProducto
 * @description Procesa la cantidad de un producto ingresada en un input, guardándolo en LocalStorage
 * y actualizando la tabla de resumen específica. También gestiona la visibilidad del elemento del formulario.
 * @param {HTMLInputElement} input - El input de cantidad.
 * @param {string} localStorageKey - La clave de LocalStorage donde se guardará el producto.
 * @param {string} tablaResumenId - El ID de la tabla de resumen específica a actualizar.
 * @param {string} categoryNameForTable - El nombre de la categoría para la tabla de resumen.
 */
function procesarCantidadProducto(input, localStorageKey, tablaResumenId, categoryNameForTable) {
    const parentDiv = input.closest('.producto');
    const checkbox = parentDiv?.querySelector('input[type="checkbox"]');
    const productName = parentDiv?.dataset.productName;
    const unitType = parentDiv?.dataset.unitType;
    const quantity = parseInt(input.value);

    // Valida que todos los elementos y datos necesarios existan
    if (!checkbox || !productName || !unitType) {
        console.error("Error: Falta un elemento necesario para procesar el producto.");
        return;
    }

    if (checkbox.checked && quantity > 0) {
        // Si el checkbox está marcado y la cantidad es válida
        guardarProductoEnLocalStorage(localStorageKey, productName, quantity, unitType); // Guarda el producto
        actualizarTablaResumenEspecifica(tablaResumenId, productName, quantity, unitType, categoryNameForTable); // Actualiza la tabla específica
        parentDiv.style.display = 'none'; // Oculta el elemento del formulario
    } else {
        // Si no se cumplen las condiciones, desmarca el checkbox, limpia y oculta el input
        checkbox.checked = false;
        input.value = '';
        input.style.display = 'none';

        // Elimina el producto y actualiza la tabla específica
        eliminarProductoDeLocalStorage(localStorageKey, productName);
        actualizarTablaResumenEspecifica(tablaResumenId, productName, 0, '', categoryNameForTable);
        if (parentDiv) parentDiv.style.display = 'flex';
    }
    renderizarTablaGlobal(); // Vuelve a renderizar la tabla de resumen principal
}


// --- EVENTOS PRINCIPALES (AL CARGAR LA PÁGINA) ---

document.addEventListener('DOMContentLoaded', () => {
    // --- OCULTAR EL MODAL DE EDICIÓN AL CARGAR LA PÁGINA ---
    const modalEditar = document.getElementById("modalEditar");
    if (modalEditar) {
        modalEditar.style.display = "none";
    }

    // --- CONFIGURACIÓN DE CATEGORÍAS PARA LA TABLA DE RESUMEN PRINCIPAL ---
    // ¡CAMBIADO AQUI! Todas las categorías ahora tienen 'tipo: "checkbox"'
    // para que les aparezcan los botones de editar y eliminar.
    const categoriasResumenPrincipal = [
        { clave: "carnes", nombre: "Carnes", tipo: "checkbox" },
        { clave: "proteinas", nombre: "Proteínas", tipo: "checkbox" },
        { clave: "verduras", nombre: "Verduras", tipo: "checkbox" },
        { clave: "oloresSeleccionados", nombre: "Olores", tipo: "checkbox" },
        { clave: "abarrotesSeleccionados", nombre: "Abarrotes", tipo: "checkbox" },
        { clave: "limpiezaSeleccionados", nombre: "Limpieza", tipo: "checkbox" }
    ];

    // Opciones para unidades por categoría (usado en el modal de edición).
    const opcionesUnidadPorCategoriaResumen = {
        carnes: ["Unidad", "Kg"],
        verduras: ["Unidad", "Kg"],
        proteinas: ["Kg"],
        abarrotesSeleccionados: ["Unidad", "Kg", "G", "L", "Rebanadas"],
        oloresSeleccionados: ["L", "Kg", "Unidad", "Rollo"],
        limpiezaSeleccionados: ["Paquete de al menos 10 unidades", "Rollo", "Unidad", "Kg", "L", "Par"],
    };

    /**
     * @function cargarDatosGlobal
     * @description Carga datos de localStorage para una categoría dada.
     * @param {string} categoria - La clave de localStorage para la categoría.
     * @returns {Array<Object>} Un array de elementos almacenados, o un array vacío si no hay.
     */
    function cargarDatosGlobal(categoria) {
        const datos = JSON.parse(localStorage.getItem(categoria));
        return Array.isArray(datos) ? datos : [];
    }

    /**
     * @function guardarDatosGlobal
     * @description Guarda datos en localStorage para una categoría dada.
     * @param {string} categoria - La clave de localStorage para la categoría.
     * @param {Array<Object>} datos - El array de datos a guardar.
     */
    function guardarDatosGlobal(categoria, datos) {
        localStorage.setItem(categoria, JSON.stringify(datos));
    }

    /**
     * @function renderizarTablaGlobal
     * @description Renderiza la tabla de resumen principal combinando datos de todas las categorías.
     */
    function renderizarTablaGlobal() {
        const tbody = document.querySelector("#tablaResumen tbody");
        if (!tbody) {
            console.error("Error: #tablaResumen tbody no encontrado.");
            return;
        }
        tbody.innerHTML = ""; // Limpia la tabla antes de renderizar

        let totalItems = 0;

        categoriasResumenPrincipal.forEach(({ clave, nombre, tipo }) => {
            const items = cargarDatosGlobal(clave);
            items.forEach((item, index) => {
                totalItems++;
                const producto = item.producto || item.tipo || item.nombre || "";
                const unidad = item.unidad || "";
                const cantidad = item.cantidad || "";

                const tr = document.createElement("tr");
                let accionesHtml = '';

                // La lógica condicional ahora siempre incluirá el botón de editar
                // Si quieres que algunas categorías solo tengan eliminar,
                // vuelve a poner la lógica del 'if (tipo === "checkbox")'
                // de la versión anterior.
                accionesHtml = `
                    <div class="acciones-botones">
                        <button class="btn-accion btn-editar-icon" data-categoria="${clave}" data-index="${index}" aria-label="Editar">
                            <span class="material-icons">edit</span>
                        </button>
                        <button class="btn-accion btn-eliminar-icon" data-categoria="${clave}" data-index="${index}" aria-label="Eliminar">
                            <span class="material-icons">delete</span>
                        </button>
                    </div>
                `;

                tr.innerHTML = `
                    <td>${nombre}</td>
                    <td>${producto}</td>
                    <td>${unidad}</td>
                    <td>${cantidad}</td>
                    <td>${accionesHtml}</td>
                `;
                tbody.appendChild(tr);
            });
        });

        if (totalItems === 0) {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td colspan="5" style="text-align:center;">No hay productos agregados aún.</td>`;
            tbody.appendChild(tr);
        }

        // Adjuntar event listeners para los botones de eliminar y editar en la tabla global
        document.querySelectorAll("#tablaResumen .btn-eliminar-icon").forEach(button => {
            button.removeEventListener('click', eliminarFilaGlobal); // Evitar duplicados
            button.addEventListener('click', eliminarFilaGlobal);
        });

        document.querySelectorAll("#tablaResumen .btn-editar-icon").forEach(button => {
            button.removeEventListener('click', abrirModalEditarGlobal); // Evitar duplicados
            button.addEventListener('click', abrirModalEditarGlobal);
        });
    }

    /**
     * @function eliminarFilaGlobal
     * @description Maneja la eliminación de una fila de la tabla de resumen principal.
     * @param {Event} event - El evento de click.
     */
    function eliminarFilaGlobal(event) {
        const btn = event.target.closest(".btn-eliminar-icon");
        if (!btn) return;

        const categoria = btn.dataset.categoria;
        const index = Number(btn.dataset.index);

        if (categoria && !isNaN(index)) {
            let datos = cargarDatosGlobal(categoria);
            const itemEliminado = datos.splice(index, 1)[0];
            guardarDatosGlobal(categoria, datos);

            const mapeoCategoriasCheckbox = {
                'abarrotesSeleccionados': 'seccionAbarrotes',
                'limpiezaSeleccionados': 'productosLimpiezaDisponibles',
                'oloresSeleccionados': 'productosOloresDisponibles'
            };
            const idSeccionFormulario = mapeoCategoriasCheckbox[categoria];
            const nombreItemEliminado = itemEliminado?.nombre || itemEliminado?.producto;
            if (idSeccionFormulario && nombreItemEliminado) {
                const elementoFormularioProducto = document.querySelector(`#${idSeccionFormulario} .producto[data-product-name="${nombreItemEliminado}"]`);
                if (elementoFormularioProducto) {
                    const checkbox = elementoFormularioProducto.querySelector('input[type="checkbox"]');
                    const inputCantidad = elementoFormularioProducto.querySelector('.cantidad') || elementoFormularioProducto.querySelector('.cantidad-limpieza');
                    if (checkbox) checkbox.checked = false;
                    if (inputCantidad) {
                        inputCantidad.value = '';
                        inputCantidad.style.display = 'none';
                    }
                    elementoFormularioProducto.style.display = 'flex';
                }
            }

            renderizarTablaGlobal();
            const specificTableMapping = {
                'carnes': 'tablaResumen',
                'proteinas': 'tablaProteina',
                'verduras': 'tablaVerdura',
                'oloresSeleccionados': 'tablaOlor',
                'abarrotesSeleccionados': 'tablaAbarroteResumen',
                'limpiezaSeleccionados': 'tablaLimpieza'
            };
            const idTablaEspecifica = specificTableMapping[categoria];
            if (idTablaEspecifica && itemEliminado) {
                actualizarTablaResumenEspecifica(idTablaEspecifica, nombreItemEliminado, 0, '', categoria);
            }
        }
    }

    let categoriaActual = "";
    let indexActual = -1;

    /**
     * @function abrirModalEditarGlobal
     * @description Abre el modal de edición para un elemento específico de la tabla de resumen principal.
     * @param {Event} event - El evento de click.
     */
    function abrirModalEditarGlobal(event) {
        const btn = event.target.closest(".btn-editar-icon");
        if (!btn) return;

        categoriaActual = btn.dataset.categoria;
        indexActual = Number(btn.dataset.index);

        if (categoriaActual && !isNaN(indexActual)) {
            const datos = cargarDatosGlobal(categoriaActual);
            const item = datos[indexActual];

            const selectUnidad = document.getElementById("editUnidad");
            selectUnidad.innerHTML = "";
            const opciones = opcionesUnidadPorCategoriaResumen[categoriaActual] || [];

            selectUnidad.appendChild(new Option("Seleccione", ""));
            opciones.forEach(opcion => {
                selectUnidad.appendChild(new Option(opcion, opcion));
            });

            selectUnidad.value = item.unidad || "";

            document.getElementById("editProducto").value = item.producto || item.tipo || item.nombre || "";
            document.getElementById("editCantidad").value = item.cantidad || "";

            document.getElementById("modalEditar").style.display = "flex";
        }
    }

    /**
     * @function cerrarModal
     * @description Cierra el modal de edición.
     */
    function cerrarModal() {
        document.getElementById("modalEditar").style.display = "none";
        categoriaActual = "";
        indexActual = -1;
    }

    /**
     * @function mostrarMensajeExito
     * @description Muestra un mensaje de éxito usando alert().
     */
    function mostrarMensajeExito() {
        alert("¡Producto actualizado correctamente!");
    }

    /**
     * @function guardarEdicion
     * @description Guarda el elemento editado del modal en localStorage y actualiza la tabla.
     */
    function guardarEdicion() {
        const producto = document.getElementById("editProducto").value.trim();
        const unidad = document.getElementById("editUnidad").value;
        const cantidad = parseFloat(document.getElementById("editCantidad").value);

        if (!producto) {
            alert("El nombre del producto no puede estar vacío.");
            return;
        }
        if (!unidad || unidad === "Seleccione") {
            alert("Seleccione una unidad válida.");
            return;
        }
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Ingrese una cantidad válida mayor a cero.");
            return;
            }

        if (categoriaActual && indexActual !== -1) {
            const datos = cargarDatosGlobal(categoriaActual);
            datos[indexActual] = {
                ...datos[indexActual],
                producto: producto,
                unidad: unidad,
                cantidad: cantidad
            };
            guardarDatosGlobal(categoriaActual, datos);
            renderizarTablaGlobal();
            cerrarModal();
            mostrarMensajeExito();
        }
    }

    // --- CARGA Y MANEJO DE SECCIONES CON SELECT + INPUT + BOTÓN AGREGAR (Carnes, Proteínas, Verduras) ---

    // Manejo de la lógica de Carnes con conversión a Kilogramos
    document.getElementById('btnAgregarCarne')?.addEventListener('click', () => {
        const tipo = document.getElementById('tipoCarne')?.value.trim();
        const personasInput = document.getElementById('personasCarnes');
        const personas = parseInt(personasInput?.value) || 0;

        if (tipo && personas > 0) {
            const gramosTotales = personas * 120;
            const kilos = (gramosTotales / 1000).toFixed(2);

            const datos = JSON.parse(localStorage.getItem('carnes')) || [];
            datos.push({ producto: tipo, unidad: 'Kg', cantidad: parseFloat(kilos) });
            localStorage.setItem('carnes', JSON.stringify(datos));

            document.getElementById('tipoCarne').value = '';
            document.getElementById('personasCarnes').value = '';
            renderizarTablaGlobal();
        }
    });

    // Manejo de la lógica de Proteínas usando la función genérica
    document.getElementById('btnAgregarProteina')?.addEventListener('click', () => {
        agregarProducto('tipoProteina', 'unidadProteina', 'cantidadProteina', 'tablaProteina', 'proteinas');
    });

    // Manejo de la lógica de Olores usando la función genérica
    document.getElementById('btnAgregarOlor')?.addEventListener('click', () => {
        agregarProducto('tipoOlor', 'unidadOlor', 'cantidadOlor', 'tablaOlor', 'oloresSeleccionados');
    });

    // Manejo de la lógica de Abarrotes usando la función genérica
    document.getElementById('btnAgregarAbarrote')?.addEventListener('click', () => {
        agregarProducto('tipoAbarrote', 'unidadAbarrote', 'cantidadAbarrote', 'tablaAbarroteResumen', 'abarrotesSeleccionados');
    });

    // Manejo de la lógica de Limpieza usando la función genérica
    document.getElementById('btnAgregarLimpieza')?.addEventListener('click', () => {
        agregarProducto('productoLimpiezaNuevo', 'unidadLimpiezaNuevo', 'cantidadLimpiezaNuevo', 'tablaLimpieza', 'limpiezaSeleccionados');
    });

    // Manejo de la lógica de Verduras (permite agregar dos productos a la vez)
    // El resto de la función document.getElementById('btnAgregarVerdura')?.addEventListener('click', (
    // parece estar incompleta en el código proporcionado. Asegúrate de completarla si es necesario.

    // Inicializar la tabla global al cargar la página
    renderizarTablaGlobal();

    // Event listeners para los botones del modal de edición (estos botones NO están en la tabla global, están en el modal)
    document.getElementById("btnGuardarEdicion")?.addEventListener("click", guardarEdicion);
    document.getElementById("btnCancelarEdicion")?.addEventListener("click", cerrarModal);
});