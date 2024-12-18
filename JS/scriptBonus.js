const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [ ];

for(var i = 0; i < teachers.length; i++){  // il ciclo per controllare tutta l'array teachers
  if(teachers[i].length >=5){ // il controllo se il nome di un insegnante è lungo >=5 chars
    longNames.push(teachers[i]); // se passa il controllo allora si aggiunge alla fine dell'array longNames
    
  }
}
console.log(longNames); // stampa l'array finale dopo il ciclo for in completo

// 3. Rimuovi 'Ed' dall'array teachers
const indexEd=teachers.indexOf('Ed');//trovo l'indice del nome Ed
//console.log(indexEd);//stampo l'indice trovato
teachers.splice(indexEd, 1); // rimuovo solo un elemento cominciando dall'indice trovato
console.log(teachers);//stampo la nuova array