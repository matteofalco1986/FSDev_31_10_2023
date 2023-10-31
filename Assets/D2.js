/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


  let num1 = parseInt(prompt("Scrivi un primo numero"));
  let num2 = parseInt(prompt("Scrivi un secondo numero"));
  let result;

  if (num1 == num2){
    result = num1;
  } else if (num1 > num2){
    result = num1;
  } else if (num1 < num2){
    result = num2;
  } else {
    console.log("Il valore inserito non è valido");
  }

  console.log(`${result} è il numero maggiore`);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


let num3 = parseInt(prompt("Scrivi un numero intero"));
const num4 = parseInt(5);
if (num3 != num4){
  console.log("not equal");
} else {
  console.log(`${num3} e ${num4} hanno lo stesso valore`)
}



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


let num5 = parseInt(prompt("Scrivi un numero intero"));
const num6 = parseInt(5);
result = parseInt(num5 / num6);
const resto = num5 % num6;

if (resto == 0){
  console.log(`${num5} è perfettamente divisibile per ${num6}`)
} else {
  console.log(`${num5} non è perfettamente divisibile per ${num6}. Il risultato è ${result} con resto di ${resto}.`)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


let num7 = parseInt(prompt("Scrivi un numero intero"));
let num8 = parseInt(prompt("Scrivi un secondo numero intero"));
const compare = parseInt(8);

if (num7 == compare && num8 == compare){
  console.log(`Entrambi i numeri hanno valore ${compare}`);
} else if (num7 == compare || num8 == compare) {
  console.log(`Uno dei valori inseriti è uguale a ${compare}`);
} else if (num7+num8 == compare){
  console.log(`La somma di ${num7} e ${num8} è uguale a ${compare}`);
} else if (num7-num8 == compare || num8-num7 == compare){
  console.log(`La differenza tra i valori inseriti è ${compare}`);
} else {
  console.log(`Nessuno degli input da come risultato ${compare}`);
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


const shoppingThreshold = 50;
const shipping = 10;
const minimoDiSpesa = 0;
let saldo = parseFloat(prompt("Quanto vuoi spendere?"))
let totale;

if (saldo <= minimoDiSpesa){
  console.log("Sembra che il tuo carrello sia vuoto. Compra qualcosa, pidocchio!")
} else if (saldo <= shoppingThreshold){
  totale = saldo+shipping;
} else {
  totale = saldo;
}
console.log(`It tuo totale è ${totale}€. Grazie per aver fatto girare l'economia`);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


const sconto = 1-20/100;
saldo *= sconto;

if (saldo <= minimoDiSpesa){
  console.log("Sembra che il tuo carrello sia vuoto. Compra qualcosa, pidocchio!")
} else if (saldo <= shoppingThreshold){
  totale = saldo+shipping;
} else {
  totale = saldo;
}
console.log(`It tuo totale scontato è ${totale}€. Grazie per aver fatto girare l'economia`);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


let num9 = 32;
let num10 = 15;
let num11 = 55;

if (num9 >= num10 && num10 >= num11){
  console.log(`La sequenza di numeri è ${num9}, ${num10}, ${num11}`);
} else if (num9 >= num11 && num11 >= num10){
  console.log(`La sequenza di numeri è ${num9}, ${num11}, ${num10}`);
} else if (num10 >= num11 && num11 >= num9){
  console.log(`La sequenza di numeri è ${num10}, ${num11}, ${num9}`);
} else if (num10 >= num9 && num9 >= num11){
  console.log(`La sequenza di numeri è ${num10}, ${num9}, ${num11}`);
} else if (num11 >= num9 && num9 >= num10){
  console.log(`La sequenza di numeri è ${num11}, ${num9}, ${num10}`);
} else if (num11 >= num10 && num10 >= num19){
  console.log(`La sequenza di numeri è ${num11}, ${num10}, ${num9}`);
} else {
  console.log("Il comparatore non funziona");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/



let num12 = 12;
console.log (typeof(num12));


if (typeof(num12) == "number"){
  console.log("Il carattere inserito è un numero");
} else {
  console.log("Hai inserito un valore non numerico");
}




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num13 = parseInt(prompt ("Inserisci un numero. Verificheremo per te se è pari o dispari"))
if (num13 % 2 == 0 || num13 == 0){
  console.log(`${num13} è pari`)
} else {
  console.log(`${num13} è dispari`)
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me.city);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me.lastName);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[me.skills.length-1];
console.log(me.skills);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arrayLenght = 10;
let myArray = [];
let i = 0;

while (i < arrayLenght){
  myArray.push(i+1);
  ++i;
}

console.log(myArray);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[arrayLenght-1] = 100;
console.log(myArray);

/* SCRIVI QUI LA TUA RISPOSTA */
