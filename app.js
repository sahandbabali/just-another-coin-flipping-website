var fliphistory = [];
var headscount = 0;
var tailscount = 0;
var totalflips = 0;

document.getElementById("flipbutton").addEventListener("click", flipit);

function flipit() {
  let randombinaryvalue = Math.round(Math.random());
  totalflips++;
  console.log(randombinaryvalue);

  if (randombinaryvalue == 0) {
    // change the coin pic to 0
    document.getElementById("coinimg").src = "coin128-0.png";
    document.getElementById("flipresult").innerHTML = "Head";
    headscount++;
    updatebadges();
    // update the progress bar
    updateprogressbar();
    // add to table
    addtotable(randombinaryvalue);
  } else if (randombinaryvalue == 1) {
    // change the coin pic to 1
    document.getElementById("coinimg").src = "coin128-1.png";
    document.getElementById("flipresult").innerHTML = "Tail";
    tailscount++;
    updatebadges();
    // update the progress bar
    updateprogressbar();
    // add to table
    addtotable(randombinaryvalue);
  }
}

function updateprogressbar() {
  // update the progress bar
  var headspercent = (headscount * 100) / totalflips;
  headspercent = Math.round(headspercent, 0);

  if (headspercent == NaN) {
    headspercent == 0;
  }
  if (headspercent == Infinity) {
    headspercent == 100;
  }

  console.log(`headspercent ${headspercent}`);
  document.getElementById("headsbar").style.width = `${headspercent}%`;
  document.getElementById("headsbar").innerHTML = headspercent;

  var tailspercent = (tailscount * 100) / totalflips;
  tailspercent = Math.round(tailspercent, 0);
  if (tailspercent == NaN) {
    tailspercent == 0;
  }
  if (tailspercent == Infinity) {
    tailspercent == 100;
  }

  console.log(`tailspercent ${tailspercent}`);
  document.getElementById("tailsbar").style.width = `${tailspercent}%`;
  document.getElementById("tailsbar").innerHTML = tailspercent;
}

function updatebadges() {
  document.getElementById("headsbadge").innerHTML = `${headscount}`;
  document.getElementById("tailsbadge").innerHTML = `${tailscount}`;
}

function addtotable(lastflip) {}

flipit();
