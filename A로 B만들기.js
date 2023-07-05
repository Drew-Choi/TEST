// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.


function solution(before, after) {

  let aft = [...after];
  let fil = [...before].filter(el => {
    let result = false;

    for(let i = 0; i < after.length; i += 1){
      if(el === aft[i]) {
        result = true;
        aft[i] = '';
        break;
      } else {
        result;
      }
    }

    console.log(aft);

    if(result) {
      return el
    }
  })

  let answer = fil.length === after.length ? 1 : 0
  
  return answer;
}

console.log(solution('olleh', 'hello'));


// 하 바보 같았다.

function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

// 모두 똑같이 순서를 만들어서 단어들이 일치하는지 보면 되는 거였다....