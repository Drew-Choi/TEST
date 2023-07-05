function solution(numbers, direction) {
  let answer = numbers;

  switch(direction){
      case 'right' :
          const lastAnswer = answer.pop();
          answer.unshift(lastAnswer)
          break;
      case 'left' :
          const topAnswer = answer.shift();
          answer.push(topAnswer)
          break;
  }

  return answer;
}

// unshift = 배열 앞에 추가 <=> push랑 반대
// pop()은 배열 맨 끝을 빼냄. const 변수 = 배열.pop()이렇게하면 변수에는 빼낸 요소가 담기고, 기존 배열은 빠진 상태가 됨.
// shift()는 배열 맨 앞을 빼냄. 다른건 pop이랑 같음.