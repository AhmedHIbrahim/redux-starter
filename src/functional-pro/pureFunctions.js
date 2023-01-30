

// -- not pure
function isEligable(age){
    return age > minAge
  }
  
  // -- pure
  function isEligable(age, minAge){
    return age > minAge
  }
  
  // -- not pure
  function getNumber(num){
    return num * Math.random()
  }
  