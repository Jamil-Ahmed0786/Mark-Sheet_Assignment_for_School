var Metric_Student = ["Shoaib", "Aziz", "Safiuddin", "Zahid", "Adnan"];
var Obtain_Mark = 950;
var total_Mark = 1050;
var percentage = Obtain_Mark / 1050 * 100;
console.log("Congratulation", Metric_Student[0], "Your grade is A+");
console.log("Congratulation", Metric_Student[1], "Your grade is A");
console.log("Congratulation", Metric_Student[2], "Your grade is B");
console.log("Congratulation", Metric_Student[3], "Your grade is C");
console.log("Congratulation", Metric_Student[4], "Your grade is D");
if (percentage >= 90 && percentage <= 100) {
    console.log();
}
else if (percentage >= 80 && percentage <= 90) {
    console.log("Your grade is  A");
}
else if (percentage >= 70 && percentage <= 80) {
    console.log("Your grade is  B");
}
else if (percentage >= 60 && percentage <= 70) {
    console.log("Your grade is  C");
}
else if (percentage >= 50 && percentage <= 60) {
    console.log("Your grade is  D");
}
else if (percentage <= 49 && percentage <= 41) {
}
console.log("If Your grade is E you are Fail");
