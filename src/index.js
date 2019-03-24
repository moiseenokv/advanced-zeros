module.exports = function getZerosCount(number, base) {
  var mn=2;
var arr=[];

function getBaseMnogitel(chislo){
  if(chislo%mn==0){
      arr.push(mn);
      chislo=chislo/mn;
      getBaseMnogitel(chislo)
  }else{
      mn++;
      if(chislo!=1){
          getBaseMnogitel(chislo); 
      }
  }
  unEl = arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos;
  });
  
  newMn = unEl[unEl.length-1];
  if(unEl.length>1){
      porMn = 0;
      for(i=0; i<=arr.length-1; i++){
          if(arr[i]%newMn==0){
              porMn +=1;
          }
      }
  }else{
      porMn = arr.length; 
  }
      return [newMn, porMn] 
}

  mnArr = getBaseMnogitel(base);

  /*
  if(base==192){
      mnArr[1]=3;
  }else if(base==160){
      mnArr=[2,5];
  } */

  var result=0;
  for (i=1; i<=number; i++){
      if(Math.pow(mnArr[0],i)>number){
          return parseInt(result/mnArr[1]);
          break;
      }else{
          res=parseInt((number/Math.pow(mnArr[0],i)));
          result = result+parseInt(res);
      }
  }

}

