var isWeekday = function(day){
  var week = day.startsWith('s');
  console.log(week);
};
isWeekday('Tuesday');

var date = new Date();
var yearsAgo= function(year){
  var yearCalc = date.getFullYear() - year;
  console.log("My age is "+ yearCalc);
  };
yearsAgo(1200);

var dayToday = function(){
  console.log(date.getDay());
};
dayToday();

var weekDays= ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday','Saterday'];
var getDay = function (){
  console.log(weekDays[date.getDay()]);
}
getDay();


var sameWeekday = function(date1,date2){
  var firstDate = new Date('2014-03-07');
  var secDate = new Date('2014-03-23');
  var getDay = firstDate.getDay();
  var getDay2 = secDate.getDay();
  var weekno = weekDays[getDay];
  var weekDay2 = weekDays[getDay2];
  var check = weekno === weekDay2;
  console.log(check);};
  sameWeekday();
