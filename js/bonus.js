/* TRACCIA E PASSI

1- Chiedere Nome
2- Chiedere Cognome
3- Chiedere colore preferito
4- Stampa nomecognomecolorepreferito21

*/

// 1- Chiedere Nome
const userName = prompt('Come ti chiami?');
console.log(userName);

// 2- Chiedere Cognome
const userLastname = prompt('Qual\'è il tuo cognome?');
console.log(userLastname);

// 3- Chiedere colore preferito
const userFavColor = prompt('Qual\'è il tuo colore preferito?');
console.log(userFavColor);

// Aggiunto 21 per aggiunta al risultato finale
const endPassword = '21';
console.log(endPassword);

// 4- Stampa nomecognomecolorepreferito21
const passResult = userName + userLastname + userFavColor + endPassword;
console.log(passResult);

document.getElementById('result_input').innerText = passResult;

// Greets user
document.getElementById('title_username').innerText = userName + ' ' + userLastname;