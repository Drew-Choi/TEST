// new Set은 중복값을 허용하지 않음.
// 표현은 { 1, 2, 3 } 이런식으로 중괄호를 사용.

function solution(my_string) {
    let answer = [...new Set(my_string)].join('')
    return answer;
}