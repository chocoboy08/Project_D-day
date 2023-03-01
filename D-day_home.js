let date_info = new Date();
let tdYear = date_info.getFullYear();
let tdMonth = date_info.getMonth() + 1;
let tdDate = date_info.getDate();

let today = tdYear + "." + tdMonth + "." + tdDate;

document.querySelector("#today_date").innerHTML = today;

function getInput() {
  let ipYear = document.getElementById("year").value;
  let ipMonth = document.getElementById("month").value;
  let ipDate = document.getElementById("date").value;

  compareDate(ipYear, ipMonth, ipDate);
}

function compareDate(y, m, d) {
  let endDate = new Date(y, m, d);
  let stDate = new Date(tdYear, tdMonth, tdDate);
  let remain = (endDate.getTime() - stDate.getTime()) / (1000 * 60 * 60 * 24);

  const ODD_MONTH = [1, 3, 5, 7, 8, 10, 12];
  const EVEN_MONTH = [2, 4, 6, 9, 11];
  let monthEnd = 0;
  if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
    monthEnd = 31;
  } else if (m == 4 || m == 6 || m == 9 || m == 11) {
    monthEnd = 30;
  } else if (m == 2) {
    if (y % 4 == 0) {
      monthEnd = 29;
      remain += 2;
    } else {
      monthEnd = 28;
      remain += 3;
    }
  }
  if (d <= monthEnd && d > 0) {
    if (remain < 0) {
      alert("날짜를 잘못 입력하셨습니다.");
    } else {
      location.href = `result_page.html?day=${remain}&today=${today}`;
    }
  } else {
    alert("날짜를 잘못 입력하셨습니다.");
  }
}

document.getElementById("letsSee").addEventListener("click", getInput);
