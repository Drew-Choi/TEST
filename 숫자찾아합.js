function solution(my_string) {
  const regex = /^[0-9]+$/
  
  const answer = Array.from(my_string).reduce((acc, cur) => {if(regex.test(cur)){
      console.log('숫자인식', cur); return acc + Number(cur)
  }else {
     console.log('테스트못한거', cur); return acc
  }}, 0 )
  
  return answer;
}

console.log(solution('abc123'));

// g플래그 사용에 유의하라