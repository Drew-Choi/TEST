function solution(num_list, n) {
  let answer = [];

  let sum = [];
  let count = 0;
  for(let i = 0; i < num_list.length/n; i += 1){
      for(let x = (0 + count); x < (n + count); x += 1){
          sum.push(num_list[x])
          if((x+1) % n === 0){
          answer.push(sum)
          sum = [];
          }
      }
      count += n
  }

  return answer;
}

// 그런데 더 쉽게 가능


function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}

function solution(num_list, n) {
  return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}

// splice를 활용했음....