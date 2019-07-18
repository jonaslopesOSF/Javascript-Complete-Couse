//just works to synchronous code

function fail() {
    try{
      
      throw new Error('opsieeee')
      console.log('this works') //  this line never will execute
    } catch(error) { // handling with the errors catched
      console.log(error.message)
    } finally {
      console.log('still good')
      return 'returning failt'
    }
  
  }
  
  fail()
  