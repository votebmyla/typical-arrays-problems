
exports.min = function min (array) {

  if(array == undefined || array.length == 0){
    return 0;
  }else{
    let minNum = array[0];
    for(let i=1; i<array.length; i++){
      if(array[i]<minNum){
        minNum = array[i];
      }
    }
    return minNum;
  }

}

exports.max = function max (array) {

  if(array == undefined || array.length == 0){
    return 0;
  }else{
    let maxNum = array[0];
    for(let i=1; i<array.length; i++){
      if(array[i]>maxNum){
        maxNum = array[i];
      }
    }
    return maxNum;
  }

}

exports.avg = function avg (array) {

  if(array == undefined || array.length == 0){
    return 0;
  }else{
    let sumNum = array[0];
    for(let i=1; i<array.length; i++){
      sumNum = sumNum + array[i];
    }

    let avgNum = sumNum/array.length;
    return avgNum;
  }

  
 
  return 0;
}
