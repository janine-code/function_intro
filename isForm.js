
var isFrom = function(regnum,location){
  var rN =regnum.startsWith('CA');
  var rN2 = location.startsWith('CJ');

  console.log(rN);
  console.log(rN2);
} ;
isFrom('CJ 98912', 'CJ');

var regCheck = function (gaut,limp,eco,map){
  var gau = gaut.startsWith('GP');
    var lim = limp.startsWith('L');
      var ec = eco.startsWith('EC');
        var mp = map.startsWith('MP');
        console.log(gau);
        console.log(lim);
        console.log(ec);
        console.log(mp);

};
regCheck('GP 8096', 'GP 8096','GP 8096','GP 8096');
