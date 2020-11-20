// Your code here
//1.
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

//2.
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

//3.
let wrapAdjective = function(style="*") {
  return function(parameter="special"){
    return `You are ${style}${parameter}${style}!`
  }
}

//4.
const Calculator = {
  add: function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b;
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
}}
