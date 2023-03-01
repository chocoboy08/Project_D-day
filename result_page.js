const params = new URLSearchParams(document.location.search);
const remain = params.get("day");
const today = params.get("today");

document.getElementById("remain_date").innerHTML = `남은 날짜 ${remain}일`;
document.getElementById("today_date").innerHTML = today;

const img = document.getElementById("result_img");
const text = document.getElementById("main_text");
const sub_text = document.getElementById("sub_text");

if (remain < 50) {
  img.src = "./images/OneStepCloser.png";
  text.innerText = "One step closer";
  sub_text.innerText = "축하해요! 만남이 머지 않았네요.";
} else if (remain < 200) {
  img.src = "./images/CheerUp.png";
  img.style.width = "53vw";
  img.style.height = "19vw";
  text.innerText = "Cheer up!";
  sub_text.innerText = "거의 다 왔어요. 조금만 더 힘을 내세요!";
} else {
  img.src = "./images/TooBad.png";
  text.innerText = "Too bad..";
  sub_text.innerText = "아직 갈 길이 멀어요. 힘을 내세요.";
}

function restart() {
  location.replace("index.html");
}

document.getElementById("restart").addEventListener("click", restart);
