function solution(num_list, n) {
  let answer = num_list.includes(n) ? 1 : 0
  return answer;
}

// 배열에서는 include로 트루 폴스 혹은 indexOf도 가능 indexOf는 없으면 -1 있으면 그보다 큰 수