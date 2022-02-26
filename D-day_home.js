let date_info = new Date();
let td_year = date_info.getFullYear();
let td_month = date_info.getMonth() + 1;
let td_date = date_info.getDate();

let today = td_year + "." + td_month + "." + td_date;

document.querySelector("#today_date").innerHTML = today;

function getDate(){
    let ip_year = document.getElementById("year").value;
    let ip_month = document.getElementById("month").value;
    let ip_date = document.getElementById("date").value;
    
    compareDate(ip_year, ip_month, ip_date);
}

function compareDate(y, m, d){
    let endDate = new Date(y, m, d);
    let stDate = new Date(td_year, td_month, td_date);
    let remain = (endDate.getTime() - stDate.getTime()) / (1000*60*60*24);
    
    if(remain < 0){
        alert("날짜를 잘못 입력하셨습니다.");
    }
    else{
        if(remain <= 50){
            alert(remain + ", One step closer!");
        }
        else if(remain <= 100){
            alert(remain + ", Cheer up!");
        }
        else{
            alert(remain + ", Too bad..");
        }
    }
}
document.getElementById("letsSee").addEventListener('click', getDate)
