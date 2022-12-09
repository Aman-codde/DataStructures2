//A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
function countingValleys(steps, path) {
  path = path.split("");
  let count = 0;
  let valleys = 0;
  let inValley = "no";
  let hike = 0;
  for (let i = 0; i < path.length; i++) {
    if (inValley === "no" && path[i] === "D") {
      if (hike == 0) {
        inValley = "yes";
      } else hike -= 1;
    }
    if (inValley === "no" && path[i] === "U") {
      hike += 1;
    }
    if (inValley === "yes") {
      if (path[i] === "U") {
        valleys += 1;
      }
      if (path[i] === "D") {
        valleys -= 1;
      }
      if (valleys == 0) {
        count++;
        inValley = "no";
      }
    }
    console.log(path[i], "Inside Valley:", inValley, " valley:", valleys);
  }
  return count;
}

console.log("total valleys covered:", countingValleys(8, "UDDDUDUU")); // expected 1
//console.log("total valleys covered:", countingValleys(12, "DDUUDDUDUUUD"));
//console.log("total valleys covered:", countingValleys(10, "UDUUUDUDDD"));
