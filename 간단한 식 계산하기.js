function solution(binomial) {
  const answer = eval(binomial)

  return answer;
}

// eval은 "2 + 3" 이런 식으로 연산이 가능한 형식이 스트링으로 들어올때, 연산가능한 식으로 바꿔서 결과값을 내어준다.
// 하지만 이건 자료형을 모두 무시하고 뭉개는 결과로 추후 오류나 자료유출의 위험이 있은니 주의해서 사용