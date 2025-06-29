// --- TASAS DE CONVERSIÓN PARA PRODUCTOS DE LIMPIEZA ---
const CONVERSION_RATES_LIMPIEZA = {
    "Bolsas para basura Grande": { basePersonas: 100, baseCantidad: 5, unidad: "paquete de al menos 10 unidades" },
    "Bolsas para basura medianas": { basePersonas: 100, baseCantidad: 5, unidad: "paquete de al menos 10 unidades" },
    "Papel Higiénico": { basePersonas: 100, baseCantidad: 150, unidad: "rollo" },
    "Pasta dental": { basePersonas: 100, baseCantidad: 50, unidad: "Unidad" },
    "Jabón en polvo": { basePersonas: 100, baseCantidad: 6, unidad: "Kilogramo" },
    "Cloro": { basePersonas: 100, baseCantidad: 40, unidad: "Litro" },
    "Jabón de baño": { basePersonas: 3, baseCantidad: 1, unidad: "Unidad" },
    "Guantes de Cocina": { basePersonas: 100, baseCantidad: 5, unidad: "Par" },
    "Jabón lavamanos": { basePersonas: 100, baseCantidad: 40, unidad: "Litro" },
    "Jabón Lavaplatos": { basePersonas: 100, baseCantidad: 2, unidad: "Caja" },
    "Desinfectante": { basePersonas: 100, baseCantidad: 40, unidad: "Litro" },
    "Esponja lava platos": { basePersonas: 100, baseCantidad: 4, unidad: "Unidad" },
    "Fosforos": { basePersonas: 100, baseCantidad: 2, unidad: "Caja" },
    "Desodorante unisex": { basePersonas: 100, baseCantidad: 100, unidad: "Unidad" },
    "Champu": { basePersonas: 100, baseCantidad: 20, unidad: "Litro" },
    "Escoba": { basePersonas: 100, baseCantidad: 3, unidad: "Unidad" },
    "Trapeador piso": { basePersonas: 100, baseCantidad: 3, unidad: "Unidad" },
    "Limpiones": { basePersonas: 100, baseCantidad: 4, unidad: "Unidad" },
    "Trapos o mechas": { basePersonas: 100, baseCantidad: 3, unidad: "Unidad" },
    "Toallas de papel": { basePersonas: 100, baseCantidad: 3, unidad: "Rollo" },
    "Bomba desatorar servicios": { basePersonas: 100, baseCantidad: 2, unidad: "Unidad" },
    "Toalla sanitaria": { basePersonas: 100, baseCantidad: 5, unidad: "Paquete de al menos 10 unidades" },
    "Pañales niño M unidades": { basePersonas: 100, baseCantidad: 200, unidad: "Unidad" },
    "Pañales niño L unidades": { basePersonas: 100, baseCantidad: 200, unidad: "Unidad" },
    "Pañales niño XL unidades": { basePersonas: 100, baseCantidad: 200, unidad: "Unidad" },
    "Pañales niño XXL unidades": { basePersonas: 100, baseCantidad: 200, unidad: "Unidad" },
    "Recarga de Gas de 25 lb": { basePersonas: 100, baseCantidad: 2, unidad: "Recarga" },
    "Cepillo dental": { basePersonas: 100, baseCantidad: 100, unidad: "Unidad" },
    "Platos Desechables unidades": { basePersonas: 100, baseCantidad: 100, unidad: "Unidad" },
    "Vaso Desechable unidades": { basePersonas: 100, baseCantidad: 100, unidad: "Unidad" },
    "Cuchara Desechables unidades": { basePersonas: 100, baseCantidad: 100, unidad: "Unidad" },
};

// --- TASAS DE CONVERSIÓN PARA PRODUCTOS DE "OLORES Y OTROS" ---
const CONVERSION_RATES_OLORES_Y_OTROS = {
    "Plátano": { basePersonas: 3, baseCantidad: 1, unidad: "Unidad" },
    "Cebolla": { basePersonas: 1, baseCantidad: 0.010, unidad: "Kilogramo" },
    "Chile Dulce": { basePersonas: 5, baseCantidad: 1, unidad: "Unidad" },
    "Tomate": { basePersonas: 1, baseCantidad: 0.250, unidad: "Kilogramo" },
    "Pepino": { basePersonas: 1, baseCantidad: 0.125, unidad: "Kilogramo" },
    "Repollo": { basePersonas: 1, baseCantidad: 0.060, unidad: "Kilogramo" },
    "Ajo": { basePersonas: 1, baseCantidad: 0.010, unidad: "Kilogramo" },
    "Culantro rollo": { basePersonas: 10, baseCantidad: 1, unidad: "Rollo" },
    "Apio": { basePersonas: 1, baseCantidad: 0.005, unidad: "Kilogramo" },
    "Salsa Lizano": { basePersonas: 1, baseCantidad: 0.020, unidad: "Litro" },
    "Vinagre": { basePersonas: 1, baseCantidad: 0.020, unidad: "Litro" },
    "Oregano": { basePersonas: 10, baseCantidad: 1, unidad: "Rollo" },
    "Pimienta": { basePersonas: 1, baseCantidad: 0.002, unidad: "Kilogramo" },
    "Comino": { basePersonas: 1, baseCantidad: 0.002, unidad: "Kilogramo" },
    "Salsa de Tomate": { basePersonas: 1, baseCantidad: 0.020, unidad: "Litro" },
    "Mayonesa": { basePersonas: 1, baseCantidad: 0.020, unidad: "Litro" },
    "Sal": { basePersonas: 1, baseCantidad: 0.0167, unidad: "Kilogramo" },
    "Mantequilla": { basePersonas: 1, baseCantidad: 0.010, unidad: "Kilogramo" },
    "Achiote": { basePersonas: 10, baseCantidad: 1, unidad: "Caja" },
    "Consome": { basePersonas: 1, baseCantidad: 0.010, unidad: "Kilogramo" },
    "Olor (L)": { basePersonas: 100, baseCantidad: 40, unidad: "Litro" },
};

