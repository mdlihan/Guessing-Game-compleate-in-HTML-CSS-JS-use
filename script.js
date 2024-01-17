var gussnumber = document.querySelector("#gussnumber");
var Check = document.querySelector("#Check");
var body = document.querySelector(".card-body");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var h2 = document.querySelector(".h2");

// initialize value
var won = 0;
var lost = 0;
var totalattems = 5;
var attemps = 0;
body.addEventListener("submit", function (even) {
  even.preventDefault();
  var random = Math.floor(Math.random() * 6);
  attemps++;
  if (attemps > 5) {
    Check.disabled = true;
    gussnumber.disabled = true;
  } else {
    if (gussnumber.value == random) {
      won++;
      p1.innerHTML = `you have won`;
    } else {
      lost++;
      p1.innerHTML = `you have lost,Random number was:${random}`;
    }
  }
  p2.innerHTML = `Remaning Attemps:${totalattems - attemps}`;
  h2.innerHTML = `won :${won} lost :${lost}`;
  gussnumber.value = "";
});
