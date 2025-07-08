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
    "Boma desatorar servicios": { basePersonas: 100, baseCantidad: 2, unidad: "Unidad" },
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

// --- TASAS DE CONVERSIÓN PARA PRODUCTOS DE ABARROTES ---
const CONVERSION_RATES_ABARROTES = {
    "Arroz 80% grano entero": { basePersonas: 30, baseCantidad: 3, unidad: "Kilogramo" },
    "Frijoles": { basePersonas: 30, baseCantidad: 1.5, unidad: "Kilogramo" },
    "Azúcar": { basePersonas: 30, baseCantidad: 0.75, unidad: "Kilogramo" },
    "Aceite de soya": { basePersonas: 30, baseCantidad: 1, unidad: "Litro" },
    "Café": { basePersonas: 30, baseCantidad: 1, unidad: "Kilogramo" },
    "Espagueti": { basePersonas: 30, baseCantidad: 1, unidad: "Kilogramo" },
    "Atún en trozos": { basePersonas: 8, baseCantidad: 0.170, unidad: "Kilogramo" },
    "Avena en polvo": { basePersonas: 15, baseCantidad: 0.4, unidad: "Kilogramo" },
    "Refresco": { basePersonas: 1, baseCantidad: 1, unidad: "Paquete para Litro" },
    "Leche en polvo": { basePersonas: 25, baseCantidad: 1.3, unidad: "Kilogramo" },
    "Agua dulce en polvo": { basePersonas: 15, baseCantidad: 0.2, unidad: "Kilogramo" },
    "Pan Cuadrado": { basePersonas: 1, baseCantidad: 2, unidad: "Rebanadas" },
    "Tortillas": { basePersonas: 1, baseCantidad: 2, unidad: "Unidad" },
    "Pasta de tomate": { basePersonas: 30, baseCantidad: 1, unidad: "Kilogramo" },
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

// --- TASAS DE CONVERSIÓN PARA VERDURAS ---
const CONVERSION_RATES_VERDURAS = {
    "Yuca": 120,
    "Papa": 120,
    "Camote": 120,
    "Chayote": 120,
};

// --- FUNCIONES COMUNES PARA SECCIONES CON CHECKBOX (ABARROTES, LIMPIEZA, OLORES) ---
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

function eliminarProductoDeLocalStorage(key, name) {
    let currentSelected = JSON.parse(localStorage.getItem(key)) || [];
    currentSelected = currentSelected.filter(item => item.nombre !== name);
    localStorage.setItem(key, JSON.stringify(currentSelected));
}

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
        productDivInForm.style.display = 'flex';
    }
}

function calcularCantidadPorPersonas(productName, personas, conversionRatesObject) {
    const conversion = conversionRatesObject[productName];
    if (!conversion || personas <= 0) {
        return null;
    }
    const cantidadCalculada = (personas / conversion.basePersonas) * conversion.baseCantidad;
    const cantidadFormateada = parseFloat(cantidadCalculada.toFixed(2));
    return { cantidad: cantidadFormateada, unidad: conversion.unidad };
}

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

// --- FUNCIONES PARA SECCIONES CON BOTÓN "AGREGAR" (CARNES, PROTEÍNAS, VERDURAS) ---
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

function actualizarLocalStorage(tablaId) {
    const tablaBody = document.getElementById(tablaId)?.querySelector('tbody') || document.getElementById(tablaId);
    if (!tablaBody) return;

    const filas = tablaBody.querySelectorAll('tr');
    const productos = [];
    filas.forEach(fila => {
        const celdas = fila.querySelectorAll('td');
        if (celdas.length >= 3) {
            productos.push({
                producto: celdas[0].textContent,
                unidad: celdas[1].textContent,
                cantidad: parseFloat(celdas[2].textContent)
            });
        }
    });

    const claveLocalStorage = {
        'tablaCarnes': 'carnes',
        'tablaProteina': 'proteinas',
        'tablaVerdura': 'verduras',
    }[tablaId];

    if (claveLocalStorage) {
        localStorage.setItem(claveLocalStorage, JSON.stringify(productos));
    } else {
        console.warn(`No se encontró clave de LocalStorage para tablaId: ${tablaId}`);
    }
}