// --- TASAS DE CONVERSIÓN PARA PRODUCTOS DE ABARROTES (CORREGIDO SEGÚN IMAGEN image_fc9993.png - Cantidad para 30 personas) ---
const CONVERSION_RATES_ABARROTES = {
    // Nombre del producto: { basePersonas: CANTIDAD_PERSONAS_PARA_REFERENCIA, baseCantidad: CANTIDAD_PARA_ESAS_PERSONAS, unidad: "UNIDAD" }
    // Arroz: 3 Kg para 30 personas -> 3/30 = 0.1 Kg por persona
    "Arroz 80% grano entero": { basePersonas: 30, baseCantidad: 3, unidad: "Kilogramo" },
    // Frijoles: 1.5 Kg para 30 personas -> 1.5/30 = 0.05 Kg por persona
    "Frijoles": { basePersonas: 30, baseCantidad: 1.5, unidad: "Kilogramo" },
    // Azúcar: 0.75 Kg para 30 personas -> 0.75/30 = 0.025 Kg por persona
    "Azúcar": { basePersonas: 30, baseCantidad: 0.75, unidad: "Kilogramo" },
    // Aceite de soya: 1 Litro para 30 personas -> 1/30 = 0.0333 Litros por persona
    "Aceite de soya": { basePersonas: 30, baseCantidad: 1, unidad: "Litro" },
    // Café: 1 Kg para 30 personas -> 1/30 = 0.0333 Kg por persona
    "Café": { basePersonas: 30, baseCantidad: 1, unidad: "Kilogramo" },
    // Espagueti: 1 Kg para 30 personas -> 1/30 = 0.0333 Kg por persona
    "Espagueti": { basePersonas: 30, baseCantidad: 1, unidad: "Kilogramo" },
    // Atún en trozos: 1 Lata (170g) para 8 personas. Asumiré que quieres la cantidad de la lata (0.170kg) para las 8 personas.
    // O si es por persona: 0.170 / 8 = 0.02125 Kg por persona
    "Atún en trozos": { basePersonas: 8, baseCantidad: 0.170, unidad: "Kilogramo" }, // Asumiendo lata de 170g
    // Avena en polvo: 0.4 Kg para 15 personas -> 0.4/15 = 0.0266 Kg por persona
    "Avena en polvo": { basePersonas: 15, baseCantidad: 0.4, unidad: "Kilogramo" },
    // Refresco: 1 Paquete para 1 persona
    "Refresco": { basePersonas: 1, baseCantidad: 1, unidad: "Paquete para Litro" },
    // Leche en polvo: 1.3 Kg para 25 personas -> 1.3/25 = 0.052 Kg por persona
    "Leche en polvo": { basePersonas: 25, baseCantidad: 1.3, unidad: "Kilogramo" },
    // Agua dulce en polvo: 0.2 Kg para 15 personas -> 0.2/15 = 0.0133 Kg por persona
    "Agua dulce en polvo": { basePersonas: 15, baseCantidad: 0.2, unidad: "Kilogramo" },
    // Pan Cuadrado: 2 Rebanadas para 1 persona
    "Pan Cuadrado": { basePersonas: 1, baseCantidad: 2, unidad: "Rebanadas" },
    // Tortillas: 2 Unidades para 1 persona
    "Tortillas": { basePersonas: 1, baseCantidad: 2, unidad: "Unidad" },
    // Pasta de tomate: 1 Kg para 30 personas -> 1/30 = 0.0333 Kg por persona
    "Pasta de tomate": { basePersonas: 30, baseCantidad: 1, unidad: "Kilogramo" },

    // Mantengo el resto de tus abarrotes que no estaban en la imagen,
    // con sus valores originales o asumiendo que quieres basePersonas: 1
    // Si no los necesitas o si tienen nombres diferentes en tu HTML, puedes eliminarlos.
    "Galletas": { basePersonas: 1, baseCantidad: 0.02, unidad: "Paquete" },
    "Cereal": { basePersonas: 1, baseCantidad: 0.015, unidad: "Caja" },
    "Sardinas enlatadas": { basePersonas: 3, baseCantidad: 1, unidad: "Lata" },
    "Sopa en sobre": { basePersonas: 1, baseCantidad: 0.005, unidad: "Unidad" },
    "Lentejas": { basePersonas: 1, baseCantidad: 0.01, unidad: "Kilogramo" },
    "Garbanzos": { basePersonas: 1, baseCantidad: 0.01, unidad: "Kilogramo" },
    "Gelatina": { basePersonas: 1, baseCantidad: 0.005, unidad: "Caja" },
    "Flan": { basePersonas: 1, baseCantidad: 0.005, unidad: "Caja" },
    "Mermelada": { basePersonas: 1, baseCantidad: 0.01, unidad: "Frasco" },
    "Miel": { basePersonas: 1, baseCantidad: 0.005, unidad: "Frasco" },
    "Harina de Maíz": { basePersonas: 1, baseCantidad: 0.02, unidad: "Kilogramo" },
    "Levadura": { basePersonas: 1, baseCantidad: 0.002, unidad: "Paquete" },
    "Vainilla": { basePersonas: 10, baseCantidad: 0.005, unidad: "Litro" },
    "Canela": { basePersonas: 10, baseCantidad: 0.001, unidad: "Kilogramo" },
    "Clavos de olor": { basePersonas: 10, baseCantidad: 0.001, unidad: "Kilogramo" },
    "Azúcar Vainillada": { basePersonas: 10, baseCantidad: 0.001, unidad: "Paquete" },
    "Polvo de hornear": { basePersonas: 1, baseCantidad: 0.005, unidad: "Paquete" },
    "Bicarbonato de sodio": { basePersonas: 1, baseCantidad: 0.005, unidad: "Paquete" },
    "Sal de mesa": { basePersonas: 1, baseCantidad: 0.01, unidad: "Kilogramo" },
    "Pimienta en grano": { basePersonas: 1, baseCantidad: 0.001, unidad: "Kilogramo" },
    "Vinagre blanco": { basePersonas: 1, baseCantidad: 0.01, unidad: "Litro" },
    "Salsa de soja": { basePersonas: 1, baseCantidad: 0.005, unidad: "Litro" },
    "Mostaza": { basePersonas: 1, baseCantidad: 0.005, unidad: "Frasco" },
    "Kétchup": { basePersonas: 1, baseCantidad: 0.01, unidad: "Frasco" },
    "Chocolate en polvo": { basePersonas: 1, baseCantidad: 0.01, unidad: "Kilogramo" },
    "Cacao en polvo": { basePersonas: 1, baseCantidad: 0.005, unidad: "Kilogramo" },
    "Leche condensada": { basePersonas: 5, baseCantidad: 1, unidad: "Lata" },
    "Leche evaporada": { basePersonas: 5, baseCantidad: 1, unidad: "Lata" },
    "Crema de leche": { basePersonas: 5, baseCantidad: 1, unidad: "Lata" },
    "Refrescos en polvo": { basePersonas: 1, baseCantidad: 0.005, unidad: "Sobre" },
    "Concentrado de pollo": { basePersonas: 1, baseCantidad: 0.005, unidad: "Cubo" },
    "Consomé de res": { basePersonas: 1, baseCantidad: 0.005, unidad: "Cubo" },
    "Caldo de gallina": { basePersonas: 1, baseCantidad: 0.005, unidad: "Cubo" },
    "Salsa inglesa": { basePersonas: 1, baseCantidad: 0.005, unidad: "Litro" },
    "Salsa picante": { basePersonas: 1, baseCantidad: 0.005, unidad: "Frasco" },
    "Miel de abeja": { basePersonas: 1, baseCantidad: 0.01, unidad: "Frasco" },
    "Jalea": { basePersonas: 1, baseCantidad: 0.01, unidad: "Frasco" },
    "Dulce de leche": { basePersonas: 1, baseCantidad: 0.01, unidad: "Frasco" },
    "Coco rallado": { basePersonas: 5, baseCantidad: 0.05, unidad: "Kilogramo" },
    "Leche de coco": { basePersonas: 5, baseCantidad: 0.2, unidad: "Litro" },
    "Maicena": { basePersonas: 1, baseCantidad: 0.01, unidad: "Kilogramo" },
    "Puspas": { basePersonas: 10, baseCantidad: 0.1, unidad: "Kilogramo" },
    "Frijoles molidos": { basePersonas: 1, baseCantidad: 0.05, unidad: "Kilogramo" },
};


