function solution(my_string) {
  let answer = [];

  for(let i = my_string.length-1; i >= 0; i -= 1){
      let sl = my_string.slice(i)
      answer.push(sl)
  }

  answer.sort()

  return answer;
}

// sort()는 기본적으로 사전적 순서로 배열을 정렬한다.
// 숫자를 써서 앞뒤를 비교할 때만 a - b를 씀.