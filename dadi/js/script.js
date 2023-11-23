// generiamo i due numeri random
let dadoComputer= parseInt((Math.random() * 6) + 1);
console.log(`NUMERO COMPUTER ${dadoComputer}`);
let dadoGiocatore= parseInt((Math.random() * 6) + 1);
console.log(`NUMERO GIOCATORE ${dadoGiocatore}`);

//controlliamo chi ha il numero piu grande altrimenti se sono uguali stampiamo pareggio
if(dadoGiocatore > dadoComputer){
   console.log("HA VINTO GIOCATORE")
}

else if(dadoGiocatore < dadoComputer){
    console.log("HA VINTO COMPUTER")
}

else{
    console.log("PAREGGIO")
}