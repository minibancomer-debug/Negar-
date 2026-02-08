const palabras = ["Negar", " I", " want", " fuck", " You"];

const colores  = ["white", "#2196f3", "#e53935", "pink"];

let indice = 1;

function mostrarPalabra() {

  const texto = document.getElementById("texto");

  texto.style.transform = "scale(1.15)";

  setTimeout(() => {

    if (indice < palabras.length) {

      texto.innerText += palabras[indice];

      texto.style.color = colores[indice];

      indice++;

    } else {

      texto.innerText = palabras[0];

      texto.style.color = colores[0];

      indice = 1;

    }

    texto.style.transform = "scale(1)";

  }, 150);

  crearCorazon();

}

function crearCorazon() {

  const corazon = document.createElement("div");

  corazon.className = "corazon";

  const emojis = ["💖", "❤️", "🤤"];

corazon.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  corazon.style.left = Math.random() * window.innerWidth + "px";

  corazon.style.top = Math.random() * window.innerHeight + "px";

  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 1500);

}