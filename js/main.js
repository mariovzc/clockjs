const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDegrees = (sec / 60) * 360;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegree = (((mins / 60) * 360) + 90);
    minsHand.style.transform = `rotate(${minsDegree}deg)`;

    const hours = now.getMinutes();
    const hoursDegree = (((mins / 12) * 360) + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate,1000);
setDate();