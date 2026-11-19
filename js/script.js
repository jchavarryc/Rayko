function actualizarBoton() {
  const oscuro = document.body.classList.contains("oscuro");
  const boton = document.getElementById("btnTema");
  boton.innerHTML = oscuro
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  boton.setAttribute("aria-label", oscuro ? "Activar modo claro" : "Activar modo oscuro");
}

function cambiarTema() {
  document.body.classList.toggle("oscuro");
  const oscuro = document.body.classList.contains("oscuro");
  localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
  actualizarBoton();
}

// para que cuando refresques la pagina no regrese al color anterior 
if (localStorage.getItem("tema") === "oscuro") {
  document.body.classList.add("oscuro");
}
actualizarBoton();
