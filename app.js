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