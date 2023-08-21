const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(x) {
    let result = [...x]
    return result.slice(0,2);
}

function returnLastTwoDrivers(y){
    let result = [...y]
    return result.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    return function (fare) {
      return fare * fare;
    };
  }
  function fareDoubler(fare) {
    return fare * 2;
  }
  function fareTripler(fare) {
    return fare * 3;
  }
  function selectDifferentDrivers(drivers,b){
    return b(drivers);
  }