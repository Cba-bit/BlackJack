let deck = [];
const tipos = ["C", "D", "H", "S"]
const especiales = ["J", "Q", "K", "A"]

let puntosJugador = 0;
puntosComputadora = 0;

const puntajeJugadorHTML = document.querySelectorAll("small");

// Referencias HTML
const btnPedir = document.querySelector("#btnPedir")
const divCartasJugador = document.querySelector("#jugador-cartas")


// Esta funcion crea un nuevo deck
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const tipo of tipos) {
      deck.push(i + tipo)
    }
  }

  for (const tipo of tipos) {
    for (const esp of especiales) {
      deck.push(esp + tipo)
    }
  }

  deck = _.shuffle(deck);
  return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay mas cartas en el deck"
  }

  const carta = deck.pop();
  return carta;
}

//  pedirCarta();
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1)

  return (isNaN(valor))
    ?
    (valor === "A") ? 11 : 10
    : valor * 1;
}

//Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();

  puntosJugador += valorCarta(carta)
  puntajeJugadorHTML[0].innerText = puntosJugador;

  const imgCarta = document.createElement("img")
  imgCarta.src = `assets/cartas/${carta}.png`
  imgCarta.classList.add("carta")
  divCartasJugador.append(imgCarta)

  if (puntosJugador > 21) {
    console.log("Perdiste")
    btnPedir.disabled = true;
  } else if (puntosJugador === 21) {
    console.log("21, genial");
    btnPedir.disabled = true;
  }
})