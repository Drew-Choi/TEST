//프로그래머스 Lv0 옹알이 정답율 28%

let babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]
// 가이드
// let museuk = ["aya", "ye", "woo", "ma"];
let result = 0;
const ex = /aya|ye|woo|ma/gm;

for (let i = 0; i < babbling.length; i += 1){
  let exp = babbling[i].replace(ex, 0);
  if (exp === "0" || exp === "00" || exp === "000" || exp === "0000" || exp === "00000") {
    result += 1;
   };
}

console.log(result);