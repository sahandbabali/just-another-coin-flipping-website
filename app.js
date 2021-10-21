var fliphistory = [];
var headscount = 0;
var tailscount = 0;
var totalflips = 0;

document.getElementById("flipbutton").addEventListener("click", flipit);
document.getElementById("autoflipsub").addEventListener("click", autoflip);

function flipit() {
  let randombinaryvalue = Math.round(Math.random());
  totalflips++;
  console.log(randombinaryvalue);

  if (randombinaryvalue == 0) {
    // change the coin pic to 0
    document.getElementById("coinimg").src = "coin128-0.png";
    document.getElementById("flipresult").innerHTML = "Heads";
    headscount++;
    updatebadges();
    // update the progress bar
    updateprogressbar();
    // add to table
    addtotable(randombinaryvalue);
  } else if (randombinaryvalue == 1) {
    // change the coin pic to 1
    document.getElementById("coinimg").src = "coin128-1.png";
    document.getElementById("flipresult").innerHTML = "Tails";
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

  //console.log(`headspercent ${headspercent}`);
  document.getElementById("headsbar").style.width = `${headspercent}%`;
  document.getElementById("headsbar").innerHTML = `${headspercent}%`;

  var tailspercent = (tailscount * 100) / totalflips;
  tailspercent = Math.round(tailspercent, 0);
  if (tailspercent == NaN) {
    tailspercent == 0;
  }
  if (tailspercent == Infinity) {
    tailspercent == 100;
  }

  // console.log(`tailspercent ${tailspercent}`);
  document.getElementById("tailsbar").style.width = `${tailspercent}%`;
  document.getElementById("tailsbar").innerHTML = `${tailspercent}%`;
}

function updatebadges() {
  document.getElementById("headsbadge").innerHTML = `${headscount}`;
  document.getElementById("tailsbadge").innerHTML = `${tailscount}`;
}

function addtotable(lastflip) {
  var table = document.getElementById("restable");

  var row = table.insertRow(1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = `${totalflips}`;
  cell1.scope = "row";

  var current = new Date();
  cell2.innerHTML = `${current.toLocaleTimeString()}`;

  if (lastflip == 0) {
    cell3.innerHTML = `<span class="badge bg-primary">Heads</span>`;
  } else if (lastflip == 1) {
    cell3.innerHTML = `<span class="badge bg-success">Tails</span>`;
  }

  let rowlength = document.getElementById("restable").rows.length;

  if (rowlength == 10) {
    console.log(
      `row length ${document.getElementById("restable").rows.length}`
    );
    document.getElementById("restable").deleteRow(rowlength - 1);
  }
}

function autoflip() {
  let autonum = document.getElementById("autofilipnum").value;
  for (let index = 0; index < autonum; index++) {
    setTimeout(function timer() {
      flipit();
    }, index * 500);
  }
}
