var date = new Date();
var weekDays= ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday','Saterday'];
var getDay = function (){
  return weekDays[date.getDay()];
}
console.log(getDay());
