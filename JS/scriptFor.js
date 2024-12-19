const teachers = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ]; // NON MODIFICARE QUESTA VARIABILE
  
  // 1. Utilizzando un indice sull'array teachers, cambia il valore della
  // variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
  const fourthTeacher = teachers[3];
  console.log(fourthTeacher);
  
  // 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
  teachers[4] = 'Patrick';
  console.log(teachers[4]);//stampa solo il valore del quinto insegnate
  console.log(teachers);//stampa tutta l'array degli insegnati dove il quinto insegnate è Patrick
  
  // 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
  const lastTeacher = teachers.pop();
  console.log(lastTeacher);
  
  // 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
  const firstTeacher = teachers.shift();
  console.log(firstTeacher);
  
  // 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
  teachers.push('Vanesa');
  console.log(teachers);//stampa tutta l'array degli insegnanti dove Vanessa è ultima insegnate dell'array
  
  // 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
  teachers.unshift('Sarah');
  console.log(teachers);////stampa tutta l'array degli insegnanti dove Sarah è la prima insegnate dell'array
  
  // 7. Verifica se 'Fabio' è presente nell'array teachers
  // e salva il risultato nella variabile isFabioPresent
  let isFabioPresent ;
  for (let i=0; i<teachers.length;i++){
     if (teachers[i]==='Fabio'){
       isFabioPresent=true;
       //se lo troviamo Fabio nell'array allora l'indice i la mettiamo uguale alla lunghezza dell'array cosi usciamo dal ciclo for
       i=teachers.length; // stessa cosa si poteva fare anche usando break;
      }
     else{
       isFabioPresent = false;
     }
  }
  console.log(isFabioPresent);

  /*
  let isFabioPresent ;
  for (let i=0; i<teachers.length;i++){
     if (teachers[i]==='Fabio'){
       isFabioPresent=true;
       break; // stesso risultato usando break; al posto dell'indice uguale alla length dell'array
      }
     else{
       isFabioPresent = false;
     }
  }
  console.log(isFabioPresent);
  */
  
  // 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
  // e salvalo nella variabile lewisIndex
  let lewisIndex ;
  for (let i=0; i<teachers.length;i++){
     if (teachers[i]==='Lewis'){
      lewisIndex = i;
       //se lo troviamo Lewis nell'array allora l'indice i la mettiamo uguale alla lunghezza dell'array cosi usciamo dal ciclo for
       //break;// stessa cosa si poteva fare anche usando break;
       i=teachers.length;
      }
  }
  // se Lewis non si trova nell'array teachers allora si stampa undefined siccome lewisIndex non lo abbiamo inizializzato
  console.log(lewisIndex);
  
  // 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
  // separata da virgole e salvala nella variabile teachersString
  let teachersString=" ";
  for (let i=0; i<teachers.length;i++){
   if (i<(teachers.length-1)){// ci serve come controllo cosi non mettiamo la virgola dopo ultimo elemento dell'array
  teachersString += teachers[i]+",";
    }
    else {
       teachersString += teachers[i];
    }
  }
  console.log(teachersString);
  
  // 10. Verifica se l'array teachers è vuoto
  // e salva il risultato nella variabile isTeachersEmpty
  const isTeachersEmpty = (teachers.length===0);
  console.log(isTeachersEmpty);