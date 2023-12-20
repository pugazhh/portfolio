const hour=document.querySelector(".needle-hour");
const minutes=document.querySelector(".needle-min");
const seconds=document.querySelector(".needle-sec");

setInterval(clock,1000);
function clock(){
const time=new Date();
const secs=(time.getSeconds())/60;
const mins=(secs+time.getMinutes())/60;
const hrs=(mins+time.getHours())/12;
hour.style.setProperty('--rotate',hrs*360);
minutes.style.setProperty('--rotate',mins*360);
seconds.style.setProperty('--rotate',secs*360);
}
clock();

