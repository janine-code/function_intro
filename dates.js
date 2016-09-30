var date = new Date();
var yearsAgo= function(year){
  var yearCalc = date.getFullYear() - year;
  return "My age is "+ yearCalc;
  };
console.log(yearsAgo(1200));
