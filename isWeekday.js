var isWeekday = function(day){
  var week = day.startsWith('s');
  return week;
};
var TuesdWeek = isWeekday('Tuesday');
console.log(TuesdWeek);
