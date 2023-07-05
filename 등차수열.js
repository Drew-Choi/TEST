function solution(a, d, included) {
  let answer = 0;

  let count = 0;
  for(let i = 0; i < included.length; i += 1){
      included[i] ? answer += (a + count) : answer
      count += d
  }

  return answer;
}

// 이렇게 풀어도 되고, 아래처럼 해도 된다.

function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
      return flag ? acc + a + d * i : acc
  }, 0)
}

// reduce로 index를 d에 곱하여 수열을 높여간다.