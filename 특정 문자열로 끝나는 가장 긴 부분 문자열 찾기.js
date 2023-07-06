// 문자열 myString과 pat가 주어집니다. 
// myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서
// return 하는 solution 함수를 완성해 주세요.

function solution (str, pat) {
 let lastLeng = 0;

  if(pat.length > 1) {
    lastLeng = str.lastIndexOf(pat) + pat.length
  } else {
    lastLeng = str.lastIndexOf(pat)
  }

  let answer = str.slice(0, lastLeng);

 return answer; 
}

console.log(solution('AbCdEFG', "dE"));

