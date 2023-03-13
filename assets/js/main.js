// MAIL 
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//Create an array with allowed emails 

let mails = [
    'peppe.vignanello@gmail.com',
    'pinco.pallino@virgilio.it',
    'mario.rossi@gmail.com',
    "marco.bianchi22@gmail.com",
    "francesco.verdi33@libero.it"
];

//Ask to user email with a prompt. console.log. 

const userMail = prompt("Qual è la tua mail?");

console.log(userMail);
//Create a loop to check the emails. 
    // Into the loop create an if/else to check if the user's mail is contained 
    //If is contained print an access message 
        //alse print a deny message 


// Tools
// -prompt
// -Array
// -console.log
// -if/else
// -for
//const/let



//GIOCO DEI DADI 
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.