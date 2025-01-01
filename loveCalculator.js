
// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

// var nameOne= input ("What is your name? ")
// var nameTwo= input ("What is their name name? ")


var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1
console.log(loveScore);
// if (loveScore === 100){
//     console.log("Your love socrer is " + loveScore + "%. You loveeee each other.");
// } else {
//    console.log("I personally don't know of a divorce lawyer, but I can give you a good marriage counselor's number!");
// }

if (loveScore > 70){
    console.log("Your love socrer is " + loveScore + "%. You loveeee each other.");
} 

if (loveScore > 30 && loveScore <= 70 ){
    console.log("Your love score is " + loveScore + "%");
}

if(loveScore<= 30){
    console.log(" Ya'll really don't like each other do you now? ");
}