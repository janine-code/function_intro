
var isFrom = function(regnum,location){
  var rN =regnum.startsWith('CA');
  var rN2 = location.startsWith('CJ');

  return rN;
  return rN2;
} ;
console.log(isFrom('CJ 98912', 'CJ'));

var regCheck = function (gaut,limp,eco,map){
  var gau = gaut.startsWith('GP');
    var lim = limp.startsWith('L');
      var ec = eco.startsWith('EC');
        var mp = map.startsWith('MP');
        return gau;
        return lim;
        return ec;
        return mp;

};
console.log(regCheck('GP 8096', 'GP 8096','GP 8096','GP 8096'));
