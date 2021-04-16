const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', 
function(){
if(btnHam.className !== "")
{
   btnHam.style.display = "none";
   btnTimes.style.display = "block";
   navBar.classList.add("show-nav"); 
}
})

btnTimes.addEventListener('click', function(){
    if(btnTimes.className !== "")
    {
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav") 
    }
})

function realtimeCLock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12: hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " +seconds + " " + amPm;
    var t = setTimeout(realtimeCLock, 500);
}
realtimeCLock();