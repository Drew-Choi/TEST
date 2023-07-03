function solution (my_string) {
  const answer = Math.trunc(my_string)

  return answer
}

console.log(solution(-4.5));

// 알아야 할 것
// Math에서 trunc는 크고 작고를 떠나 그냥 무조건 정수로 바꾼다.
// round는 반올림, floor는 버림(그런데 가장 작은 정수로. 그런데 trunc와 floor가 비슷해 보이지만 다른 점은 -4.5일 경우 floor는 -5로 반환함에 주의
// trunc는 그냥 -4.5일 경우 그냥 -4로 반환한다.
// ceil은 올림

// 추가 Math.abs()는 소수점을 컨트롤하지 않고 절대값만을 반환한다. 음수->양수

// 랜덤함수. Math.floor(Math.random() * max) 0이상 ~ max 미만
// 랜덤함수. Math.floor(Math.random() * (max+1)) 0이상 ~ max 이하
// 랜덤함수. Math.floor(Math.random() * (max-min)-min) 만약 0이 아닌 최소 값을 1이상으로 두고 싶다면 이렇게함. 이건 min이상 max미만
// 랜덤함수. Math.floor(Math.random() * (max-min+1)-min) 만약 0이 아닌 최소 값을 1이상으로 두고 싶다면 이렇게함. 이건 min이상 max이하
