var Personen = [];

Personen.Name = ["Jan", "Karina", "Fynn"];
Personen.Alter = [20, 23, 18];
Personen.Beruf = ["Polizist", "Arzt", "Feuerwehrmann"];

let newBerufe = Personen.map(function(i){return Personen.Beruf});

console.log(newBerufe);

