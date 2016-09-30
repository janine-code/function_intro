var isFromBellville = function (num){
  var regNum = num.startsWith("CY");
  return regNum;
}
console.log(isFromBellville("gy 779585"));

var isFromPaarl = function (num){
  var regNum = num.startsWith("CJ");
  return regNum;
}
console.log(isFromPaarl("gy 779585"));

var isFromCapeTown = function (num){
  var regNum = num.startsWith("CA 732-127");
  return regNum;
}
console.log(isFromCapeTown("gy 779585"));

var isFromGauteng = function (num){
  var regNum = num.startsWith("DR 12 TY GP");
  return regNum;
}
console.log(isFromGauteng("gy 779585"));

var isFromLimpopo = function (num){
  var regNum = num.endsWith("T 122 L");
  return regNum;
}
console.log(isFromLimpopo("gy 779585"));
