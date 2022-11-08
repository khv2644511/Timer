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

$hour.addEventListener("click", addHour);
$min.addEventListener("click", addMinc);
$sec.addEventListener("click", addSec);

$start_btn_df.addEventListener("click", startTimer);
$reset_btn_df.addEventListener("click", resetTimer);

let hour = 0;
let min = 0;
let sec = 0;

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
  } else if (i >= 60) {
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

let num = 0;

// start 클릭 시 초 타이머 작동
function startTimer() {
  let time = parseInt(sec);
  let setIntervalFunc = setInterval(() => {
    if (time > 1) {
      num++;
      time = parseInt(sec) - num;
      $sec_txt.innerText = time;
      console.log(time);
    } else if (time == 1) {
      $sec_txt.innerText = "00";
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(setIntervalFunc);
}

function resetTimer() {
  $sec_txt.innerText = "00";
  clearInterval(setIntervalFunc);
}
