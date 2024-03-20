function gradeCalculation(marks) {
  //invalid inputs

  if (marks == null || marks <= 0 || isNaN(+marks)) {
    console.log(`Invalid inputs: ${marks}`);
  } else {
    if (marks >= 90) {
      console.log(`Fantastic Marks: ${marks}, Your grade is A+`);
    } else {
      if (marks >= 75 && marks < 90) {
        console.log(`Excellent Marks: ${marks}, Your grade is A`);
      } else {
        if (marks >= 50 && marks < 75) {
          console.log(`Good Marks: ${marks}, Your grade is B`);
        } else {
          if (marks >= 35 && marks < 50) {
            console.log(`Average Marks: ${marks}, Your grade is C`);
          }
        }
      }
    }
  }
  if (marks < 35) {
    console.log(`fail: ${marks}`);
  }
}

//gradeCalculation(null);
//gradeCalculation(0);
//gradeCalculation(-20);
//gradeCalculation("Seventy");
//gradeCalculation("70");

gradeCalculation("98");
gradeCalculation("80");
gradeCalculation("90");
gradeCalculation("0");
gradeCalculation("150");
gradeCalculation("-7");
gradeCalculation("35");
gradeCalculation("29");
gradeCalculation("64");
gradeCalculation("49");
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation("undefined");
gradeCalculation("null");
gradeCalculation("30");
