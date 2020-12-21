var database = { profils: []};
var tabProfils = ['CM','ADMIN', 'Formateur','Apprenant'];
for (var i = 1; i<= 4; i++) {
  let j=i+1;
  database.profils.push({
    id: i,
    libelle: tabProfils[j],
  });
}
console.log(JSON.stringify(database));
