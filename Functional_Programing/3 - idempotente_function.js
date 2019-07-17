// Idempotence: have the same behavior, return always the same result, even though don't be a pure function
function notGood(num) { 
    return Math.random(num) // isn't Idempotence 
    // new Date();
  }
  notGood(5)
  
  Math.abs(Math.abs(-50)) // this is Idempotence