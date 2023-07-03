// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  let answer = 0;

  if(!n_str.startsWith('0')) return answer = n_str
    
  let i = 0;
  while(n_str[i] === '0') {
    i += 1
  }

  return answer = n_str.slice(i)
}

console.log(solution('00000500'));

const a = '00000000007732300923'
console.log(Number(a));

// 넘버로 바꾸면 자연스럽게 앞에 0이 사라진다