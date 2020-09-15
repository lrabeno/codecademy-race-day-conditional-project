let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true;
let runnerAge = 19;

if (runnerAge > 18 && earlyRunner){
raceNumber += 1000}

if (runnerAge > 18 && earlyRunner){
  console.log(`Your race starts at 9:30 am and your number is ${raceNumber}`);
} 
else if (runnerAge > 18 && !earlyRunner){ 
  console.log(`Your race starts at 11:00am and your number is ${raceNumber}`); 
} 
else if (runnerAge < 18){
  console.log(`Your race will start at 12:30pm and your number is ${raceNumber}`);
}
else {
  console.log('See the registration desk');
}
