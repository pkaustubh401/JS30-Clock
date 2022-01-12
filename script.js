const secondsHand = document.getElementById("seconds");
const minutesHand = document.getElementById("minutes");
const hoursHand = document.getElementById("hours");

function play() {
  const currentdate = new Date();
  const currentseconds = currentdate.getSeconds();
  const currentminutes = currentdate.getMinutes();
  const currenthours = currentdate.getHours();

  if (currentseconds == 0) {
    secondsHand.style.transition = "none";
  } else {
    secondsHand.style.transition = "transition: all 0.5s ease-in-out;";
  }
  const secdeg = (currentseconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secdeg}deg)`;

  if (currentminutes == 0) {
    minutesHand.style.transition = "none";
  } else {
    minutesHand.style.transition = "transition: all 0.5s ease-in-out;";
  }
  const mindeg = (currentminutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${mindeg}deg)`;

  const houdeg = (currenthours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${houdeg}deg)`;
}

setInterval(play, 1000);
