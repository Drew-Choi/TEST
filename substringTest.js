let str = "이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테이너를 실행해 보도록 하겠습니다.";



// let BYTE = 0;

// for (let i = 0; i < str.length; i += 1) {
//   let Char = escape(str.charAt(i));
//   Char.length > 4 ? BYTE += 2 : BYTE += 1;
//   console.log(BYTE);
// }

let BYTE = 0;
for (let i = 0; i < str.length; i += 1) {
  let char = str.charAt(i);
  const exKorean = /[ㄱ-ㅎㅏ-ㅣ가-힣]/gm;
  console.log(char.match(exKorean)); 
}
