const 강화 = document.getElementById("강화버튼");
const 시도횟수 = document.getElementById("시도");
const 총메소 = document.getElementById("총메소");
// ToDo: 필요메소 직접 구하기
const 필요메소 = 100000;
const 별들 = document.getElementsByClassName("fa-star");
let 현재별 = 0;

function 별색칠() {
  const 뽑은숫자 = Math.floor(Math.random() * 100) + 1;
  let 성공확률;
  let 실패확률;
  let 파괴확률 = 0;

  if (현재별 < 3) {
    실패확률 = 현재별 * 5 + 5;
  } else if (현재별 < 15) {
    실패확률 = 현재별 * 5;
  } else {
    if (현재별 < 18) {
      파괴확률 = 2.1;
      실패확률 = 67.9;
    } else if (현재별 < 20) {
      파괴확률 = 2.8;
      실패확률 = 67.2;
    } else if (현재별 < 22) {
      파괴확률 = 7;
      실패확률 = 63;
    } else if (현재별 === 22) {
      파괴확률 = 19.4;
      실패확률 = 77.6;
    } else if (현재별 === 23) {
      파괴확률 = 29.4;
      실패확률 = 68.6;
    } else if (현재별 === 24) {
      파괴확률 = 39.6;
      실패확률 = 59.4;
    }
  }
  성공확률 = 100 - 실패확률 + 파괴확률;

  if (뽑은숫자 > 성공확률) {
    // 실패
    if (현재별 > 15) {
      현재별 = 현재별 - 1;
    }
  } else {
    // 성공
    현재별 = 현재별 + 1;
  }
  for (let i = 0; i < 25; i = i + 1) {
    if (현재별 > i) {
      별들[i].classList.replace("fa-regular", "fa-solid");
    } else {
      별들[i].classList.replace("fa-solid", "fa-regular");
    }
  }

  // 별5.children[0].classList.replace("fa-regular", "fa-solid");
}

function 강화함수() {
  시도횟수.innerText = +시도횟수.innerText + 1;
  총메소.innerText = (
    +총메소.innerText.replaceAll(",", "") + 필요메소
  ).toLocaleString();
  // 별 확률 계산

  별색칠();
}

강화.addEventListener("click", 강화함수);
