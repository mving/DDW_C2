// =========================
// Cargar componentes HTML
// =========================
function loadComponent(id, file, callback) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch((err) => console.error(`Error cargando ${file}:`, err));
}

// =========================
// Año dinámico
// =========================
function setYear() {
  const el = document.getElementById("year");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}

// =========================
// Marcar link activo
// =========================
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".main-nav a");

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // Header
  loadComponent("header", "header.html", () => {
    setActiveNav();
  });

  // Footer
  loadComponent("footer", "footer.html", () => {
    setYear();
  });
});
