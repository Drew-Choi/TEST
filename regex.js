function solution (my_string) {
  const regex = /a|e|i|o|u/ig

  const answer = my_string.replace(regex, '');

  return answer
}

console.log(solution('apple'));