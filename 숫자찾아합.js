function solution(my_string) {
  const regex = /^[0-9]+$/
  
  const answer = Array.from(my_string).reduce((acc, cur) => {if(regex.test(cur)){
      console.log(cur); return acc + Number(cur)
  }else {
     console.log(cur); return acc
  }}, 0 )
  
  return answer;
}

console.log(solution('abc123'));