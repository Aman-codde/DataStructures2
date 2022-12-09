function getGrade(score) {
  let grade;
  // Write your code here
  if (25 < score && score <= 30) {
    grade = "A";
    console.log(score);
  } else if (20 < score && score <= 25) grade = "B";
  else if (15 < score && score <= 20) grade = "C";
  else if (10 < score && score <= 15) grade = "D";
  else if (5 < score && score <= 10) grade = "E";
  else if (0 <= score && score <= 5) grade = "F";
  else return;
  return grade;
}

console.log(getGrade(27));
