//L’utente inserisce due numeri in successione, con due prompt.
const primoNumero = prompt('Inserisci il primo numero')
const secondoNumero = prompt('Inserisci il secondo numero')
//Il software stampa il maggiore.
if (primoNumero > secondoNumero) {
    alert('Il primo numero è più grande del secondo')
} else if (secondoNumero > primoNumero) {
    alert('Il secondo numero è più grande del primo') 
} else {
    alert('I numeri sono uguali')
}