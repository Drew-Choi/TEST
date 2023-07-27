// 정수 배열 arr이 매개변수로 주어집니다.
// arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다.
// arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  let answer = [];

  let i = 2;
  while(( i - arr.length) < 0) {
   i *= 2;
  }

  if(i >= arr.length) {
    for(let x = 0; x < i; x += 1) {
      if(arr[x] !== null && arr[x] !== undefined ){
        answer.push(arr[x])
      } else {
        answer.push(0)
      }
    }
 }

 return answer;
}

let copy = Array(999).fill(1)
console.log(solution(copy));

function solution(arr) {
  const pow2 = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
  const arrLen = arr.length
  let idx
  for(let i = 0 ; i < pow2.length ; i ++) {
      if(arrLen < pow2[i]) break
      idx = pow2[i]
  }
  
  const zeroArr = Array(idx).fill(0)
  
  return [...arr, ...zeroArr.slice(0, idx-arrLen)]
}