// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서
// 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, s, e) {
  let sl = my_string.slice(s, e + 1)
  let strFirst = my_string.slice(0, s)
  let strLast = my_string.slice(e+1)

  let sum = strFirst

  for(let i = sl.length - 1; i >= 0; i -= 1){
    sum += sl[i]
  }

  let answer = sum + strLast

  return answer
}


// 다른 풀이

function solution2(my_string, s, e) {
  let sl = my_string.slice(s, e + 1);
  let newSl = sl.split('').reverse().join('')

  let answer = my_string.replace(sl, newSl);

  return answer
}

console.log(solution2("Progra21Sremm3", 6, 12));