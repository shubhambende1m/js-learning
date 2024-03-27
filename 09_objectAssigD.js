const professor = {
    name: "Shubham",
    age:  40,
    experience: 5,
    expertize: "Java Programing",
    university: "SPPU",
    degree:{
        engineering: "CSE",
        PHD: "Adv Computing",
        course: "MSCIT"


    },

    certificates:["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],

    totalExperiences: "14 years"

}

console.log(professor);


console.log(`==========Update Value (age 42) ==================`);

professor.age = 42;

console.log(professor);



console.log(`==========Add New Element At 2 index Array ==================`);

var new1 = professor.certificates.splice(1,0,"Oracle Certificate");
console.log(professor.certificates);



console.log(`==========Print Last Element Of Array==================`);
var new4 = professor.certificates[professor.certificates.length-1];

console.log(new4);


console.log(`==========Traverse Array Using forof==================`);
for (let element of professor.certificates) {


console.log(element);

}

