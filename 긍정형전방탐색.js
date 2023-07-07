// Positive lookahead
// new RegExp(`(?=(찾는 값)).`, 'g')
// 여기서 (?=())이게 중요함.

// 겹치는 횟수를 정함

function solution (myString, pat) {
  const regex = new RegExp(`(?=(${pat})).`, 'g');
  const matchArr = myString.match(regex)
  console.log('정규식 거른거', matchArr);
  
  let answer = matchArr ? matchArr.length : 0;

  return answer;
}

console.log(solution("banana", 'ana'));