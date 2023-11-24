// primo passo chiedere al utente la sua mail
let mail= prompt("inserisci la tua mail");

// mi creo un array contenente tutte le mail autorizzate
let list_mail= ["ciccio@email.com","pippo@email.com","aldo@email.com","giacomo@email.com","giovanni@email.com","francesco@email.com","luigi@email.com"];
let size= list_mail.length;

let flag= false;
//creiamo un ciclo for che controlli se l indirizzio mail inserito è presente  nel array.

for(i=0; i<size; i++){
    if(list_mail[i] == mail){
       flag= true;
    }
}

 if(flag == true){
        alert("La tua mail risulta nella nostra base dati");
    } else{
        alert("Ci dispiace, la tua mail non risulta nella nostra base dati");
    }