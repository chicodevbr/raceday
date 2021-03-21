let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if (age >= 18 && early) {
  raceNumber += 1000 
}
if (early && age >= 18) {
  console.log (`Sua corrida começa às 9:30 e este: ${raceNumber} é o seu número de corrida.`)
} else if (!early && age >= 18) {
  raceNumber += 1000
  console.log (`Sua corrida começa às 11:00 e este: ${raceNumber} é o seu número de corrida.`)
} else {
  console.log(`Sua corrida começa às 12:30 e este: ${raceNumber} é o seu número de corrida.`)
}

