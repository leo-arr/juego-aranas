let vidas = 3;
let puntaje = 0;
let aranaActual = null;

const aranas = [
  {
    nombre: "Viuda negra",
    imagenes: ["imagenes/viuda1.JPG", "imagenes/viuda2.jpg", "imagenes/viuda3.jpg", "imagenes/viuda4.jpg"]
  },
  {
    nombre: "Araña lobo",
    imagenes: ["imagenes/lobo1.jpg", "imagenes/lobo2.jpg", "imagenes/lobo3.jpg", "imagenes/lobo4.jpg", "imagenes/lobo5.jpg", "imagenes/lobo6.jpg", "imagenes/lobo7.jpg", "imagenes/lobo8.jpg", "imagenes/lobo9.jpg", "imagenes/lobo10.jpg", "imagenes/lobo11.jpg"]
  },
  {
    nombre: "Araña de rincón",
    imagenes: ["imagenes/rincon1.jpg", "imagenes/rincon2.jpg", "imagenes/rincon3.jpg", "imagenes/rincon4.jpg", "imagenes/rincon5.jpg", "imagenes/rincon6.jpg", "imagenes/rincon7.jpg", "imagenes/rincon8.jpg", "imagenes/rincon9.jpg", "imagenes/rincon10.jpg", "imagenes/rincon11.jpg", "imagenes/rincon12.jpg", "imagenes/rincon13.jpg", "imagenes/rincon14.jpg", "imagenes/rincon15.jpg"]
  },
  {
    nombre: "Tarántula",
    imagenes: ["imagenes/tarantula1.jpg", "imagenes/tarantula2.jpg", "imagenes/tarantula3.jpg"]
  },
  {
    nombre: "Falsa Viuda",
    imagenes: ["imagenes/falsa-viuda1.jpg", "imagenes/falsa-viuda2.jpg", "imagenes/falsa-viuda3.jpg", "imagenes/falsa-viuda4.jpg", "imagenes/falsa-viuda5.jpg", "imagenes/falsa-viuda6.jpg", "imagenes/falsa-viuda7.jpg", "imagenes/falsa-viuda8.jpg", "imagenes/falsa-viuda9.jpg", "imagenes/falsa-viuda10.jpg", "imagenes/falsa-viuda11.jpg", "imagenes/falsa-viuda12.jpg", "imagenes/falsa-viuda13.jpg"]
  },
  {
    nombre: "Relojera o patas largas",
    imagenes: ["imagenes/relojera1.jpg", "imagenes/relojera2.jpg"]
  },
  {
    nombre: "Tigre",
    imagenes: ["imagenes/tigre1.jpg", "imagenes/tigre2.jpg", "imagenes/tigre3.jpg", "imagenes/tigre4.jpg"]
  },
  {
    nombre: "Austrochilidae",
    imagenes: ["imagenes/austrochilidae1.jpg"]
  },
  {
    nombre: "Fantasma",
    imagenes: ["imagenes/fantasma1.jpg"]
  },
  {
    nombre: "Opilon",
    imagenes: ["imagenes/opilon1.jpg"]
  },
  {
    nombre: "Saltarina",
    imagenes: ["imagenes/saltarina1.jpg"]
  },
  {
    nombre: "Sicario",
    imagenes: ["imagenes/sicario1.jpg", "imagenes/sicario2.jpg"]
  },
  {
    nombre: "Tierra",
    imagenes: ["imagenes/tierra1.jpg"]
  },
  {
    nombre: "Tubo",
    imagenes: ["imagenes/tubo1.jpg"]
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
