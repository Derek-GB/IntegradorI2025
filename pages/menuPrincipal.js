document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formularioAbastecimiento");
  if (!formulario) return;

  const btnGuardar = document.getElementById("btnGuardar");
  const btnEnviar = document.getElementById("btnEnviar");

  // Si ya hay datos guardados, cambiar el estado del botón Guardar
  if (localStorage.getItem("datosFormulario")) {
    btnGuardar.style.backgroundColor = "#059669"; // verde
    btnGuardar.textContent = "Guardado";
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

    // Redirigir a la siguiente página
    window.location.href = "./formAbasteci.html";
  });
});


