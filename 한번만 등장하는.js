function solution(s) {
  let arr = [...s];

  let answer = arr.filter(el => {
      let result = 0;

      for(let i = 0; i < arr.length; i += 1){
          el === s[i] ? result += 1 : result
      }

      if(result === 1) return el
  })
  
  return answer;
}

console.log(solution("abcabcadc"));