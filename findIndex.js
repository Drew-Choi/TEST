function solution (list) {

  const answer = list.findIndex(el => el < 0);
  
  return answer
}

console.log(solution([1,2,3,4,-5,6]));