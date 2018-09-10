var btn_doit = document.getElementById("doIt");
var btn_clean = document.getElementById("clean");

btn_clean.addEventListener("click", function () {
  document.getElementById("toDisplay").innerHTML = "";
});

btn_doit.addEventListener("click", function () {
  var rand = Math.floor((Math.random() * (6)) + 1);
  console.log(rand);

  if (rand == 1) {
    document.getElementById("toDisplay").innerHTML = day1.message();
  }
  if (rand == 2) {
    document.getElementById("toDisplay").innerHTML = day2.message();
  }
  if (rand == 3) {
    document.getElementById("toDisplay").innerHTML = day3.message();
  }
  if (rand == 4) {
    document.getElementById("toDisplay").innerHTML = day4.message();
  }
  if (rand == 5) {
    document.getElementById("toDisplay").innerHTML = day5.message();
  }
  if (rand == 6) {
    document.getElementById("toDisplay").innerHTML = day6.message();
  }
});


class Activities {
  constructor(act1, act2, act3, act4) {
    this.wakeUp = "wake up at 5:30 AM ";
    this.act1 = act1;
    this.act2 = act2;
    this.act3 = act3;
    this.act4 = act4;
    this.act3 = "Go to sleep and have coding dreams"
  }
  message() {
    return "Tomorrow i will " + this.wakeUp + this.act1 + this.act2 + "and " + this.act3 + "and to finish the day i will " + this.act4;
  }
}
// ==========================  instances  ==========================
var day1 = new Activities("Go to work ", " go to ride in bike", "Keep getting programming skills ", "Go to sleep ");
var day2 = new Activities("Get a shower ", "Go to eat outside ", "go to the u", "take a short bike ride");
var day3 = new Activities("See the sun rise while programming ", "Take a big breakfast ", "Go to college in bike ", "Go to cinema");
var day4 = new Activities("Excercise ", " read news ", "set my weekly goals ", "take a great dinner with family");
var day5 = new Activities("Wake up while smiling ", "enjoy the city's view from house ", "study from house ", "go for a chill walk");
var day6 = new Activities("shedule my day ", "go to mass ", "drive to college   ", "take a short bike ride");
