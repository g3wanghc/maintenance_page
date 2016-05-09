function showTime() {
    var a_p = "";
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    
    if (hour < 12) {
        a_p = "<span>AM</span>";
    } else {
        a_p = "<span>PM</span>";
    }
    
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    
    hour = formatTime(hour);
    minute = formatTime(minute);
    second = formatTime(second);
    
    document.getElementById('clock-large').innerHTML = 
        hour + " : " + minute + " : " + second + " " + a_p;
}

function formatTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
setInterval(showTime, 500);

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Ju', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var date = new Date();
var day = date.getDate();

var month = date.getMonth();
var today = date.getDay(),

weekday = weekdays[today];

var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;

function showDate() {
  document.getElementById('date-large').innerHTML = 
    "<b>" + weekday + "</b>, " + months[month] + " " + day + " " + year;
}
