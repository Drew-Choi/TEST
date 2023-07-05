// 내풀이
function solution(arr, delete_list) {
  let answer = arr.filter(el => {
      let result = 0;
      for(let i = 0; i < delete_list.length; i +=1) {
      el === delete_list[i] ? result = 1 : result
  }
      if(result === 0) return el
  })

  return answer;
}

// 더 간단한 풀이
function solution(arr, delete_list) {
  let answer = arr.filter(el => !delete_list.includes(el))
  
  return answer;
}