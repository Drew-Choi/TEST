function solution(my_string) {
  const regex = /\d+/g
  let answer = my_string.match(regex) !== null ? my_string.match(regex).reduce((acc, cur) => acc + Number(cur), 0) : 0

  return answer;
}

// 정규식에서 /\d+/g 를하면 문자열 내에서 붙어있는 연속된 숫자를 하나로 인식하여 필터링 할 수 있다.