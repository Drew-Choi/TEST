function solution(n) {
  let answer = 0;
  
  let i = n;

  while(true) {
      console.log(i);
      if(i % 6 === 0){
          answer = i/6
          break;
      }

      i += n
  }
  
  return answer;
}

console.log(solution(10));