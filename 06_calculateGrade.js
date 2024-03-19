
// Grade calculation
// pass or fail ==> Marks <=34 Fail else pass
// marks>= 35 and less than 55 == Grade C

// marks>= 55 and less than 75 == Grade B

// marks>= 75 and less than 100 == Grade A



var marks = 94;
if (marks<35){
    console.log(`Failed Marks: ${marks}`);
}
else{
    if (marks>=35 && marks< 55) {
        console.log(`Congratulation. Grade:C`);

    }else{
        if (marks>=55 && marks<75){
            console.log(`Congratulation.Grade:B`);
        }
        else{
            if (marks>=75 && marks<100){
                console.log(`Congratulation.Grade:A`);
            }
            else{
                console.log(`Invalid Marks Percentage.`);
            }
        }
        }
    }


