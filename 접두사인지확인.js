function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
}

// slice로 0부터 접두사 들어오는 것의 총 길이만큼 잘라내면 is_prefix로 들어오는 글자 만큼 짤리는 거고, 그것이 같으면 앞에서부터 맞는 거니


function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}

// startsWith()로 시작하는 글짜가 일치하는지 확인