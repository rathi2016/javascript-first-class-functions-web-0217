// function runFiveMiles() {
//   console.log('Go for a five-mile run');
// }
// function liftWeights() {
//   console.log('Pump iron');
// }
//
// function swimFortyLaps() {
//   console.log('Swim 40 laps');
// }
// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }
// function Monday() {
//   exerciseRoutine(liftWeights);
// }
function receivesAFunction(callback){
  return callback()
}

 function returnsANamedFunction(){
   return function liftWeights(){
     console.log('Pump iron');
   }
 }
function returnsAnAnonymousFunction(){
return function() {
    console.log('Stretch! Work that core!');
  };
}