// --- FUNCIONES COMUNES PARA SECCIONES CON CHECKBOX (ABARROTES, LIMPIEZA, OLORES) ---
/**
 * Guarda o actualiza un producto en el localStorage.
 * @param {string} key - La clave del localStorage.
 * @param {string} name - Nombre del producto.
 * @param {number} quantity - Cantidad del producto.
 * @param {string} unit - Unidad del producto.
 */
function guardarProductoEnLocalStorage(key, name, quantity, unit) {
    let currentSelected = JSON.parse(localStorage.getItem(key)) || [];
    const newProduct = {
        nombre: name,
        cantidad: quantity,
        unidad: unit
    };
    const existingIndex = currentSelected.findIndex(item => item.nombre === name);
    if (existingIndex > -1) {
        currentSelected[existingIndex] = newProduct;
    } else {
        currentSelected.push(newProduct);
    }
    localStorage.setItem(key, JSON.stringify(currentSelected));
}

/**
 * Elimina un producto del localStorage.
 * @param {string} key - La clave del localStorage.
 * @param {string} name - Nombre del producto a eliminar.
*/
function eliminarProductoDeLocalStorage(key, name) {
    let currentSelected = JSON.parse(localStorage.getItem(key)) || [];
    currentSelected = currentSelected.filter(item => item.nombre !== name);
    localStorage.setItem(key, JSON.stringify(currentSelected));
}

/**
 * Actualiza la tabla de resumen (añade, actualiza o elimina filas).
 * @param {string} tablaId
 * @param {string} productoNombre
 * @param {number} cantidad
 * @param {string} unidadTipo
 * @param {string} categoria
*/
function actualizarTablaResumen(tablaId, productoNombre, cantidad, unidadTipo, categoria) {
    const tablaBody = document.getElementById(tablaId)?.querySelector('tbody');
    if (!tablaBody) {
        console.error(`Tabla con ID ${tablaId} o su tbody no encontrado.`);
        return;
    }
    let filaExistente = tablaBody.querySelector(`tr[data-product-name="${productoNombre}"]`);
    if (cantidad > 0) {
        if (filaExistente) {
            filaExistente.querySelector('.resumen-cantidad').textContent = cantidad;
            filaExistente.querySelector('.resumen-unidad').textContent = unidadTipo;
        } else {
            const newRow = document.createElement('tr');
            newRow.setAttribute('data-product-name', productoNombre);
            newRow.innerHTML = `
                <td>${productoNombre}</td>
                <td class="resumen-unidad">${unidadTipo}</td>
                <td class="resumen-cantidad">${cantidad}</td>
                <td>
                    <button class="btn-eliminar-checkbox" data-product-name="${productoNombre}" data-categoria="${categoria}">
                        <span class="material-icons">delete</span>
                    </button>
                </td>
            `;
            tablaBody.appendChild(newRow);
        }
    } else {
        if (filaExistente) {
            filaExistente.remove();
        }
    }
    adjuntarEventListenersEliminarCheckbox();
}

function adjuntarEventListenersEliminarCheckbox() {
    document.querySelectorAll('.btn-eliminar-checkbox').forEach(button => {
        button.removeEventListener('click', manejarEliminarProductoDesdeResumenCheckbox);
        button.addEventListener('click', manejarEliminarProductoDesdeResumenCheckbox);
    });
}

