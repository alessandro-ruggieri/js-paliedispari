// PAROLE PALINDROME

// SOLUZIONE 1 CON CICLO FOR
/*
function palindrome (parola) {
   let parolaInversa = ''
   for (let i = (parola.length-1); i>=0; i--) {
     parolaInversa += parola[i]    
   }
   console.log(parola, parolaInversa)
   if (parolaInversa === parola) {
      console.log('La parola ' + parola + ' è palindroma') 
   } else {
      console.log('La parola ' + parola + ' non è palindroma') 
   }
}

let parolaUtente = prompt('Inserisci una parola e controlliamo se è palindroma!')
palindrome (parolaUtente) 
*/

// SOLUZIONE 2 CON ARRAY

function palindrome (parola) {
   let parolaArray = parola.split('')
   let arrayInverso = parolaArray.reverse()
   let parolaInversa = arrayInverso.join('')
   
   if (parolaInversa === parola) {
      console.log('La parola ' + parola + ' è palindroma') 
   } else {
      console.log('La parola ' + parola + ' non è palindroma') 
   }
}

let parolaUtente = prompt('Inserisci una parola e controlliamo se è palindroma!')
palindrome (parolaUtente) 

// PARI O DISPARI

let numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'))
console.log('Il numero da te scelto è: ' + numeroUtente)
let evenOrOdd = prompt('Inserisci "pari" se pensi che la somma con il numero del PC sarà pari, altrimenti "dispari"')
console.log('Hai scelto: ' + evenOrOdd)
let randomNumber

function generateRandomNumber () {
   randomNumber = Math.floor(Math.random()*5)+1
   return randomNumber
}

function isEvenOrOdd (number) {
   if (number % 2 === 0) {
      numberType = 'pari'
   } else {
      numberType = 'dispari'
   }
   return numberType
}

generateRandomNumber ()
console.log('Il numero scelto dal PC è: ' + randomNumber)

sum = numeroUtente + randomNumber
console.log('La somma del tuo numero e di quello del PC è: ' + sum)

isEvenOrOdd (sum)
console.log('Questa somma è: ' + numberType)

if (numberType === evenOrOdd) {
   console.log('Complimenti, hai vinto!')
} else {
   console.log('Mi dispiace, hai perso')
}


