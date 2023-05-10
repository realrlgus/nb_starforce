const 강화 = document.getElementById("강화버튼");
const 시도횟수 = document.getElementById("시도");
const 총메소 = document.getElementById("총메소");
const 별들 = document.getElementsByClassName("fa-star");
const 현재별문구 = document.getElementById("현재별");
const 다음별문구 = document.getElementById("다음별");
const 성공확률문구 = document.getElementById("성공확률");
const 실패확률문구 = document.getElementById("실패확률");
const 파괴확률문구 = document.getElementById("파괴확률");
const 필요메소문구 = document.getElementById("필요메소");
const 파괴 = document.getElementById("파괴");
const 총파괴 = document.getElementById("총파괴");
const 팝업 = document.getElementById("팝업");
const 파괴확인 = document.getElementById("파괴확인");
const 초기화버튼 = document.getElementById("초기화버튼");
const 실패 = document.getElementById("실패");
const 찬스타임 = document.getElementById("찬스타임");
const 장비레벨선택 = document.getElementById("장비레벨");

let 현재별 = 24;
let 연속실패횟수 = 0;
let 장비레벨 = 140;

function 강화비용계산(장비레벨) {
  let 강화비용;
  if (현재별 < 10) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1)) / 25;
  } else if (현재별 === 10) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 400;
  } else if (현재별 === 11) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 220;
  } else if (현재별 === 12) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 150;
  } else if (현재별 === 13) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 110;
  } else if (현재별 === 14) {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 75;
  } else {
    강화비용 = 1000 + (장비레벨 ** 3 * (현재별 + 1) ** 2.7) / 200;
  }
  강화비용 = Math.round(강화비용 / 100) * 100;
  return 강화비용;
}

function 강화확률계산() {
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
      // 파괴확률 = 39.6;
      // 실패확률 = 59.4;

      파괴확률 = 0;
      실패확률 = 0;
    }
  }

  if (연속실패횟수 === 2) {
    // 찬스타임
    파괴확률 = 0;
    실패확률 = 0;
    실패.classList.add("display-none");
    파괴.classList.add("visibility-hidden");
    찬스타임.classList.remove("display-none");
  } else {
    실패.classList.remove("display-none");
    파괴.classList.remove("visibility-hidden");
    찬스타임.classList.add("display-none");
  }

  성공확률 = 100 - (실패확률 + 파괴확률);

  return {
    성공확률: 성공확률,
    실패확률: 실패확률,
    파괴확률: 파괴확률,
    현재별: 현재별,
  };
}

function 강화여부() {
  const 뽑은숫자 = Math.floor(Math.random() * 1000) + 1;

  const 강화확률 = 강화확률계산();

  if (뽑은숫자 > 강화확률.성공확률 * 10) {
    // 파괴
    if (뽑은숫자 - 강화확률.성공확률 * 10 <= 강화확률.파괴확률 * 10) {
      현재별 = 12;
      팝업.classList.remove("visibility-hidden");
      총파괴.innerText = +총파괴.innerText + 1;
    } else {
      if ((현재별 > 15 && 현재별 < 20) || 현재별 >= 21) {
        현재별 = 현재별 - 1;
        연속실패횟수 = 연속실패횟수 + 1;
      }
    }
  } else {
    현재별 = 현재별 + 1;
    연속실패횟수 = 0;
  }
  if (현재별 > 14) {
    파괴.classList.remove("visibility-hidden");
  }
}

function 별색칠() {
  for (let i = 0; i < 25; i = i + 1) {
    if (현재별 > i) {
      별들[i].classList.replace("fa-regular", "fa-solid");
    } else {
      별들[i].classList.replace("fa-solid", "fa-regular");
    }
  }
}

function 강화함수() {
  const 강화비용 = 강화비용계산(장비레벨);

  강화여부();
  별색칠();
  const 확률모음 = 강화확률계산();

  const 필요메소 = 강화비용계산(장비레벨);

  시도횟수.innerText = +시도횟수.innerText + 1;
  총메소.innerText = (
    +총메소.innerText.replaceAll(",", "") + 강화비용
  ).toLocaleString();
  현재별문구.innerText = 확률모음.현재별;
  다음별문구.innerText = 확률모음.현재별 + 1 === 26 ? 25 : 확률모음.현재별 + 1;
  성공확률.innerText = 확률모음.성공확률.toFixed(1);
  실패확률.innerText = 확률모음.실패확률.toFixed(1);
  파괴확률.innerText = 확률모음.파괴확률.toFixed(1);
  필요메소문구.innerText = 필요메소.toLocaleString();
}

function 초기화함수() {
  현재별 = 0;
  const 확률모음 = 강화확률계산();
  const 필요메소 = 강화비용계산(장비레벨);
  별색칠();

  시도횟수.innerText = 0;
  총메소.innerText = 0;
  현재별문구.innerText = 확률모음.현재별;
  다음별문구.innerText = 확률모음.현재별 + 1;
  성공확률.innerText = 확률모음.성공확률.toFixed(1);
  실패확률.innerText = 확률모음.실패확률.toFixed(1);
  파괴확률.innerText = 확률모음.파괴확률.toFixed(1);
  필요메소문구.innerText = 필요메소.toLocaleString();
  파괴.classList.add("visibility-hidden");
  총파괴.innerText = 0;
}

강화.addEventListener("click", 강화함수);
파괴확인.addEventListener("click", function () {
  팝업.classList.add("visibility-hidden");
  파괴.classList.add("visibility-hidden");
});
초기화버튼.addEventListener("click", 초기화함수);

장비레벨선택.addEventListener("change", function () {
  const 장비레벨선택값 = document.querySelector(
    "#장비레벨 option:checked"
  ).value;
  장비레벨 = 장비레벨선택값;
  초기화함수();
});
