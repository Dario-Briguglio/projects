//Esercizi Array

/* 
    Step 1: Definisci un codice fiscale
    Step 2: Trasforma il codice fiscale in un array di caratteri
    Step 3: Trova la lunghezza dell'array
    Step 4: Trova l'indice del carattere "M" nell'array
    Step 5: Estrai una sottostringa dell'array basata su indici di inzio e fine
    Step 6: Aggiungi un carattere all'inizio dell'array
    Step 7: Rimuovi l'ultimo carattere dell'array
    Step 8: Ordina l'array in ordine alfabetico
    Step 9: Unisci gli elementi dell'array in una stringa
    Step 10: Trasforma la stringa in minuscolo
*/

let codiceFiscale = "RSSMRA85M01H501Z"
const arrayCaratteri = codiceFiscale.split("");
const lunghezzaArray = arrayCaratteri.length;
const indiceM=arrayCaratteri.indexOf("M");
const sottoStringa = arrayCaratteri.slice(6,11);
arrayCaratteri.unshift('x');
arrayCaratteri.pop()
arrayCaratteri.sort()
arrayCaratteri.reverse()
const cf = arrayCaratteri.join('');
const lcf = cf.toLowerCase();
console.log(arrayCaratteri.includes('W'))