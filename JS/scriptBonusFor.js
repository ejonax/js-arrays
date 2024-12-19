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
  let reversedTeachers=[ ];
  for (let i = teachers.length-1;i >= 0; i--){// facciamo le iterazioni del FOR cominciando dalla fine dell'array teachers fino al primo elemento
    reversedTeachers.push(teachers[i]);
   
  }
 console.log(reversedTeachers);
  
  // 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
  // con un nome di lunghezza maggiore o uguale a 5 caratteri
  const longNames = [ ];
  
  for(let i = 0; i < teachers.length; i++){  // il ciclo per controllare tutta l'array teachers
    if(teachers[i].length >=5){ // il controllo se il nome di un insegnante è lungo >=5 chars
      longNames.push(teachers[i]); // se passa il controllo allora si aggiunge alla fine dell'array longNames
      
    }
  }
  console.log(longNames); // stampa l'array finale dopo il ciclo for in completo
  
  // 3. Rimuovi 'Ed' dall'array teachers
  let removalTeachers=[ ];//una nuova array dove mettiamo gli insegnato dell'array teachers che non hanno il nome Ed
  for (let i = 0;i <=teachers.length-1; i++){
    if(teachers[i]!='Ed'){ // controllo per trovare gli insegnati che non hanno il nome Ed e che li mettiamo nella array removalTeachers
      removalTeachers.push(teachers[i]);
    }
  
  }
 console.log(removalTeachers);
 