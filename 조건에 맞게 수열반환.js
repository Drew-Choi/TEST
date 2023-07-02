function solution(arr) {
  let answer = arr.map((el) => { if(el >= 50 && el % 2 === 0) return el / 2 
                                if(el < 50 && el % 2 !== 0) return el * 2
                                return el
})

  return answer;
}