function solution(str1, str2) {
  let answer = '';
  let count =  [...str1, ...str2].length;
  let c = 0;
  for(let i = 0; i < count; i += 1){

    i % 2 === 0 ? answer += str1[i] : answer += str2[i - c]
   
    if(i % 2 !== 0) {
      c += 1}
  }
  
  return answer;
}

console.log(solution('aaaaa', 'bbbbb'));