/* 
Esercizio di oggi: Campo Minato
nome repo: js-campominato
Rifare  Campo Minato come visto a lezione questa mattina.
Descrizione
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
Consiglio:
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante
*/
var tabella = [];
var min = 1;
var max = 100;
var elem = 16; 
var scelta;
var scelteEffettuate = [];
var tentativi = 0;
var maxTentativi = 3;



var livello= parseInt(prompt("scegli il livello di difficoltà (0/1/2)"));
switch (livello){
    case 0 : max=100; 
    break;
    case 1 : max = 80;
    break;
    case 2 : max = 50;
    break;
    default : console.log("scelta non riconosciuta sarà impostato il livello massimo");
            max = 50;
}

theFiller(tabella,elem,min,max); // popola la matrice
console.log(tabella);

do{
    scelta = parseInt(prompt("inserisci un numero tra 1 e "+max+" tentativo n " + tentativi + " / "+maxTentativi));
    if ((scelta > max) || (scelta <min)||(scelteEffettuate.includes(scelta))) 
        console.log("scelta non valida");
    else
        {
            tentativi++;
            console.log(tentativi);
        }
    scelteEffettuate.push(scelta); 

}
while((!tabella.includes(scelta))&&(tentativi<maxTentativi));

if (tentativi=maxTentativi)
    console.log("hai vinto !!!");
else 
    console.log("BOOOM!!! Hai perso");



    

