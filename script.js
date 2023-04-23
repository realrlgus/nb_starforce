const 강화 = document.getElementById("강화버튼");
const 시도횟수 = document.getElementById("시도");
const 총메소 = document.getElementById("총메소");
// ToDo: 필요메소 직접 구하기
const 필요메소 = 100000;

function 강화함수() {
  시도횟수.innerText = +시도횟수.innerText + 1;
  총메소.innerText = (
    +총메소.innerText.replaceAll(",", "") + 필요메소
  ).toLocaleString();

  // 1. 총메소.innerText = 1000 (문자열 )
  // 2. +총메소.innerText = 1000 (숫자)
  // 3. 필요메소 100000 (숫자)
  // 4. +총메소.innerText + 필요메소 = 101000 (숫자)
  // 5. (101000 -> 4번의 결과값).toLocaleString(); = 101,000 (문자열)
  // 6. 총메소.innerText = 101,000 (문자열)
  // 7. 총메소.innerText.replaceAll(",",""); => 총 메소에 있는 쉼표를 모두 찾아서 없앤다
  // 8. 총메소.innerText = 101000 (문자열)
  // 9. +총메소.innerText = 101000 (숫자)

  // +총메소.innerText = 0(숫자)
  // 필요메소 = 100000(숫자)
  // 버튼 클릭시 = 0 + 100000 = 100000(숫자)
  // 숫자라는 타입 => 문자열
  // 필요메소.toString()
}

강화.addEventListener("click", 강화함수);
