document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formularioAbastecimiento");
  if (!formulario) return;

  const btnGuardar = document.getElementById("btnGuardar");
  const btnEnviar = document.getElementById("btnEnviar");

  // Inicialmente, establecer el botón como "Guardar"
  btnGuardar.textContent = "Guardar";
  btnGuardar.style.backgroundColor = ""; // Reset color por si acaso

  // Si ya hay datos guardados, cambiar el estado del botón Guardar
  if (localStorage.getItem("datosFormulario")) {
    btnGuardar.style.backgroundColor = "#059669"; // verde
    btnGuardar.textContent = "Guardar";
  }

  btnGuardar.addEventListener("click", () => {
    if (formulario.checkValidity()) {
      const datosFormulario = {
        fecha: formulario.fecha.value.trim(),
        comida: formulario.comida.value,
        personas: formulario.personas.value.trim(),
        albergue: formulario.albergue.value.trim(),
      };
      localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));

      btnGuardar.style.backgroundColor = "#059669"; // verde
      btnGuardar.textContent = "Guardado";
    } else {
      formulario.reportValidity();
    }
  });

  btnEnviar.addEventListener("click", () => {
    const datosGuardados = localStorage.getItem("datosFormulario");

    // Validar que esté guardado
    if (!datosGuardados) {
      alert("Debe guardar el formulario antes de enviar.");
      return;
    }

    // Validar que los campos estén completos (por si cambiaron después de guardar)
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    function conseguirIdAlbergue(nombreAlbergue) {
      axios.get(apiintegrador-production-8ef8.up.railway.app/api/albergues/consulta/nombre/${encodeURIComponent(nombreAlbergue)})
      .then(response => {
        if (response.data && response.data.length > 0) {
          return response.data[0].idAlbergue; // Asumiendo que el idAlbergue es el primer elemento
        } else {
          throw new Error("Albergue no encontrado");
        }
      })
      .catch(error => {
        console.error("Error al conseguir el ID del albergue:", error);
        alert("Error al conseguir el ID del albergue. Por favor, verifica el nombre.");
      });
    }

    axios.post("apiintegrador-production-8ef8.up.railway.app/api/pedidoConsumibles", {
      fechaCreacion: formulario.fecha.value.trim(),
      tipoComida: formulario.comida.value,
      cantidadPersonas: formulario.personas.value.trim(),
      idAlbergue: conseguirIdAlbergue(formulario.albergue.value.trim()), 
    })

    // Redirigir a la siguiente página
    window.location.href = "./formAbasteci.html";
  });
});