const fac = (num)  => {
  if(num === 0 || num === 1){
      return 1
  } else {
      return num * fac(num - 1)
  }
}
// 위가 재귀함수

function solution(n) {
  let answer = 0;

  let i = 1;
  while(true) {
      i += 1
      if(fac(i) > n) {
          answer = i - 1
          break;
      }
  }

  return answer;
}

// 아래와 같이도 가능
function solution(n) {
  let i = 1;
  let f = 1;
  while (f*i < n) f*=++i;
  return i;
}