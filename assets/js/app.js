let deck = [];
const tipos = ["C", "D", "H", "S"]
const especiales = ["J", "Q", "K", "A"]


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
  console.log(deck);
  return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay mas cartas en el deck"
  }

  const carta = deck.pop();

  console.log(deck);
  console.log(carta);
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

const valor = valorCarta(pedirCarta());
console.log({ valor });