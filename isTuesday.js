var isTuesday=function(day){
var date= day.startsWith('Tu');
return date;
}
var result =  isTuesday("Monday");

console.log(result);
var result =  isTuesday("Tuesday");
console.log(result);
