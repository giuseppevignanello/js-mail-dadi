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

// const userMail = prompt("Qual è la tua mail?");

// console.log(userMail);
const userMail = document.querySelector ("input")

const resultEl = document.getElementById("result")

const submitEl = document.querySelector("button");



submitEl.addEventListener("click",

    function () {

       
        
// create an if/else to check if the user's mail is contained 
//If is contained print an access message 
//else print a deny message 
// console.log (mail)
if (mails.includes(userMail.value)) {
    resultEl.innerText = "Accesso consentito";
} else {
    resultEl.innerText = "Accesso negato";
}

}

)
// Tools
// -prompt
// -Array
// -console.log
// -if/else
// -for
//const/let



//GIOCO DEI DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Create a button for random creation
const buttonEl = document.querySelector(".random_button");
const userSectionEl = document.getElementById("user_section"); 
const cpuSectionEl = document.getElementById("CPU_section");
const resultNumberEl = document.getElementById("result_number");
//Add event listener at button 

buttonEl.addEventListener("click", 
 //A const with random user number and random CPU number. console.log both
function(){

    const userNumber = Math.ceil(Math.random()*6);

    userSectionEl.innerHTML = userNumber;

    const cpuNumber = Math.ceil(Math.random()*6);
    cpuSectionEl.innerHTML = cpuNumber; 

     // if User Number > CPU number log User Wins 
        //else if CPU number > User Number log CPU Wins 
        // else log tie 
   
    if (userNumber > cpuNumber) {
        resultNumberEl.innerHTML = "USER WINS";
    } else if (cpuNumber > userNumber){
        resultNumberEl.innerHTML = "CPU WINS";
    } else {
        resultNumberEl.innerHTML = "TIE, TRY AGAIN";
    }
}
)

   
   