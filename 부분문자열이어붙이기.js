function solution(my_strings, parts) {
  let answer = my_strings.map((el, index) => el.slice(parts[index][0], parts[index][1]+1)).join('')
  
  return answer;
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]));

const sl = "hammer".slice(3,5);

console.log(sl)