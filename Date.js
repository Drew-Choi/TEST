function solution(date1, date2) {
  let answer = 0;

  const day1 = new Date(date1[0], date1[1] -1, date1[2]);
  const day2 = new Date(date2[0], date2[1] -1, date2[2]);

  if(day1 < day2) {
      answer = 1;
  } else {
      answer = 0;
  }

  return answer;
}

// 배열을 넣을 수도 있다. 주의 month는 배열인덱스(1)은, 0부터 시작해서 -1일 해준다.
// 즉, 0이 1월이다. 6이 7월이기 때문에, 배열안에 7이 있어 7월을 표시하고 싶다면, new Date생성시에는 -1을 해서 6으로 만들어줘야 함