//Chiedi all’utente il suo nome,
const nomeUtente = prompt('Inserisci il tuo nome')
const listaInvitati = ['Fabio Pacifici', 'Marco Salerno']
//controlla che sia nella lista di chi può accedere,
let numeroInvitati= 0

for(let i = 0; i < listaInvitati.length; i++){
    if(listaInvitati.includes(nomeUtente) == false){
        numeroInvitati++
    }
}
//stampa un messaggio appropriato sull’esito del controllo.
if(numeroInvitati == listaInvitati.length){
    alert(`Non sei tra gli invitati`)
} else {
    alert(`Benvenuto ${nomeUtente}`)
}