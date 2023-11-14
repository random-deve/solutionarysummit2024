function toggleResponsive() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("topNav").style = "height: 375px;";
  } else {
    x.className = "topnav";
    document.getElementById("topNav").style = "height: 60px;";
  }
}

document.addEventListener("scroll", () => {
  var x = document.getElementById("topNav");
  if (document.body.scrollTop >= 20) {
    document.getElementById("topNav").style = "height: 60px;";
  } else {
    document.getElementById("topNav").style = "height: 250px;";
  }
});

const b = document.getElementById("HotelInfoText");
function e() {
  c = document.getElementById("HotelInfoContent");
  c.classList.toggle("hidden");
}