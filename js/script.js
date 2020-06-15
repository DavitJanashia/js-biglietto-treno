//domande al utente
var chilometri = parseFloat(prompt("Qual'è il numero di chilometri che devi percorrere?"));
var eta = parseFloat(prompt("Inserisci la tua età"));

console.log(chilometri);
console.log(eta);


// calcoli

// prezzo totale
var prezzo = parseFloat(0.21 * chilometri);
var prezzo1 = parseFloat(prezzo.toFixed(2));
console.log(prezzo1);
// prezzominor -20%
var prezzoMinor = parseFloat(prezzo - (prezzo * (20 / 100)));
var prezzoMinor1 = parseFloat(prezzoMinor.toFixed(2));
console.log(prezzoMinor1);

// prezzoever -40%
var prezzoOver = parseFloat(prezzo - (prezzo * (40 / 100)));
var prezzoOver1 = parseFloat(prezzoOver.toFixed(2));
console.log(prezzoOver1);

// logica

if (eta < 18){
  document.getElementById('price').innerHTML = prezzoMinor1 + ' €' + ' (Prezzo scontato per -20%)';
}

else if ((eta >= 18) && (eta < 64)) {
  document.getElementById('price').innerHTML = prezzo1 + ' €';
}

else if (eta >= 64){
  document.getElementById('price').innerHTML = prezzoOver1 + ' €' + ' (Prezzo scontato per -40%)';
}







//   var n = num.toFixed(2); per arrotondare i numeri
