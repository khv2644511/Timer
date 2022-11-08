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

let num = 0;
function startTimer() {
  setInterval(() => {
    num++;
    let time = parseInt(i) - num;
    $sec_txt.innerText = time;
    console.log(i - num);
    if (time == 0) {
      console.log("0이다!!!");
      $sec_txt.innerText = "00";
    }
  }, 1000);
}
