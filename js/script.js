const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');

function upDateClock() {
    const now = new Date();
    if (now.getHours < 10) {
        hours.innerHTML = `0${now.getHours().toString()}`;
    } else {
        hours.innerHTML = now.getHours().toString();
    };

    if (now.getMinutes < 10) {
        minutes.innerHTML =`0${now.getMinutes().toString()}`;
    } else {
        minutes.innerHTML = now.getMinutes().toString();
    };
}

setInterval(upDateClock,1000);
upDateClock();