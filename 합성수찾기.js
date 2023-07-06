//  약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = Array.from({length: n}, (_,index) => index + 1 >= 4 && index + 1 <= 10 ? index + 1 : null).filter(Boolean).filter
  (el => {
    let count = 0;
    for(let i = 1; i <= el; i += 1){
      el%i === 0 ? count += 1 : count
    }
   if(count >= 3) return el 
  }).length
  
  return answer;
}

// console.log(solution(10));


const arr = [1,2,3,4,5,15,50]

console.log(String(arr[4]).includes('5'));