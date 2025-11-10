//Squadre Calcio


const squadre = [
  { nome: "Cesena", punti: 0, falliSubiti: 0 },
  { nome: "Palermo", punti: 0, falliSubiti: 0 },
  { nome: "Mantova", punti: 0, falliSubiti: 0 },
  { nome: "Breascia", punti: 0, falliSubiti: 0 }
];

function randomNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = randomNumero(1, 50);
  squadre[i].falliSubiti = randomNumero(1, 30);
}

const squadreFalli = [];

for (let i = 0; i < squadre.length; i++) {
  squadreFalli.push({
    nome: squadre[i].nome,
    falliSubiti: squadre[i].falliSubiti
  });
}

for (let i = 0; i < squadreFalli.length; i++) {
  console.log(
    "Nome: " + squadreFalli[i].nome + 
    ", Falli Subiti: " + squadreFalli[i].falliSubiti
  );
}