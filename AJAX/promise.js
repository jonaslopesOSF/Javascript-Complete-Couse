const promise = new Promise((resolve, reject) => {
    if (true) {
      resolve('stuff worked');
    } else {
      reject('Error, it broked')
    }
  })
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HII')
  })
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
  })
  
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'Is it me you are looking for?')
  })
  
  Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
      console.log(values)
    })