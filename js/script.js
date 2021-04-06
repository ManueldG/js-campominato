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
var tentativi = 0;


theFiller(tabella,elem);
console.log(tabella);
do{
    scelta = prompt("inserisci un numero tra 1 e 100");
    if (scelta > 100 || scelta <1) 
        console.log("scelta non valida");
    else
        {
            tentativi++;

        }

}
while(tabella.includes(scelta))



    