/**
 * Maneja la eliminación de un producto desde la tabla de resumen de las secciones con checkbox.
 * @param {Event} event - El evento de click.
 */
function manejarEliminarProductoDesdeResumenCheckbox(event) {
    const button = event.target.closest('button.btn-eliminar-checkbox');
    if (!button) return;

    const productName = button.dataset.productName;
    const categoria = button.dataset.categoria;
    let localStorageKey = '';
    let formSectionId = '';
    let tableId = '';

    switch (categoria) {
        case 'abarrotes':
            localStorageKey = 'abarrotesSeleccionados';
            formSectionId = 'seccionAbarrotes';
            tableId = 'tablaResumenAbarrotes';
            break;
        case 'limpieza':
            localStorageKey = 'limpiezaSeleccionados';
            formSectionId = 'productosLimpiezaDisponibles';
            tableId = 'tablaResumenLimpieza';
            break;
        case 'olores':
            localStorageKey = 'oloresSeleccionados';
            formSectionId = 'productosOloresDisponibles';
            tableId = 'tablaResumenOlores';
            break;
        default:
            console.error('Categoría no reconocida al eliminar desde resumen:', categoria);
            return;
    }

    eliminarProductoDeLocalStorage(localStorageKey, productName);
    actualizarTablaResumen(tableId, productName, 0, '', categoria);

    const productDivInForm = document.querySelector(`#${formSectionId} .producto[data-product-name="${productName}"]`);
    if (productDivInForm) {
        const checkbox = productDivInForm.querySelector('input[type="checkbox"]');
        if (checkbox) checkbox.checked = false;
        productDivInForm.style.display = 'flex'; // Vuelve a mostrar el producto en la lista
    }
}


// FUNCIONES DE CÁLCULO ESPECÍFICAS PARA PRODUCTOS CON CONVERSIÓN
/**
 * Calcula la cantidad de un producto basado en el número de personas y tasas de conversión.
 * @param {string} productName - El nombre del producto.
 * @param {number} personas - El número de personas.
 * @param {object} conversionRatesObject - El objeto de tasas de conversión (ej. CONVERSION_RATES_LIMPIEZA).
 * @returns {object|null} Un objeto con { cantidad, unidad } o null si no se encuentra el producto o personas <= 0.
 */
function calcularCantidadPorPersonas(productName, personas, conversionRatesObject) {
    const conversion = conversionRatesObject[productName];
    if (!conversion || personas <= 0) {
        return null;
    }
    const cantidadCalculada = (personas / conversion.basePersonas) * conversion.baseCantidad;
    const cantidadFormateada = parseFloat(cantidadCalculada.toFixed(2));
    return { cantidad: cantidadFormateada, unidad: conversion.unidad };
}

/**
 * Inicializa y actualiza la UI y localStorage para productos con checkbox de la sección de Limpieza.
 * Se llama al cargar la página y cuando cambian las personas.
 * @param {number} personas - Número actual de personas.
 */
function inicializarYActualizarProductosCheckboxLimpieza(personas) {
    const formContainer = document.getElementById('productosLimpiezaDisponibles');
    if (!formContainer) {
        console.warn(`Contenedor de formulario 'productosLimpiezaDisponibles' no encontrado.`);
        return;
    }

    let savedProducts = JSON.parse(localStorage.getItem('limpiezaSeleccionados')) || [];
    let updatedSavedProducts = [];

    savedProducts.forEach(savedItem => {
        const conversion = CONVERSION_RATES_LIMPIEZA[savedItem.nombre];
        if (conversion) {
            const calculated = calcularCantidadPorPersonas(savedItem.nombre, personas, CONVERSION_RATES_LIMPIEZA);
            if (calculated) {
                updatedSavedProducts.push({
                    nombre: savedItem.nombre,
                    cantidad: calculated.cantidad,
                    unidad: calculated.unidad
                });
            }
        }
    });

    localStorage.setItem('limpiezaSeleccionados', JSON.stringify(updatedSavedProducts));

    const tableBodyLimpieza = document.getElementById('tablaResumenLimpieza')?.querySelector('tbody');
    if (tableBodyLimpieza) {
        tableBodyLimpieza.innerHTML = '';
        updatedSavedProducts.forEach(item => {
            actualizarTablaResumen('tablaResumenLimpieza', item.nombre, item.cantidad, item.unidad, 'limpieza');
        });
    }

    const formProducts = formContainer.querySelectorAll('.producto');
    formProducts.forEach(productDiv => {
        const checkbox = productDiv.querySelector('input[type="checkbox"]');
        const productName = productDiv.dataset.productName;
        const isSelected = updatedSavedProducts.some(item => item.nombre === productName);

        if (checkbox) {
            checkbox.checked = isSelected;
        }
        productDiv.style.display = isSelected ? 'none' : 'flex';
    });
    adjuntarEventListenersEliminarCheckbox();
}

/**
 * Inicializa y actualiza la UI y localStorage para productos con checkbox de la sección de Olores y otros.
 * Se llama al cargar la página y cuando cambian las personas.
 * @param {number} personas - Número actual de personas.
 */
