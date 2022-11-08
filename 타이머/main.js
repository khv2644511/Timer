/** @format */

const $hour = document.querySelector("#hour");
const $hour_txt = document.querySelector("#hour_txt");

const $min = document.querySelector("#min");
const $min_txt = document.querySelector("#min_txt");

const $sec = document.querySelector("#sec");
const $sec_txt = document.querySelector("#sec_txt");

const $start_btn = document.querySelector("#start_btn");
const $reset_btn = document.querySelector("#reset_btn");

const $start_btn_df = document.querySelector("#start_btn_df");
const $reset_btn_df = document.querySelector("#reset_btn_df");

let hour = 0;
let min = 0;
let sec = 0;
let num = 0;
let sec_time = 0;

// timer : 다른 함수에서 clearInterval을 사용하기 위해 전역변수로 선언 (나중에 setInterval 할당);
let timer;

$hour.addEventListener("click", addHour);
$min.addEventListener("click", addMinc);
$sec.addEventListener("click", addSec);

$start_btn_df.addEventListener("click", startTimer);
$reset_btn_df.addEventListener("click", resetTimer);

// start 클릭 시 초 타이머 작동
function startTimer() {
  // sec은 내가 시작하길 원하는 초
  // sec_time은 줄어들 값
  sec_time = parseInt(sec);
  min_time = parseInt(min);
  // 초만 있을 때
  timer = setInterval(() => {
    if (sec_time > 1) {
      --sec_time;
      $sec_txt.innerText = sec_time;
      // console.log(sec_time);
    } else if (sec_time == 1) {
      console.log(sec_time);
      sec_time = 0;
      $sec_txt.innerText = "00";
    }
    // 초가 0이 되었을 때 분이 1 이상이면 초에 60을 할당
    else if (min_time >= 1 && sec_time == 0) {
      console.log(min);
      sec_time = 60;
      $sec_txt.innerText = 59;
      sec_time--;
      min_time--;
      $min_txt.innerText = min_time;
      // console.log(sec_time);
      if (min_time == 0) {
        $min_txt.innerText = "00";
      }
    }
  }, 1000);
}

function addHour() {
  console.log("c");
  if (hour < 60) {
    hour += 1;
    $hour_txt.innerText = `${hour}`;
  } else if (hour >= 60) {
    hour = 0;
    $hour_txt.innerText = `${hour}0`;
  }
  $start_btn.classList.add("hidden");
  $reset_btn.classList.add("hidden");

  $start_btn_df.style.display = "block";
  $reset_btn_df.style.display = "block";
}

function addMinc() {
  console.log("c");
  if (min < 60) {
    min += 1;
    $min_txt.innerText = `${min}`;
  } else if (min >= 60) {
    min = 0;
    $min_txt.innerText = `${min}0`;
  }
  $start_btn.classList.add("hidden");
  $reset_btn.classList.add("hidden");

  $start_btn_df.style.display = "block";
  $reset_btn_df.style.display = "block";
}

// 초 클릭 시 10초씩 증가
function addSec() {
  console.log("c");
  if (sec < 60) {
    sec += 10;
    $sec_txt.innerText = `${sec}`;
  } else if (sec >= 60) {
    sec = 0;
    $sec_txt.innerText = `${sec}0`;
  }
  $start_btn.classList.add("hidden");
  $reset_btn.classList.add("hidden");

  $start_btn_df.style.display = "block";
  $reset_btn_df.style.display = "block";
}

function stopTimer() {
  // clearInterval(setIntervalFunc);
}

function resetTimer() {
  $sec_txt.innerText = "00";
  clearInterval(timer);
}
