let date_info = new Date();
let year = date_info.getFullYear();
let month = date_info.getMonth();
let date = date_info.getDate();

let today = year + "." + month + "." + date;

document.querySelector("#today_date").innerHTML = today;