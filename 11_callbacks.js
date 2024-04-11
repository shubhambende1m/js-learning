// Jenny : Solve the homework by own


function jennyHomework(callbacks) {

    console.log(`jenny started Homework`);
    console.log(`jenny took sometime to complete 2 hours to complete`);
    console.log(`Finally Jenny Completed Homework`);
    callbacks();

}
// Elon  : copy homewok from Jenny

let elonCopyHomework = function() {
        console.log(`Plying Cricket`);
        console.log(`Coping Homework`);
        console.log(`After 10 minutes elon copied all Homework`);
}
jennyHomework(elonCopyHomework);


