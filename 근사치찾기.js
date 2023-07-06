function solution(array, n) {

    
  let initDiff = Math.abs(array[0] - n)
  let initResult = array[0]
  
  for(let i = 1; i < array.length; i += 1){
      let vs = Math.abs(array[i] - n)
      
      if(vs < initDiff || (vs === initDiff && array[i] < initResult)){
          initDiff = vs
          initResult = array[i]
      }
  }
  
  let answer = initResult;
  
  return answer
}