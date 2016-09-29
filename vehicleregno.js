var isFromBellville = function (num){
  var regNum = num.startsWith("CY");
  console.log(regNum);
}
isFromBellville("gy 779585");

var isFromPaarl = function (num){
  var regNum = num.startsWith("CJ");
  console.log(regNum);
}
isFromPaarl("gy 779585");

var isFromCapeTown = function (num){
  var regNum = num.startsWith("CA 732-127");
  console.log(regNum);
}
isFromCapeTown("gy 779585");

var isFromGauteng = function (num){
  var regNum = num.startsWith("DR 12 TY GP");
  console.log(regNum);
}
isFromGauteng("gy 779585");

var isFromLimpopo = function (num){
  var regNum = num.endsWith("T 122 L");
  console.log(regNum);
}
isFromLimpopo("gy 779585");
