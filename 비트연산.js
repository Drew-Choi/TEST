// 2진법으로 << 왼쪽 시프트는 2를 곱하는 효과, >> 오른쪽 시프트는 2를 나누는 효과가 있음.

// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

function solution (n, t) {
  let answer = n << t

  return answer
}

console.log(solution(7, 15));