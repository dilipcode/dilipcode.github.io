


// Imagine this. Sachin and Dravid are in their form of their life. They have the capacity to tear apart any bowling attack without loosing their wickets.
// Lets say I give you the runs scored per ball in a array (max 300 balls).
// Find out how many runs Sachin and Dravid scored at the end of the innings.Always, Sachin takes strike for the first ball. There no extras bowled.Example : [2,3,0,0,4,6,1,2,3,4,2,1]
// Sachin Score is 2+3+1+4+2+1 = 13
// Dravid Score is 0+0+4+6+2+3 = 15

//  Extend the above program to include bowlers and how many runs were scored of them.
// Assume, we have 2 bowlers Shane warne and Glen Mcgrath bowling throughout the innings and lets say Warne starts the first over always.
// For the same input example as yday,
// Example : [2,3,0,0,4,6,1,2,3,4,2,1]Shane Warne has given away : 2+3+0+0+4+6 = 15 runs
// Glen Mcgrath has given away : 1+2+3+4+2+1 = 13 runsRemember this should be an addition to scores of the batsman.





var arr = [2,3,0,0,4,6,1,2,3,4,2,1];

function printScore(){
  console.log("Sachin scored " + sachin.totalScore);
  console.log("Dravid scored " + dravid.totalScore);
  console.log("shane given " + shane.totalRuns);
  console.log("glen given " + glen.totalRuns);
}
function currentStriker(){
  if(sachin.striker){
    return sachin;
  }
  else{
    return dravid;
  }
}

var sachin = {
  name: "sachin",
  totalScore: 0,
  addRuns: function(ball){
    this.totalScore+= ball;
  },
  striker: true,
  changeStrike: function(){
    this.striker = false;
    dravid.striker = true;
  }
}

var dravid = {
  name: "dravid",
  totalScore: 0,
  addRuns: function(ball){
    this.totalScore+= ball;
  },
  striker: false,
  changeStrike: function(){
    this.striker = false;
    sachin.striker= true;
  }
}

function currentBowler(){
  if(shane.bowler){
    return shane;
  }
  else{
    return glen;
  }
}

var shane = {
  name: "shane",
  totalRuns: 0,
  givenRuns: function(ball){
    this.totalRuns+= ball;
  },
  bowler:true,
  changeBowler: function(){
    this.bowler = false;
    glen.bowler = true;
  }
}
var glen = {
  name: "glen",
  totalRuns: 0,
  givenRuns: function(ball){
    this.totalRuns+= ball;
  },
  bowler: false,
  changeBowler: function(){
    this.bowler = true;
    shane.bowler = false;
  }
}
function cricket(arr){
  var ballsCount = 0;
  for(var i =0; i< arr.length;i++){
    var batsmen = currentStriker();
    var bowler = currentBowler();
    console.log("striker is " + batsmen.name + " "+ "bowler is " + bowler.name);
    
    ballsCount++;
    batsmen.addRuns(arr[i]);
    bowler.givenRuns(arr[i]);    
    if(arr[i]%2!==0){      
      batsmen.changeStrike();
      console.log(batsmen.name + " current score is " + batsmen.totalScore);
    }
    else if(ballsCount%6 == 0){
      batsmen.changeStrike();
      bowler.changeBowler();
      console.log(batsmen.name + " current score is " + batsmen.totalScore);
    }

  }
  printScore();
}

cricket(arr);

//---------------------------------------------------------------------------------

// You have a start up with 20 employees. Your start up is doing really great and you want to reward your employees.
// So you announce a bonus of 10000 USD for all your employees.
// Now you have write a small program to update salaries of all employees. Please first try this in procedural or imperative approach and then try the same in object oriented approach.



procedure oriented
var salaries = [100,200,400,600];
function updateSalaries(bonus){
  for(var i =0; i <salaries.length ; i++){
    salaries[i]+= bonus;
  }
  console.log(salaries);
}

updateSalaries(1000);

// object oriented approach, object creation using function constructor
function Employee(salary){  
  this.salary = salary;
}

Employee.prototype.updateSalary = function(bonus){
  this.salary+= bonus;
  console.log(this.salary);  
}

var salariesList =[];
var emp1 = new Employee(100);
console.log(emp1);
var emp2 = new Employee(200);
var emp3 = new Employee(400);
var emp4 = new Employee(600);
salariesList.push(emp1);
salariesList.push(emp2);
salariesList.push(emp3);
salariesList.push(emp4);


(function(){
for(var i = 0; i < salariesList.length; i++){
  salariesList[i].updateSalary(1000);
}
})();
// _______________________________________________________________________________________

// object creation using pure prototype inheritance

var employee = {
  salary: 'Default',
  updateSalaryWithBonus: function(bonus){
    this.salary+= bonus;
  }
}

var emp1 = Object.create(employee);
emp1.salary=100;
var emp2 = Object.create(employee);
emp2.salary=200;
var emp3 = Object.create(employee);
emp3.salary=400;
var emp4 = Object.create(employee);
emp4.salary=600;
var salariesList =[];
salariesList.push(emp1);
salariesList.push(emp2);
salariesList.push(emp3);
salariesList.push(emp4);
(function(){
  for(var i = 0; i < salariesList.length; i++){
  salariesList[i].updateSalaryWithBonus(1000);
  console.log(salariesList[i]);
  }
})();
