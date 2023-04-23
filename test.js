// 변수
// 예약어 let const
// 예약어 변수명(응배) = "응배최고";

let 응배 = "배트";

응배 = "로어";

console.log(응배);

const 리얼 = "기거스";

console.log(리얼);

const 메소 = 1500;
const 아이템값 = 1500;

if (메소 === 아이템값) {
  console.log("구매 완료");
} else if (메소 < 아이템값) {
  console.log("메소가 부족합니다");
}

const 배열 = [1000, 4000, "응배", "배트"];

// console log를 10번 반복하고 싶다
// let i = 0;
// i = i + 1;
// i = 10;

for (let i = 0; i < 배열.length; i++) {
  console.log(배열[i]);
}

const 숫자 = document.getElementById("숫자");
console.log(숫자.innerText);
숫자.innerText = 1500;
