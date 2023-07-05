function solution(arr, queries) {
  let answer = [...arr]
  
  let i = 0;

  while(i < queries.length) {

      answer[queries[i][0]] += 1
      answer[queries[i][1]] += 1
      
      i += 1
  }
  
  return answer;
}

console.log(solution([0, 1, 2, 3, 4], [[0, 1],[1, 2],[2, 3]]));