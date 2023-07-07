function solution(num_list) {
  let answer = num_list.reduce((acc, cur) => {
    let result = cur;
    while(result !== 1) {
      result % 2 === 0 ? result = result / 2 : result = (result - 1) / 2
      acc += 1;
    }
    return acc
  },0)

  return answer
}

console.log('결과', solution([12, 4, 15, 1, 14]));