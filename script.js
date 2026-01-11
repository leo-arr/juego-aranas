let vidas = 3;
let puntaje = 0;
let aranaActual = null;

const aranas = [
  {
    nombre: "Viuda negra",
    imagenes: ["imagenes/viuda1.jpg", "imagenes/viuda2.jpg"]
  },
  {
    nombre: "Araña lobo",
    imagenes: ["imagenes/lobo1.jpg", "imagenes/lobo2.jpg"]
  },
  {
    nombre: "Araña de rincón",
    imagenes: ["imagenes/rincon1.jpg", "imagenes/rincon2.jpg"]
  },
  {
    nombre: "Tarántula",
    imagenes: ["imagenes/tarantula1.jpg", "imagenes/tarantula2.jpg"]
  }
];

function iniciarRonda() {
  // elegir araña
  aranaActual = aranas[Math.floor(Math.random() * aranas.length)];

  // elegir imagen de esa araña
  const imagen = aranaActual.imagenes[
    Math.floor(Math.random() * aranaActual.imagenes.length)
  ];

  document.getElementById("imagen-arana").src = imagen;

  // generar opciones
  let opciones = [aranaActual.nombre];

  while (opciones.length < 4) {
    const nombreRandom = aranas[Math.floor(Math.random() * aranas.length)].nombre;
    if (!opciones.includes(nombreRandom)) {
      opciones.push(nombreRandom);
    }
  }

  opciones = opciones.sort(() => Math.random() - 0.5);

  const contenedor = document.getElementById("opciones");
  contenedor.innerHTML = "";

  opciones.forEach(nombre => {
    const btn = document.createElement("button");
    btn.textContent = nombre;
    btn.onclick = () => verificarRespuesta(nombre);
    contenedor.appendChild(btn);
  });
}

function verificarRespuesta(respuesta) {
  if (respuesta === aranaActual.nombre) {
    puntaje++;
    document.getElementById("puntaje").textContent = `Puntaje: ${puntaje}`;
  } else {
    vidas--;
    document.getElementById("vidas").textContent = "❤️".repeat(vidas);
  }

  if (vidas > 0) {
    iniciarRonda();
  } else {
    finalizarJuego();
  }
}

function finalizarJuego() {
  document.body.innerHTML = `
    <h1>¡Juego terminado! 🎉</h1>
    <h2>Puntaje final: ${puntaje}</h2>
    <p>¡Muy bien! Cada vez reconoces mejor las arañas 🕷️💚</p>
  `;
}

iniciarRonda();
