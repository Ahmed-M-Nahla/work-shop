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
