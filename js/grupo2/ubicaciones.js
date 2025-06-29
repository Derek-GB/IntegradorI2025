// Utilidad para obtener todos los datos paginados
async function obtenerTodos(urlBase) {
  let pagina = 1;
  let resultados = [];
  let totalPaginas = 1;

  do {
    const res = await axios.get(`${urlBase}?page=${pagina}`);
    const data = res.data && Array.isArray(res.data.data) ? res.data.data : [];
    resultados = resultados.concat(data);
    totalPaginas = res.data.meta ? res.data.meta.totalPages : 1;
    pagina++;
  } while (pagina <= totalPaginas);

  return resultados;
}

// Llenar selects de provincias, cantones y distritos
function inicializarUbiSelects(idProvincia, idCanton, idDistrito) {
  const provinciaSelect = document.getElementById(idProvincia);
  const cantonSelect = document.getElementById(idCanton);
  const distritoSelect = document.getElementById(idDistrito);

  async function cargarProvincias() {
    try {
      const provincias = await obtenerTodos('https://api-geo-cr.vercel.app/provincias');
      provinciaSelect.innerHTML = '<option value="">Seleccione provincia</option>';
      provincias.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.idProvincia;
        opt.textContent = p.descripcion;
        provinciaSelect.appendChild(opt);
      });
      cantonSelect.innerHTML = '<option value="">Seleccione cantón</option>';
      distritoSelect.innerHTML = '<option value="">Seleccione distrito</option>';
      cantonSelect.disabled = true;
      distritoSelect.disabled = true;
    } catch (e) {
      alert('Error cargando provincias');
      console.error('Error cargando provincias:', e);
    }
  }

  async function cargarCantones(provinciaId) {
    cantonSelect.innerHTML = '<option value="">Seleccione cantón</option>';
    distritoSelect.innerHTML = '<option value="">Seleccione distrito</option>';
    cantonSelect.disabled = true;
    distritoSelect.disabled = true;

    if (!provinciaId) return;

    try {
      const cantones = await obtenerTodos(`https://api-geo-cr.vercel.app/provincias/${provinciaId}/cantones`);
      cantones.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.idCanton;
        opt.textContent = c.descripcion;
        cantonSelect.appendChild(opt);
      });
      cantonSelect.disabled = false;
    } catch (e) {
      alert('Error cargando cantones');
      console.error('Error cargando cantones:', e);
    }
  }

  async function cargarDistritos(cantonId) {
    distritoSelect.innerHTML = '<option value="">Seleccione distrito</option>';
    distritoSelect.disabled = true;

    if (!cantonId) return;

    try {
      const distritos = await obtenerTodos(`https://api-geo-cr.vercel.app/cantones/${cantonId}/distritos`);
      distritos.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.idDistrito;
        opt.textContent = d.descripcion;
        distritoSelect.appendChild(opt);
      });
      distritoSelect.disabled = false;
    } catch (e) {
      alert('Error cargando distritos');
      console.error('Error cargando distritos:', e);
    }
  }

  provinciaSelect.addEventListener('change', function() {
    cargarCantones(this.value);
  });
  cantonSelect.addEventListener('change', function() {
    cargarDistritos(this.value);
  });

  cargarProvincias();
}