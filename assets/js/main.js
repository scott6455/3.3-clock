

function timer() {
var x=setInterval(time, 100);
}

function time()
{
var date=new Date();
var hour=getHours();
var minute=date.getMinutes();
var second=date.getSeconds();

document.getElementById("hour").innerHTML=' ';
document.getElementById("minute").innerHTML="minute";
document.getElementById("second").innerHTML="second";
}