function inicializarYActualizarProductosCheckboxOlores(personas) {
    const formContainer = document.getElementById('productosOloresDisponibles');
    if (!formContainer) {
        console.warn(`Contenedor de formulario 'productosOloresDisponibles' no encontrado.`);
        return;
    }

    let savedProducts = JSON.parse(localStorage.getItem('oloresSeleccionados')) || [];
    let updatedSavedProducts = [];

    savedProducts.forEach(savedItem => {
        const conversion = CONVERSION_RATES_OLORES_Y_OTROS[savedItem.nombre];
        if (conversion) {
            const calculated = calcularCantidadPorPersonas(savedItem.nombre, personas, CONVERSION_RATES_OLORES_Y_OTROS);
            if (calculated) {
                updatedSavedProducts.push({
                    nombre: savedItem.nombre,
                    cantidad: calculated.cantidad,
                    unidad: calculated.unidad
                });
            }
        }
    });

    localStorage.setItem('oloresSeleccionados', JSON.stringify(updatedSavedProducts));

    const tableBodyOlores = document.getElementById('tablaResumenOlores')?.querySelector('tbody');
    if (tableBodyOlores) {
        tableBodyOlores.innerHTML = '';
        updatedSavedProducts.forEach(item => {
            actualizarTablaResumen('tablaResumenOlores', item.nombre, item.cantidad, item.unidad, 'olores');
        });
    }

    const formProducts = formContainer.querySelectorAll('.producto');
    formProducts.forEach(productDiv => {
        const checkbox = productDiv.querySelector('input[type="checkbox"]');
        const productName = productDiv.dataset.productName;
        const isSelected = updatedSavedProducts.some(item => item.nombre === productName);

        if (checkbox) {
            checkbox.checked = isSelected;
        }
        productDiv.style.display = isSelected ? 'none' : 'flex';
    });
    adjuntarEventListenersEliminarCheckbox();
}

/**
 * Inicializa y actualiza la UI y localStorage para productos con checkbox de la sección de Abarrotes.
 * Se llama al cargar la página y cuando cambian las personas.
 * @param {number} personas - Número actual de personas.
 */
function inicializarYActualizarProductosCheckboxAbarrotes(personas) {
    const formContainer = document.getElementById('seccionAbarrotes');
    if (!formContainer) {
        console.warn(`Contenedor de formulario 'seccionAbarrotes' no encontrado.`);
        return;
    }

    let savedProducts = JSON.parse(localStorage.getItem('abarrotesSeleccionados')) || [];
    let updatedSavedProducts = [];

    savedProducts.forEach(savedItem => {
        const conversion = CONVERSION_RATES_ABARROTES[savedItem.nombre];
        if (conversion) {
            const calculated = calcularCantidadPorPersonas(savedItem.nombre, personas, CONVERSION_RATES_ABARROTES);
            if (calculated) {
                updatedSavedProducts.push({
                    nombre: savedItem.nombre,
                    cantidad: calculated.cantidad,
                    unidad: calculated.unidad
                });
            }
        }
    });

    localStorage.setItem('abarrotesSeleccionados', JSON.stringify(updatedSavedProducts));

    const tableBodyAbarrotes = document.getElementById('tablaResumenAbarrotes')?.querySelector('tbody');
    if (tableBodyAbarrotes) {
        tableBodyAbarrotes.innerHTML = '';
        updatedSavedProducts.forEach(item => {
            actualizarTablaResumen('tablaResumenAbarrotes', item.nombre, item.cantidad, item.unidad, 'abarrotes');
        });
    }

    const formProducts = formContainer.querySelectorAll('.producto');
    formProducts.forEach(productDiv => {
        const checkbox = productDiv.querySelector('input[type="checkbox"]');
        const productName = productDiv.dataset.productName;
        const isSelected = updatedSavedProducts.some(item => item.nombre === productName);

        if (checkbox) {
            checkbox.checked = isSelected;
        }
        productDiv.style.display = isSelected ? 'none' : 'flex';
    });
    adjuntarEventListenersEliminarCheckbox();
}


// --- FUNCIONES ORIGINALES PARA CARNES Y PROTEÍNAS (y otras secciones con botón "Agregar") ---
/**
 * Crea una fila en la tabla para los productos que se añaden con botón "Agregar".
 * @param {Array<string>} datos - Array con [tipo, unidad, cantidad].
 * @param {string} tablaId - ID de la tabla donde insertar la fila.
 */
function crearFila(datos, tablaId) {
    const tabla = document.getElementById(tablaId)?.querySelector('tbody') || document.getElementById(tablaId);
    if (!tabla) {
        console.error(`Tabla con ID ${tablaId} o su tbody no encontrado.`);
        return;
    }
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${datos[0]}</td>
        <td>${datos[1]}</td>
        <td>${datos[2]}</td>
        <td>
            <button type="button" class="btn-eliminar">
                <span class="material-icons">delete</span>
            </button>
        </td>`;
    fila.querySelector('.btn-eliminar').addEventListener('click', (event) => {
        event.target.closest('tr').remove();
        actualizarLocalStorage(tablaId);
    });
    tabla.appendChild(fila);
}

/**
 * Actualiza el localStorage para las tablas que se rellenan con botón "Agregar".
 * @param {string} tablaId
 */
function actualizarLocalStorage(tablaId) {
    const tabla = document.getElementById(tablaId)?.querySelector('tbody') || document.getElementById(tablaId);
    if (!tabla) return;
    const filas = tabla.querySelectorAll('tr');
    const productos = [];
    filas.forEach(fila => {
        const celdas = fila.querySelectorAll('td');
        if (celdas.length >= 3) {
            productos.push({
                producto: celdas[0].textContent,
                unidad: celdas[1].textContent,
                cantidad: celdas[2].textContent
            });
        }
    });

    const claves = {
        'tablaResumen': 'carnes',
        'tablaProteina': 'proteinas',
        'tablaResumenAbarrotes': 'abarrotesSeleccionados',
        'tablaResumenLimpieza': 'limpiezaSeleccionados',
        'tablaResumenOlores': 'oloresSeleccionados',
        'tablaVerdura': 'verduras'
    };

    if (claves[tablaId]) {
        localStorage.setItem(claves[tablaId], JSON.stringify(productos));
    }
}

/**
 * Agrega un producto (para Carnes y Proteinas, asumiendo tu estructura original)
 */
function agregarProductoOriginal(tipoId, unidadId, cantidadId, tablaId, claveLocalStorage = null) {
    const tipo = document.getElementById(tipoId)?.value.trim();
    const unidad = document.getElementById(unidadId)?.value.trim();
    const cantidad = document.getElementById(cantidadId)?.value.trim();
    if (tipo && unidad && cantidad && parseFloat(cantidad) > 0) {
        crearFila([tipo, unidad, cantidad], tablaId);
        if (claveLocalStorage) {
            const datos = JSON.parse(localStorage.getItem(claveLocalStorage)) || [];
            datos.push({
                producto: tipo,
                unidad,
                cantidad
            });
            localStorage.setItem(claveLocalStorage, JSON.stringify(datos));
        }
        document.getElementById(tipoId).value = "";
        document.getElementById(unidadId).value = "";
        document.getElementById(cantidadId).value = "";
    }
}


// --- FUNCIONES Y LÓGICA PARA VERDURAS (CON EDICIÓN) ---
let verdurasAgregadas = JSON.parse(localStorage.getItem('verduras')) || [];
let editandoVerdura = false;
let indiceEdicion = null;

function actualizarTablaVerduras() {
    const tabla = document.getElementById("tablaVerdura")?.querySelector('tbody') || document.getElementById("tablaVerdura");
    if (!tabla) {
        console.error("Elemento con ID 'tablaVerdura' o su tbody no encontrado.");
        return;
    }
    tabla.innerHTML = ""; // Limpiar la tabla

    verdurasAgregadas.forEach((verdura, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${verdura.tipo}</td>
            <td>${verdura.unidad}</td>
            <td>${verdura.cantidad}</td>
            <td>
                <button type="button" onclick="eliminarVerdura(${index})">
                    <span class="material-icons">delete</span>
                </button>
            </td>
        `;
        tabla.appendChild(fila);
    });

    localStorage.setItem('verduras', JSON.stringify(verdurasAgregadas));
}

