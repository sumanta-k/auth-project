const age = 8;
// if(age >= 18){
//     console.log("You can vote");
// }else{
//     console.log("You can not vote");
// }

//ternary operator

age >= 18 ? console.log("you can vote") :console.log("you can't vote");

//assigning value to a variable
const canVote = age>= 18 ?true : false;
console.log(canVote);


const canVote2 = age >= 18 ?'you can vote':'you can not vote';
console.log(canVote2);