// INICIALIZACIÓN PRINCIPAL AL CARGAR EL CONTENIDO DEL DOM
document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el manejo de pasos (navegación entre formularios)
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

    // CARGA INICIAL DE DATOS DESDE LOCALSTORAGE
    const clavesOriginales = [
        { tabla: 'tablaCarnes', clave: 'carnes' },
        { tabla: 'tablaProteina', clave: 'proteinas' },
        { tabla: 'tablaVerdura', clave: 'verduras' }
    ];

    clavesOriginales.forEach(({ tabla, clave }) => {
        const datos = JSON.parse(localStorage.getItem(clave)) || [];
        const tablaBody = document.getElementById(tabla)?.querySelector('tbody');
        if (tablaBody) {
            tablaBody.innerHTML = '';
            datos.forEach(({ producto, unidad, cantidad }) => {
                crearFila([producto, unidad, cantidad], tabla);
            });
        }
    });

    // MANEJO DE EVENTO PARA EL CAMPO DE PERSONAS
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
            inicializarYActualizarProductosCheckboxAbarrotes(personas);
            inicializarYActualizarProductosCheckboxLimpieza(personas);
            inicializarYActualizarProductosCheckboxOlores(personas);
        });
    }

    // ASIGNACIÓN DE EVENT LISTENERS PARA CHECKBOXES (ABARROTES, LIMPIEZA, OLORES)
    const categoriesWithCheckboxes = [
        {
            formId: 'seccionAbarrotes',
            localStorageKey: 'abarrotesSeleccionados',
            tableId: 'tablaResumenAbarrotes',
            categoryNameForTable: 'abarrotes',
            conversionRates: CONVERSION_RATES_ABARROTES,
            initializer: inicializarYActualizarProductosCheckboxAbarrotes
        },
        {
            formId: 'productosLimpiezaDisponibles',
            localStorageKey: 'limpiezaSeleccionados',
            tableId: 'tablaResumenLimpieza',
            categoryNameForTable: 'limpieza',
            conversionRates: CONVERSION_RATES_LIMPIEZA,
            initializer: inicializarYActualizarProductosCheckboxLimpieza
        },
        {
            formId: 'productosOloresDisponibles',
            localStorageKey: 'oloresSeleccionados',
            tableId: 'tablaResumenOlores',
            categoryNameForTable: 'olores',
            conversionRates: CONVERSION_RATES_OLORES_Y_OTROS,
            initializer: inicializarYActualizarProductosCheckboxOlores
        }
    ];

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
            const unitType = productDiv.dataset.unitType;

            if (!checkbox || !productName) {
                console.warn(`Elemento de producto incompleto en ${cat.formId}:`, productDiv);
                return;
            }

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
                        productDiv.style.display = 'flex';
                        return;
                    }

                    if (cat.conversionRates && cat.conversionRates[productName]) {
                        const calculated = calcularCantidadPorPersonas(productName, personas, cat.conversionRates);
                        if (calculated && calculated.cantidad > 0) {
                            quantityToUse = calculated.cantidad;
                            unitToUse = calculated.unidad;
                        } else {
                            alert(`No se pudo calcular la cantidad para "${productName}".`);
                            checkbox.checked = false;
                            productDiv.style.display = 'flex';
                            return;
                        }
                    } else {
                        quantityToUse = 1;
                        unitToUse = unitType || "Unidad";
                    }
                    guardarProductoEnLocalStorage(cat.localStorageKey, productName, quantityToUse, unitToUse);
                    actualizarTablaResumen(cat.tableId, productName, quantityToUse, unitToUse, cat.categoryNameForTable);
                    productDiv.style.display = 'none';
                } else {
                    eliminarProductoDeLocalStorage(cat.localStorageKey, productName);
                    actualizarTablaResumen(cat.tableId, productName, 0, unitToUse, cat.categoryNameForTable);
                    productDiv.style.display = 'flex';
                }
            };
            checkbox.addEventListener('change', newChangeListener);
            productDiv._changeListener = newChangeListener;

            const savedItem = JSON.parse(localStorage.getItem(cat.localStorageKey))?.find(item => item.nombre === productName);
            if (savedItem) {
                checkbox.checked = true;
                productDiv.style.display = 'none';
            } else {
                checkbox.checked = false;
                productDiv.style.display = 'flex';
            }
        });

        if (cat.initializer && initialPersonas > 0) {
            cat.initializer(initialPersonas);
        } else {
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

    // EVENTOS PARA BOTONES AGREGAR
    document.getElementById('btnAgregarCarne')?.addEventListener('click', () => {
        const tipo = document.getElementById('tipoCarne')?.value.trim();
        const personas = parseInt(document.getElementById('personasCarnes')?.value) || 0;

        if (!tipo || personas <= 0) {
            alert('Por favor, seleccione un tipo de carne e ingrese una cantidad válida de personas.');
            return;
        }

        const gramosPorPersona = 120;
        const cantidadTotalGramos = gramosPorPersona * personas;
        const cantidadKilos = parseFloat((cantidadTotalGramos / 1000).toFixed(2));
        const unidad = 'kg';

        let carnes = JSON.parse(localStorage.getItem('carnes')) || [];

        if (carnes.some(c => c.producto === tipo)) {
            alert('Ya has agregado esa carne.');
            return;
        }

        carnes.push({ producto: tipo, unidad, cantidad: cantidadKilos });
        localStorage.setItem('carnes', JSON.stringify(carnes));
        crearFila([tipo, unidad, cantidadKilos], 'tablaCarnes');
        document.getElementById('tipoCarne').value = '';
    });

    document.getElementById('btnAgregarProteina')?.addEventListener('click', () => {
        const tipo = document.getElementById('tipoProteina')?.value.trim();
        const personas = parseInt(document.getElementById('personasCarnes')?.value) || 0;

        if (!tipo || personas <= 0) {
            alert('Por favor, seleccione una proteína e ingrese una cantidad válida de personas.');
            return;
        }

        let unidad = '';
        let cantidad = 0;

        switch (tipo) {
            case 'Huevos':
                unidad = 'Cartón';
                cantidad = Math.ceil(personas / 30);
                break;
            case 'Mortadela':
                unidad = 'kg';
                cantidad = parseFloat((personas * 25 / 1000).toFixed(2));
                break;
            case 'Salchichón':
                unidad = 'kg';
                cantidad = parseFloat((personas * 125 / 1000).toFixed(2));
                break;
            default:
                alert('Proteína no reconocida.');
                return;
        }

        let proteinas = JSON.parse(localStorage.getItem('proteinas')) || [];

        if (proteinas.some(p => p.producto === tipo)) {
            alert('Ya has agregado esa proteína.');
            return;
        }

        proteinas.push({ producto: tipo, unidad, cantidad });
        localStorage.setItem('proteinas', JSON.stringify(proteinas));
        crearFila([tipo, unidad, cantidad], 'tablaProteina');
        document.getElementById('tipoProteina').value = '';
    });

    document.getElementById('btnAgregarVerdura')?.addEventListener('click', () => {
        const tipo = document.getElementById('tipoVerdura')?.value.trim();
        const personas = parseInt(document.getElementById('personasCarnes')?.value) || 0;

        if (!tipo || personas <= 0) {
            alert('Por favor, seleccione una verdura e ingrese una cantidad válida de personas.');
            return;
        }

        const gramosPorPersona = CONVERSION_RATES_VERDURAS[tipo] || 120;
        const cantidadTotalGramos = gramosPorPersona * personas;
        const cantidadKilos = parseFloat((cantidadTotalGramos / 1000).toFixed(2));
        const unidad = 'kg';

        let verduras = JSON.parse(localStorage.getItem('verduras')) || [];

        if (verduras.some(v => v.producto === tipo)) {
            alert('Ya has agregado esa verdura.');
            return;
        }

        if (verduras.length >= 2) {
            alert('Solo se pueden agregar 2 verduras.');
            return;
        }

        verduras.push({ producto: tipo, unidad, cantidad: cantidadKilos });
        localStorage.setItem('verduras', JSON.stringify(verduras));
        crearFila([tipo, unidad, cantidadKilos], 'tablaVerdura');
        document.getElementById('tipoVerdura').value = '';
    });

    // Asegurarse de inicializar las secciones con personas actuales
    const currentPersonasOnLoad = parseInt(document.getElementById('personasCarnes')?.value) || 0;
    inicializarYActualizarProductosCheckboxAbarrotes(currentPersonasOnLoad);
    inicializarYActualizarProductosCheckboxLimpieza(currentPersonasOnLoad);
    inicializarYActualizarProductosCheckboxOlores(currentPersonasOnLoad);
});
