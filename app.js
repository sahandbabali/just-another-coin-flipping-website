var fliphistory = [];
var headsount = 0;
var tailscount = 0;
var totalflips = 0;

function flipit() {
  let randombinaryvalue = Math.round(Math.random());
  console.log(randombinaryvalue);

  if (randombinaryvalue == 0) {
    // change the coin pic to 0

    headsount++;
    // update the progress bar
    updateprogressbar();
    // add to table
    addtotable(randombinaryvalue);
  } else if (randombinaryvalue == 1) {
    // change the coin pic to 1

    tailscount++;
    // update the progress bar
    updateprogressbar();
    // add to table
    addtotable(randombinaryvalue);
  }
}

function updateprogressbar() {
  // update count badges
  // update the progress bar
}

function addtotable(lastflip) {}

flipit();
