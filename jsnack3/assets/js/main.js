//Il software deve chiedere per 10 volte all’utente di inserire un numero.
let sommaNumeri = 0
for (let index = 0; index < 10; index++) {
    

    
    const numeri = Number(prompt('Inserisci un numero'))
    
    sommaNumeri += numeri

}

//Il programma stampa la somma di tutti i numeri inseriti. (modificato) 
 

console.log(sommaNumeri);