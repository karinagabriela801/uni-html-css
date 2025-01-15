const person1 = {name: 'Jan', alter: 20, beruf: 'Polizist'};
const person2 = {name: 'Fynn', alter: 18, beruf: 'Feuerwehrmann'};
const person3 = {name: 'Karina', alter: 23, beruf: 'Arzt'};

const personen = [person1, person2, person3];
console.log('Personen: ', personen);

const berufe = personen.map(person => person.beruf);
console.log('Berufe: ', berufe);

const neuePerson = {name: 'Lara', alter: 19, beruf: 'Lehrer'};
const updatePersonen = [...personen, neuePerson];
console.log('Update Personen', updatePersonen);



