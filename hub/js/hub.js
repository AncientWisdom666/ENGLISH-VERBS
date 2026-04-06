if (localStorage.getItem("auth") !== "true") {
  window.location.replace("../login.html");
}

document.getElementById("bienvenida").textContent =
  `Bienvenido/a, ${localStorage.getItem("nombre")}`;

function logout() {
  localStorage.clear();
  window.location.replace("../index.html");
}

function abrirHerramienta(tipo) {
  if (tipo === "verbs") {
    window.location.href = "../tools/index.html";
  }
}

const herramientas = [
  {
    nombre: "English Verbs",
    desc: "Practica verbos en inglés",
    img: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg",
    dificultad: "easy",
    estado: "active",
    accion: "verbs"
  },
  {
    nombre: "English Colors",
    desc: "Aprende colores",
    img: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483338.jpg?semt=ais_incoming&w=740&q=80",
    dificultad: "easy",
    estado: "disabled"
  },
  {
    nombre: "WH Words",
    desc: "Practica preguntas",
    img: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483337.jpg?semt=ais_incoming&w=740&q=80",
    dificultad: "medium",
    estado: "disabled"
  }
];

function cambiarVista(vista, el) {
  const contenido = document.getElementById("contenido");

  /* sidebar fix */
  document.querySelectorAll(".menu li").forEach(li => li.classList.remove("active"));
  if (el) el.classList.add("active");

  if (vista === "inicio") {
    const nombre = localStorage.getItem("nombre") || "Usuario";

    contenido.innerHTML = `
      <div class="welcome-home">

        <!-- Tarjeta principal de bienvenida -->
        <div class="main-welcome-card">
          <div class="welcome-icon">❄️</div>
          
          <h1>¡Bienvenido/a de nuevo, <span class="highlight">${nombre}</span>!</h1>
          
          <p class="welcome-message">
            Gracias por formar parte de este espacio de aprendizaje.<br>
            Estamos felices de tenerte aquí y deseamos que sigas mejorando tu inglés con nosotros.
          </p>

          <div class="quick-stats">
            <div class="stat-item">
              <span class="stat-number">3</span>
              <span class="stat-label">Herramientas disponibles</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">1</span>
              <span class="stat-label">Activa</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">∞</span>
              <span class="stat-label">Posibilidades</span>
            </div>
          </div>

          <button onclick="cambiarVista('herramientas', document.querySelector('.menu li:nth-child(2)'))" 
                  class="start-learning-btn">
            Empezar a practicar →
          </button>
        </div>

        <!-- Tarjetas secundarias -->
        <div class="home-cards-grid">
          
          <div class="home-card">
            <div class="home-card-icon">📚</div>
            <h3>Progreso</h3>
            <p>Revisa tu avance en las diferentes herramientas de inglés.</p>
            <span class="coming-soon">Próximamente</span>
          </div>

          <div class="home-card">
            <div class="home-card-icon">🏆</div>
            <h3>Logros</h3>
            <p>Desbloquea insignias y mantén tu motivación alta.</p>
            <span class="coming-soon">Próximamente</span>
          </div>

          <div class="home-card">
            <div class="home-card-icon">💡</div>
            <h3>Consejo del día</h3>
            <p>"La práctica diaria de 15 minutos es más efectiva que una sesión larga una vez a la semana."</p>
          </div>

        </div>
      </div>
    `;
}

  if (vista === "herramientas") {

    let html = `
      <!-- Welcome Card -->
      <div class="welcome-card">
        <h2>Bienvenido/a, <span>${localStorage.getItem("nombre") || "Juan Castro"}</span></h2>
        <h4>Herramientas de Inglés</h4>
      </div>

      <div class="tools-grid">
    `;

    herramientas.forEach(h => {
      const isDisabled = h.estado === "disabled";

      html += `
        <div class="tool-wrapper">
          <div class="tool-card ${isDisabled ? 'disabled' : ''}"
               ${!isDisabled && h.accion ? `onclick="abrirHerramienta('${h.accion}')"` : ""}>

            <div class="discount-badge">-25%</div>
            <div class="favorite">❤️</div>
            
            <img src="${h.img}" alt="${h.nombre}">
            
            <div class="card-body">
              <h5>${h.nombre}</h5>
              <p class="desc">${h.desc}</p>

              <div class="price-container">
                <span class="current-price">$3.99</span>
                <span class="old-price">$5.99</span>
              </div>

              <div class="options">
                <div class="option" style="background:#3b82f6"></div>
                <div class="option" style="background:#ef4444"></div>
                <div class="option" style="background:#10b981"></div>
              </div>

              <button class="buy-btn" ${isDisabled ? 'disabled' : ''}>
                Practicar +
              </button>

              <div class="promo-tag">
                ${h.dificultad === "easy" ? "¡Nivel Fácil!" : 
                  h.dificultad === "medium" ? "¡Nivel Intermedio!" : "¡Desafío!"}
              </div>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    contenido.innerHTML = html;
  }
}

function traducir(d) {
  if (d === "easy") return "Fácil";
  if (d === "medium") return "Media";
  if (d === "hard") return "Difícil";
}

cambiarVista("inicio");