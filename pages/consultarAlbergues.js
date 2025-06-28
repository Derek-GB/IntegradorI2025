document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.search-bar');
    if (!form) {
        console.error("❌ Formulario no encontrado.");
        return;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = document.getElementById('busquedaId').value.trim();
        const nombre = document.getElementById('busquedaNombre').value.trim();

        // Aquí capturamos el texto del select distrito
        const selectDistrito = document.getElementById('busquedaDistrito');
        const distritoTexto = selectDistrito.options[selectDistrito.selectedIndex]?.text.trim();

        if (id) {
            buscarPorId(id);
        } else if (nombre) {
            buscarPorNombre(nombre);
        } else if (distritoTexto && distritoTexto !== "Seleccione un distrito") {
            buscarPorDistrito(distritoTexto);
        } else {
            console.warn("⚠️ Debes ingresar al menos un criterio de búsqueda.");
        }
    });
});


function mostrarDatosAlbergue(data) {
    const albergue = Array.isArray(data) ? data[0] : data;

    if (!albergue) {
        console.warn("⚠️ No se encontró información del albergue.");
        return;
    }

    document.getElementById("idAlbergue").textContent = albergue.IdAlbergue || '';
    document.getElementById("nombreAlbergue").textContent = albergue.Nombre || '';
    document.getElementById("region").textContent = albergue.Region || '';
    document.getElementById("provincia").textContent = albergue.provincia || '';
    document.getElementById("canton").textContent = albergue.canton || '';
    document.getElementById("distrito").textContent = albergue.distrito || '';
    document.getElementById("direccion").textContent = albergue.direccion || '';
    document.getElementById("tipoEstablecimiento").textContent = albergue.tipoEstablecimiento || '';
    document.getElementById("tipoAlbergue").textContent = albergue.tipoAlbergue || '';
    document.getElementById("condicionAlbergue").textContent = albergue.condicionAlbergue || '';
    document.getElementById("administrador").textContent = albergue.administrador || '';
    document.getElementById("telefono").textContent = albergue.telefono || '';
    document.getElementById("capacidadPersonas").textContent = albergue.capacidadPersonas || '';
    document.getElementById("capacidadColectivas").textContent = albergue.capacidadColectiva || '';
    document.getElementById("cantidadFamilias").textContent = albergue.cantidadFamilias || '';
    document.getElementById("ocupacion").textContent = albergue.ocupacion || '';
    document.getElementById("infraestructura").textContent =
        `Cocina: ${albergue.cocina}, Ducha: ${albergue.duchas}, SS: ${albergue.serviciosSanitarios}`;
    document.getElementById("municipalidad").textContent = albergue.municipalidad || '';
    document.getElementById("color").textContent = albergue.color || '';
}

// Buscar por ID
async function buscarPorId(id) {
    try {
        const res = await fetch(`https://apiintegrador-production-8ef8.up.railway.app/api/albergues/consulta/id/${id}`);
        const data = await res.json();
        console.log(" Resultado por ID:", data.data);
        mostrarDatosAlbergue(data.data);
    } catch (error) {
        console.error(" Error al buscar por ID:", error);
    }
}

// Buscar por nombre
async function buscarPorNombre(nombre) {
    try {
        const res = await fetch(`https://apiintegrador-production-8ef8.up.railway.app/api/albergues/consulta/nombre/${encodeURIComponent(nombre)}`);
        const data = await res.json();
        console.log(" Resultado por nombre:", data.data);
        mostrarDatosAlbergue(data.data);
    } catch (error) {
        console.error(" Error al buscar por nombre:", error);
    }
}

// Buscar por distrito
async function buscarPorDistrito(distrito) {
    try {
        const res = await fetch(`https://apiintegrador-production-8ef8.up.railway.app/api/albergues/consulta/distrito/${encodeURIComponent(distrito)}`);
        const data = await res.json();
        console.log(" Resultado por distrito:", data.data);
        mostrarDatosAlbergue(data.data);
    } catch (error) {
        console.error(" Error al buscar por distrito:", error);
    }
}