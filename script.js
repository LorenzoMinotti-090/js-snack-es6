//Bici


const bici = [
  { nome: "Toyota Grunge", peso: 12.5 },
  { nome: "Nissan Tail", peso: 14.2 },
  { nome: "Bmw P8", peso: 9.8 },
  { nome: "Tesla Wind", peso: 11.3 },
  { nome: "Porsche Urban", peso: 13.7 }
];

let biciLeggera = bici[0];

for (let i = 1; i < bici.length; i++) {

  if (bici[i]["peso"] < biciLeggera["peso"]) {
    biciLeggera = bici[i];
  }

}

console.log("La bici più leggera è:", biciLeggera["nome"], "con peso", biciLeggera["peso"], "kg");