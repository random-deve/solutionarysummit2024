function toggleResponsive() {
  let x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
    x.style = "height: 375px;";
  } else {
    x.className = "topnav";
    x.style = "height: 60px;";
  }
}

document.addEventListener("scroll", () => {
  let x = document.getElementById("topNav");
  if (document.body.scrollTop >= 20) {
    x.style = "height: 60px;";
    document.getElementById("backgroundimg").style = "height: 0px;"
  } else {
    x.style = "height: 250px;";
    document.getElementById("backgroundimg").style = "height: 250px;"
  }
});

const b = document.getElementById("HotelInfoText");
function e() {
  c = document.getElementById("HotelInfoContent");
  c.classList.toggle("hidden");
}

try {
  document.addEventListener('DOMContentLoaded', function () {
    const compass = document.querySelector('.rotate-right');
    let rotAngle = 0;

    compass.addEventListener('click', function () {
      rotAngle += 90;
      this.style = `transform: rotate(${rotAngle}deg);`;
      this.classList.toggle("clicked");
    });
  });
} catch {
  console.log("there is no compass here :C");
}