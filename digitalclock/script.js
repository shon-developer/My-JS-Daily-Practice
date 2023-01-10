let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let section = document.querySelector("#section");

let displayTime = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let section = "AM";

  if (h >= 12) {
    h = h - 12;
    section.innerText = "PM";
  } else {
    section.innerText = "AM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  section.innerText = section;
  setTimeout(() => {
    displayTime();
  }, 1000);
};
displayTime();
