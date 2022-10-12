//L’utente inserisce due parole in successione, con due prompt.

const primaParola = prompt('Inserisci la prima parola')
const secondaParola = prompt('Inserisci la seconda parola')

//Il software stampa prima la parola più corta, poi la parola più lunga.

if (primaParola.length > secondaParola.length) {
    console.log('Parola più corta->',secondaParola,'Parola più lunga->', primaParola);
} else if(secondaParola.length > primaParola.length){
    console.log('Parola più corta->',primaParola,'Parola più lunga->', secondaParola);
} else{
    console.log('Le parole hanno la stessa lunghezza');
}