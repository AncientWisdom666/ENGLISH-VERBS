// auth.js - Protección de rutas

function checkAuth() {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  
  if (!isAuthenticated) {
    // Redirige al login sin mostrar nada
    window.location.replace("../index.html");   // Ajusta la ruta según la ubicación
    return false;
  }
  
  return true;
}

// Ejecutar automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
});