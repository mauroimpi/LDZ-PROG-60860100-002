
// Activar modo oscuro si está guardado en localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Validación del formulario de registro
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const nombre = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const pass = form.querySelector("input[type='password']");

      if (!nombre || !email || !pass.value.trim()) {
        alert("Por favor completá todos los campos.");
        e.preventDefault();
      } else if (pass.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        e.preventDefault();
      }
    });
  }
});
