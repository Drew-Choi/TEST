function solution(start, end) {
    let answer = [];

    answer.push(start)

    for (let i = end; i < start; i += 1) {
        answer.push(answer[i - end] - 1)
    }

    return answer;
}

// 내 풀이.

// 그런데 다르게도 생각해보자
// 식을 뒤짚어서 i의 값이 작아지.

function solution(start, end) {
    var answer = [];

    for(let i = start; i>=end; i--){
        answer.push(i)
    }

    return answer;
}