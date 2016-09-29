var weekDays= ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday','Saterday'];
var sameWeekday = function(date1,date2){
  var firstDate = new Date(date1);
  var secDate = new Date(date2);
  var getDay = firstDate.getDay();
  var getDay2 = secDate.getDay();
  var weekno = weekDays[getDay];
  var weekDay2 = weekDays[getDay2];
  var check = weekno === weekDay2;
  console.log(check);};
  sameWeekday('2014-03-07','2014-03-21');
  sameWeekday('2014-03-07','2014-03-27');
