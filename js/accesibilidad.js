document.getElementById('accesibilidad-toggle').addEventListener('click', () => {
  document.getElementById('accesibilidad-panel').classList.toggle('active');
});

function toggleContraste() {
  document.body.classList.toggle('contraste');
}

function resaltarEnlaces() {
  document.body.classList.toggle('resaltado');
}

// Tamaño de fuente dinámico
let fontSize = 1;
function cambiarTamanoFuente(accion) {
  if (accion === 'aumentar') fontSize += 0.1;
  if (accion === 'disminuir') fontSize = Math.max(0.6, fontSize - 0.1);
  document.body.style.fontSize = fontSize + 'em';
}

function cambiarEspaciadoTexto() {
  document.body.classList.toggle('espaciado-activo');
}

function detenerAnimaciones() {
  if (!document.getElementById('no-animaciones')) {
    const style = document.createElement('style');
    style.id = 'no-animaciones';
    style.innerHTML = `* {
      animation: none !important;
      transition: none !important;
    }`;
    document.head.appendChild(style);
  }
}

function ocultarImagenes() {
  document.querySelectorAll('img').forEach(img => img.classList.toggle('oculto'));
}

function activarDislexia() {
  document.body.classList.toggle('dislexia');
}

function cambiarCursor() {
  document.body.classList.toggle('cursor-grande');
}

function alinearTexto() {
  document.body.classList.toggle('texto-centrado');
}

function cambiarSaturacion() {
  document.body.classList.toggle('saturado');
}

function cambiarAlturaLinea() {
  document.body.classList.toggle('alto-linea');
}
