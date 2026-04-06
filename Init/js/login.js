async function login() {
  const userInput = document.getElementById("usuario").value.trim();
  const passInput = document.getElementById("password").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (!userInput || !passInput) {
    mensaje.textContent = "Completa todos los campos";
    mensaje.className = "text-danger mt-2";
    return;
  }

  try {
    const response = await fetch("./usersInfo/users.csv");
    const data = await response.text();

    const filas = data.split("\n").slice(1);
    let encontrado = false;

    filas.forEach(fila => {
      const [usuario, password, nombre] = fila.trim().split(",");

      if (usuario === userInput && password === passInput) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("nombre", nombre);
        encontrado = true;
      }
    });

    if (encontrado) {
      window.location.replace("./hub/hub.html");
    } else {
      mensaje.textContent = "Usuario o contraseña incorrectos";
      mensaje.className = "text-danger mt-2";
    }

  } catch (error) {
    mensaje.textContent = "Error cargando usuarios";
    mensaje.className = "text-danger mt-2";
    console.error(error);
  }
}