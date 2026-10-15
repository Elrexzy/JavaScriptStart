const prompt = require("prompt-sync")();
while (true){

let number = Number(prompt("Enter a number : "));

if(Number.isNaN(number)){
    console.log("Enter a valid number: ");
    continue;
}
else{

let index = 1;
while (index <= 12){
    let multiplication = number * index;
    console.log(number + "x" + index + "=" + multiplication);
        index++;
    }
}
break;
}


        
