/** @format */

const $sec = document.querySelector("#sec");
const $sec_txt = document.querySelector("#sec_txt");
const $start_btn = document.querySelector("#start_btn");
const $reset_btn = document.querySelector("#reset_btn");

const $start_btn_df = document.querySelector("#start_btn_df");
const $reset_btn_df = document.querySelector("#reset_btn_df");

$sec.addEventListener("click", addSec);
$start_btn_df.addEventListener("click", startTimer);

let i = 0;
function addSec() {
  console.log("c");
  if (i < 60) {
    i += 10;
    $sec_txt.innerText = `${i}`;
  } else if (i >= 60) {
    i = 0;
    $sec_txt.innerText = `${i}0`;
  }
  $start_btn.classList.add("hidden");
  $reset_btn.classList.add("hidden");

  $start_btn_df.style.display = "block";
  $reset_btn_df.style.display = "block";
}

let sec = 0;
let preSec;
function startTimer() {
  //   let time = new Date();
  //   sec = time.getSeconds();
  //   preSec = time.getSeconds() - 1;
  //   console.log(sec, preSec);

  console.log(i);
  while (sec > 0) {
    let i = parseInt($sec_txt.innerText);
    // i--;
    let time = new Date();
    sec = time.getSeconds();
    // console.log(i);
    // console.log(sec);
    $sec_txt.innerText = `${i}`;
    // if (i == 0) {
    //   break;
    // }
  }
}
