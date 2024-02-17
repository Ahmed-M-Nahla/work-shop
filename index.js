$(".carouse1").flipster({
  style: "carouse1",
  spacing: -0.3,
});

$(".carouse1").flipster({
  itemContainer: "ul",

  itemSelector: "li",

  start: "center",

  fadeIn: 400,

  loop: false,

  autoplay: false,

  pauseOnHover: true,

  style: "coverflow",

  spacing: -0.6,

  click: true,

  keyboard: true,

  scrollwheel: true,

  touch: true,

  nav: false,

  buttons: false,

  buttonPrev: "Previous",

  buttonNext: "Next",

  onItemSwitch: false,
});

// the end the years date to countdown to 

let countDownDate = new Date("Apr 31 2024 23:59:59").getTime();
  // console.log(countDownDate);

let counter = setInterval(() => {
  // get date now
  let dateNow = new Date().getTime();

  // find the date difference between now and countdown date
  let dateDiff = countDownDate - dateNow;

  // get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDiff % (1000 * 60)) /1000 );

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

  // console.log(dateDiff,days,hours,minutes,seconds);

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

