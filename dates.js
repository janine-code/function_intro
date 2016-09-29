var date = new Date();
var yearsAgo= function(year){
  var yearCalc = date.getFullYear() - year;
  console.log("My age is "+ yearCalc);
  };
yearsAgo(1200);
