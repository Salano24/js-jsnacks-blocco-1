//Il software deve chiedere per 10 volte all’utente di inserire un numero.
/* let sommaNumeri = 0
for (let index = 0; index < 10; index++) {
    

    
    const numeri = Number(prompt('Inserisci un numero'))
    
    sommaNumeri += numeri

} */

//Il programma stampa la somma di tutti i numeri inseriti. (modificato) 
 

/* console.log(sommaNumeri); */

/* utilizzo il ciclo while */
let index = 0
let sommaNumeri = 0

while (index < 10){
    const numeri = Number(prompt('Inserisci un numero'))

     index++
    sommaNumeri += numeri

}

console.log(sommaNumeri);