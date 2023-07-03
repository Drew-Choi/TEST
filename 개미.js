function solution (hp) {
  let answer = 0;

  if (hp % 5 === 0) {
    return answer = hp / 5
  } else {
    const rest = hp % 5
   
    if(rest < 3){
      return answer = (Math.trunc(hp / 5)) + rest
    }
    else if( rest >= 3 ){
      const restmid = (hp % 5) % 3
      return answer = (Math.trunc(hp / 5)) + (Math.trunc(rest/3)) + restmid
    }
  }

  return answer;
}

console.log(solution(23));