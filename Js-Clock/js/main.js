const shand = document.querySelector('.second-hand');
const mhand = document.querySelector('.min-hand');
const hhand = document.querySelector('.hour-hand');

function setDate () {
  let now = new Date();
  let seconds = now.getSeconds();
  let secondsDegree = ((seconds/ 60) * 360) + 90;
  shand.style.transform = `rotate(${secondsDegree}deg)`;

  let mins = now.getMinutes();
  let minssDegree = ((mins/ 60) * 360) + 90;
  mhand.style.transform = `rotate(${minssDegree}deg)`;

  let hours = now.getHours();
  let hoursDegree = ((hours/ 12) * 360) + 90;
  hhand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);