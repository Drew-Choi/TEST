//원티드에서 나온 자바스크립트 코테



let str = "이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테이너를 실행해 보도록 하겠습니다.";




// 위의 문장을 80byte 기준으로 잘라서 배열에 담기
// 한글은 2byte, 한글을 제외한 영어, 숫자, 기호, 띄어쓰기는 1byte
// 자르고 난 다음 글자가 공백일 경우는 생략처리

let BYTE = 0;
let Textline = "";
let Textline2 = "";
let Textline3 = "";
let Textline4 = "";
//let str = "이 글은 ~~" <- 챕쳐가 짤려서 보이지 않지만, 테스트에서 제시하는 장문의 글이 위에 선언되어 있음

for (let i = 0; i < str.length; i++) {
    let Es = escape(str.charAt(i));

    Es.length > 4 ? BYTE += 2 : BYTE += 1;

    if (BYTE <= 80) {
      Textline += Es;
    } else if (BYTE >= 81 && BYTE <= 160 ) {
      Textline2 += Es;
    } else if (BYTE >=161 && BYTE <= 240) {
      Textline3 += Es;
    } else if (BYTE >=241 && BYTE <= 320) {
      Textline4 += Es;
    }
};

let Decoding1 = unescape(Textline);
let Decoding2 = unescape(Textline2);
let Decoding3 = unescape(Textline3);
let Decoding4 = unescape(Textline4);

let ResultByteCutArray = [Decoding1, Decoding2, Decoding3, Decoding4];

console.log(ResultByteCutArray);