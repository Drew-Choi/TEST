function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}

// 와 이런 방법이...
// 모든걸 곱하려 하지 말고, 가장 큰 수가 나올 경우와 가장 낮은 값에서 큰 값이 나올 수 있는 경우의 수를 따져서 그것만 해보자.