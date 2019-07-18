(async function() {
    try {
      await Promise.resolve('opsie #1')
      await Promise.reject('opsie #2')
    } catch(err) {
      console.log(err)
    }
    console.log('is this still good')
  })()