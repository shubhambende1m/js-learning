var day = 4;
switch (day) {
  case 0:
    console.log(`Sunday`);
    break;
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tuesday`);
    break;
  case 3:
    console.log(`Wednesday`);
    break;
  case 4:
    console.log(`Thursday`);
    break;
  case 5:
    console.log(`Friday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  default:
    console.log(`Invalid day`);
}
if (day == 0) {
  console.log(`Sunday`);
}
if (day == 1) {
  console.log(`Monday`);
}
if (day == 2) {
  console.log(`Tuesday`);
}
if (day == 3) {
  console.log(`Wednesday`);
}
if (day == 4) {
  console.log(`Thursday`);
}
if (day == 5) {
  console.log(`Friday`);
  if (day == 6) {
    console.log(`Saturday`);
  }
}
