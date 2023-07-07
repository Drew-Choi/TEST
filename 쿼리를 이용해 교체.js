function solution(arr, queries) {

  let answer = [...arr]
  let store = 0;

  for(let i = 0; i < queries.length; i += 1){
      store = answer[queries[i][0]]
      answer[queries[i][0]] = answer[queries[i][1]]
      answer[queries[i][1]] = store
  }

  return answer
}


// 그런데 쿼리 값으로 위치를 서로 스위치하는 건 forEach로도 가능

function solution(arr, queries) {
  queries.forEach( ([a,b]) => {
      [arr[a],arr[b]] = [arr[b],arr[a]];
  })
  return arr;
}