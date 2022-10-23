// code your solution here

const saturdayFun = function (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork= function(event = "go to the office") {
    return `This Monday, I will ${event}.`
};

function wrapAdjective(string = "*") {
    return function (param = "special") {
      return `You are ${string}${param}${string}!`;
    };
  }


  