// Funciones globales para ser llamadas desde onclick en el HTML
window.eliminarVerdura = function(index) {
    verdurasAgregadas.splice(index, 1);
    actualizarTablaVerduras();
};

window.editarVerdura = function(index) {
    const verdura = verdurasAgregadas[index];
    const tipoVerduraEl = document.getElementById("tipoVerdura");
    const cantidadVerduraEl = document.getElementById("cantidadVerdura");
    const unidadVerduraEl = document.getElementById("unidadVerdura");
    const btnAgregarVerduraEl = document.getElementById("btnAgregarVerdura");

    if (tipoVerduraEl) tipoVerduraEl.value = verdura.tipo;
    if (cantidadVerduraEl) cantidadVerduraEl.value = verdura.cantidad;
    if (unidadVerduraEl) unidadVerduraEl.value = verdura.unidad;

    editandoVerdura = true;
    indiceEdicion = index;
    if (btnAgregarVerduraEl) btnAgregarVerduraEl.textContent = "Guardar Cambios";
};


//   INICIALIZACIÓN PRINCIPAL AL CARGAR EL CONTENIDO DEL DOM
document.addEventListener('DOMContentLoaded', () => {
    //Lógica para el manejo de pasos (navegación entre formularios)
    const pasos = document.querySelectorAll(".paso");
    let pasoActual = 0;
    function mostrarPaso(index) {
        pasos.forEach((paso, i) => {
            paso.classList.toggle("activo", i === index);
        });
    }
    mostrarPaso(pasoActual);
    document.querySelectorAll(".siguiente").forEach(btn => {
        btn.addEventListener("click", () => {
            if (pasoActual < pasos.length - 1) {
                pasoActual++;
                mostrarPaso(pasoActual);
            }
        });
    });

    document.querySelectorAll(".anterior").forEach(btn => {
        btn.addEventListener("click", () => {
            if (pasoActual > 0) {
                pasoActual--;
                mostrarPaso(pasoActual);
            }
        });
    });

    // --- CARGA INICIAL DE DATOS DESDE LOCALSTORAGE ---
    // Carga inicial para Carnes y Proteínas (usando la lógica original)
    const clavesOriginales = [{
        tabla: 'tablaResumen',
        clave: 'carnes'
    }, {
        tabla: 'tablaProteina',
        clave: 'proteinas'
    }];

    clavesOriginales.forEach(({
        tabla,
        clave
    }) => {
        const datos = JSON.parse(localStorage.getItem(clave)) || [];
        const tablaBody = document.getElementById(tabla)?.querySelector('tbody');
        if (tablaBody) {
            tablaBody.innerHTML = '';
            datos.forEach(({
                producto,
                unidad,
                cantidad
            }) => {
                crearFila([producto, unidad, cantidad], tabla);
            });
        }
    });

    // --- MANEJO DE EVENTO PARA EL CAMPO DE PERSONAS ---
    const personasInput = document.getElementById("personasCarnes");
    let initialPersonas = 0;
    if (personasInput) {
        const datosFormulario = JSON.parse(localStorage.getItem("datosFormulario"));
        if (datosFormulario?.personas) {
            personasInput.value = datosFormulario.personas;
            initialPersonas = parseInt(datosFormulario.personas) || 0;
        }

        personasInput.addEventListener('input', () => {
            const personas = parseInt(personasInput.value) || 0;
            // Actualizar todas las secciones que dependen de personas
            inicializarYActualizarProductosCheckboxAbarrotes(personas); // Abarrotes añadido aquí
            inicializarYActualizarProductosCheckboxLimpieza(personas);
            inicializarYActualizarProductosCheckboxOlores(personas);
        });
    }

    // Asignación de Event Listeners y Carga Inicial para Abarrotes, Limpieza, Olores (solo checkbox)
    const categoriesWithCheckboxes = [{
        formId: 'seccionAbarrotes',
        localStorageKey: 'abarrotesSeleccionados',
        tableId: 'tablaResumenAbarrotes',
        categoryNameForTable: 'abarrotes',
        conversionRates: CONVERSION_RATES_ABARROTES, // Asignado ahora
        initializer: inicializarYActualizarProductosCheckboxAbarrotes // Asignado ahora
    }, {
        formId: 'productosLimpiezaDisponibles',
        localStorageKey: 'limpiezaSeleccionados',
        tableId: 'tablaResumenLimpieza',
        categoryNameForTable: 'limpieza',
        conversionRates: CONVERSION_RATES_LIMPIEZA,
        initializer: inicializarYActualizarProductosCheckboxLimpieza
    }, {
        formId: 'productosOloresDisponibles',
        localStorageKey: 'oloresSeleccionados',
        tableId: 'tablaResumenOlores',
        categoryNameForTable: 'olores',
        conversionRates: CONVERSION_RATES_OLORES_Y_OTROS,
        initializer: inicializarYActualizarProductosCheckboxOlores
    }];


    categoriesWithCheckboxes.forEach(cat => {
        const formContainer = document.getElementById(cat.formId);
        if (!formContainer) {
            console.warn(`Contenedor de formulario ${cat.formId} no encontrado. Saltando inicialización para esta categoría.`);
            return;
        }

        const formProducts = formContainer.querySelectorAll('.producto');

        formProducts.forEach(productDiv => {
            const checkbox = productDiv.querySelector('input[type="checkbox"]');
            const productName = productDiv.dataset.productName;
            const unitType = productDiv.dataset.unitType; // Atributo para la unidad por defecto si no hay conversión

            if (!checkbox || !productName) {
                console.warn(`Elemento de producto incompleto en ${cat.formId}:`, productDiv);
                return;
            }

            // Remueve el event listener anterior si existe para evitar duplicados
            const oldChangeListener = productDiv._changeListener;
            if (oldChangeListener) {
                checkbox.removeEventListener('change', oldChangeListener);
            }

            const newChangeListener = () => {
                const personas = parseInt(document.getElementById("personasCarnes")?.value) || 0;
                let quantityToUse;
                let unitToUse;

                if (checkbox.checked) {
                    if (personas === 0 && cat.conversionRates && cat.conversionRates[productName]) {
                        alert(`Por favor, ingrese un número de personas mayor a 0 para calcular la cantidad de "${productName}".`);
                        checkbox.checked = false;
                        productDiv.style.display = 'flex'; // Mantener visible si no se pudo agregar
                        return;
                    }

                    if (cat.conversionRates && cat.conversionRates[productName]) {
                        const calculated = calcularCantidadPorPersonas(productName, personas, cat.conversionRates);
                        if (calculated && calculated.cantidad > 0) {
                            quantityToUse = calculated.cantidad;
                            unitToUse = calculated.unidad;
                        } else {
                            // Esto podría ocurrir si personas es 0 o hay un problema con la conversión específica.
                            // Ya se maneja personas === 0 arriba, así que esto sería más por un dato incorrecto.
                            alert(`No se pudo calcular la cantidad para "${productName}".`);
                            checkbox.checked = false;
                            productDiv.style.display = 'flex';
                            return;
                        }
                    } else {
                        // Para productos sin tasa de conversión específica, asumimos cantidad 1 y la unidad del dataset
                        quantityToUse = 1;
                        unitToUse = unitType || "Unidad"; // Asegurarse de que unitType esté definido
                    }
                    guardarProductoEnLocalStorage(cat.localStorageKey, productName, quantityToUse, unitToUse);
                    actualizarTablaResumen(cat.tableId, productName, quantityToUse, unitToUse, cat.categoryNameForTable);
                    productDiv.style.display = 'none'; // Ocultar si se agregó correctamente
                } else {
                    eliminarProductoDeLocalStorage(cat.localStorageKey, productName);
                    actualizarTablaResumen(cat.tableId, productName, 0, unitToUse, cat.categoryNameForTable); // 0 para eliminar
                    productDiv.style.display = 'flex'; // Mostrar si se deseleccionó
                }
            };
            checkbox.addEventListener('change', newChangeListener);
            productDiv._changeListener = newChangeListener; // Guardar referencia para removerlo después

            // Estado inicial al cargar
            const savedItem = JSON.parse(localStorage.getItem(cat.localStorageKey))?.find(item => item.nombre === productName);
            if (savedItem) {
                checkbox.checked = true;
                productDiv.style.display = 'none';
            } else {
                checkbox.checked = false;
                productDiv.style.display = 'flex';
            }
        });

        // Si hay una función inicializadora específica para la categoría (que maneja cálculos por personas)
        if (cat.initializer && initialPersonas > 0) {
            cat.initializer(initialPersonas);
        } else if (!cat.initializer) {
            // Si no hay inicializador específico, cargar simplemente lo que esté guardado
            const tableBody = document.getElementById(cat.tableId)?.querySelector('tbody');
            if (tableBody) {
                tableBody.innerHTML = '';
                const savedItems = JSON.parse(localStorage.getItem(cat.localStorageKey)) || [];
                savedItems.forEach(item => {
                    actualizarTablaResumen(cat.tableId, item.nombre, item.cantidad, item.unidad, cat.categoryNameForTable);
                });
            }
        }
    });

    const CONVERSION_RATES_VERDURAS = {
  "Yuca": 120,
  "Papa": 120,
  "Camote": 120,
  "Chayote": 120,
};

// Botón agregar verdura
const btnAgregarVerdura = document.getElementById("btnAgregarVerdura");
if (btnAgregarVerdura) {
  btnAgregarVerdura.addEventListener("click", () => {
    const tipo = document.getElementById("tipoVerdura")?.value;
    const personas = parseInt(document.getElementById("personasCarnes")?.value) || 0;

    if (!tipo || personas <= 0) {
      alert("Por favor seleccione una verdura e ingrese una cantidad válida de personas.");
      return;
    }

    const gramosPorPersona = CONVERSION_RATES_VERDURAS[tipo];
    const cantidadTotalGramos = gramosPorPersona * personas;
    const cantidadKilos = +(cantidadTotalGramos / 1000).toFixed(2); // Redondeado a 2 decimales
    const unidad = "kg";

    // Obtener verduras guardadas
    const verdurasGuardadas = JSON.parse(localStorage.getItem("verduras")) || [];

    if (verdurasGuardadas.some(v => v.producto === tipo)) {
      alert("Ya has agregado esa verdura.");
      return;
    }

    if (verdurasGuardadas.length >= 2) {
      alert("Solo se pueden agregar 2 verduras.");
      return;
    }

    // Agregar al localStorage
    verdurasGuardadas.push({
      producto: tipo,
      unidad: unidad,
      cantidad: cantidadKilos
    });
    localStorage.setItem("verduras", JSON.stringify(verdurasGuardadas));

    // Insertar en la tabla específica de verduras
    crearFila([tipo, unidad, cantidadKilos], "tablaVerdura");

    // También agregar al resumen general si usas tablaResumenFinal
    if (typeof actualizarTablaResumen === "function") {
      actualizarTablaResumen("tablaResumenFinal", tipo, cantidadKilos, unidad, "verduras");
    }
  });

  // Carga inicial de verduras desde localStorage
  const verdurasGuardadas = JSON.parse(localStorage.getItem("verduras")) || [];
  verdurasGuardadas.forEach(({ producto, unidad, cantidad }) => {
    crearFila([producto, unidad, cantidad], "tablaVerdura");
  });
}

    // Asegurarse de llamar a los inicializadores con las personas actuales al cargar la página
    const currentPersonasOnLoad = parseInt(document.getElementById("personasCarnes")?.value) || 0;
    inicializarYActualizarProductosCheckboxAbarrotes(currentPersonasOnLoad); // Abarrotes añadido aquí
    inicializarYActualizarProductosCheckboxLimpieza(currentPersonasOnLoad);
    inicializarYActualizarProductosCheckboxOlores(currentPersonasOnLoad);


    // --- EVENTOS PARA SECCIONES CON BOTÓN "AGREGAR" (CARNES, PROTEÍNAS, VERDURAS) ---

    // EVENTO BOTÓN AGREGAR VERDURA
    const btnAgregarVerduraEl = document.getElementById("btnAgregarVerdura");
    if (btnAgregarVerduraEl) {
        btnAgregarVerduraEl.addEventListener("click", function() {
            const tipo = document.getElementById("tipoVerdura")?.value.trim();
            const cantidadValor = document.getElementById("cantidadVerdura")?.value.trim().replace(',', '.');
            const cantidad = parseFloat(cantidadValor);
            const unidad = document.getElementById("unidadVerdura")?.value.trim();

            if (!tipo || !unidad || isNaN(cantidad) || cantidad <= 0) {
                return;
            }

            if (!editandoVerdura) {
                if (verdurasAgregadas.some(v => v.tipo === tipo)) {
                    alert("Ya has agregado esa verdura.");
                    return;
                }
                if (verdurasAgregadas.length >= 2) {
                    alert("Solo se pueden agregar 2 verduras.");
                    return;
                }
                verdurasAgregadas.push({
                    tipo,
                    cantidad,
                    unidad
                });
            } else {
                verdurasAgregadas[indiceEdicion] = {
                    tipo,
                    cantidad,
                    unidad
                };
                editandoVerdura = false;
                indiceEdicion = null;
                this.textContent = "Agregar";
            }
            actualizarTablaVerduras();
            document.getElementById("tipoVerdura").value = "";
            document.getElementById("cantidadVerdura").value = "";
            document.getElementById("unidadVerdura").value = "";
        });
    } else {
        console.error("Elemento con ID 'btnAgregarVerdura' no encontrado.");
    }

    // Carga inicial para la tabla de verduras
    actualizarTablaVerduras();

    // EVENTOS DE BOTONES PARA CARNES Y PROTEÍNAS
    document.getElementById('btnAgregarCarne')?.addEventListener('click', () => {
        const tipo = document.getElementById('tipoCarne')?.value.trim();
        const personas = parseInt(document.getElementById('personasCarnes')?.value) || 0;
        if (tipo && personas > 0) {
            const gramosTotales = personas * 120;
            const kilos = (gramosTotales / 1000).toFixed(2);
            crearFila([tipo, 'Kg', kilos], 'tablaResumen');
            actualizarLocalStorage('tablaResumen');
            document.getElementById('tipoCarne').value = '';
        } else {
            alert("Por favor, seleccione un tipo de carne y asegure que el número de personas sea mayor a 0.");
        }
    });

    // 1. Botón Agregar
document.getElementById('btnAgregarProteina')?.addEventListener('click', () => {
  agregarProductoOriginal('tipoProteina', 'unidadProteina', 'cantidadProteina', 'tablaProteina', 'proteinas');
});

document.getElementById("btnAgregarProteina").addEventListener("click", function () {
  const tipo = document.getElementById("tipoProteina").value;
  const tabla = document.getElementById("tablaProteina");

  const datosFormulario = JSON.parse(localStorage.getItem("datosFormulario"));
  const personas = datosFormulario && datosFormulario.personas ? parseInt(datosFormulario.personas) : 0;

  if (!tipo || !personas || personas <= 0) {
    alert("Debe seleccionar una proteína y asegurarse de haber indicado la cantidad de personas.");
    return;
  }

  let unidad = "";
  let cantidad = 0;

  switch (tipo) {
    case "Huevos":
      unidad = "Cartón";
      cantidad = Math.ceil(personas / 30);
      break;
    case "Mortadela":
      unidad = "Kg";
      cantidad = (personas * 25 / 1000).toFixed(2);
      break;
    case "Salchichón":
      unidad = "Kg";
      cantidad = (personas * 125 / 1000).toFixed(2);
      break;
  }

  // Crear nueva fila en la tabla
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${tipo}</td>
    <td>${unidad}</td>
    <td>${cantidad}</td>
    <td>
      <button class="btn-eliminar" aria-label="Eliminar">
        <span class="material-icons">delete</span>
      </button>
    </td>
  `;
  tabla.appendChild(fila);

  // Evento para eliminar fila
  fila.querySelector(".btn-eliminar").addEventListener("click", () => {
    fila.remove();
  });

  // Limpiar selección
  document.getElementById("tipoProteina").value = "";
});


});
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
