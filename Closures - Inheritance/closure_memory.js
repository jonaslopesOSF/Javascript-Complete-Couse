// Memory effieient

function heavyDuty(index) {
  const bigArray = new Array(7000).fill(":D");
  console.log("created!");
  return bigArray[index];
}

heavyDuty(688);
heavyDuty(688);
heavyDuty(688);

function heavyDuty2() {
  const bigArray = new Array(7000).fill(":D"); // create the big array just once
  console.log("created Again!");
  return function(index) {
    return bigArray[index];
  };
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(688); // this number references only the inside function
getHeavyDuty(700); // of heavyDuty2
getHeavyDuty(800);
