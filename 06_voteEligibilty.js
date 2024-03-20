var voteEligibility = function (age) {
  if (age == 0 || age < 0 || age > 130) {
    console.log(`Invalid Data`);
  } else {
    console.log(`Valid Voter`);
    if (age < 18) {
      console.log(`Not Applicable For Vote`);
    } else {
      console.log(`Valid Voter`);
    }
  }
};
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);


