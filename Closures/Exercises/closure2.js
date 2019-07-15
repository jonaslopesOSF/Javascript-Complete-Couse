// Make it so that the initialize function can only be called once!
let view;
function initialize() {
  let called = 0; // kind a singleton in javascript
  
  return function() {
    if (called > 0) {
      return;
    } else {
      view = '🏔';
      called++;
      console.log('view has been set!');
    }
  };
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();

console.log(view)