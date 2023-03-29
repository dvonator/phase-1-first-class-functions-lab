// Code your solution in this file!
let ScubaDriverNames = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function () {
  return ScubaDriverNames.slice(0, 2);
};

const returnLastTwoDrivers = function () {
  return ScubaDriverNames.slice(2, 4);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = function (multiplier) {
//   return function (fairFee) {
//     return fairFee * multiplier;
//   };
// };

function createFareMultiplier(multiplier) {
  return function (fairFee) {
    return fairFee * multiplier;
  };
}

let fareDoubler = createFareMultiplier(2); //Because faredoubler is a sign to the outer function, & ALSO we know that the function createFareMultiplier has an inner function we then can treat the variable "Fare doubleer" as a function

let fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(ScubaDriverNames, allowingPassOfTestArguement) {
  return allowingPassOfTestArguement(ScubaDriverNames);
}
