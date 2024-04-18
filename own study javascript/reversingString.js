function reverseString(str){
    let strw ="";

        for(let i=str.length-1; i>=0;i--){
    strw += str[i];
    }
    console.log(strw);
    }

    reverseString("hello");