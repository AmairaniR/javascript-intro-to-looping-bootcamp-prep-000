function forLoop(array) { 
  for (let i = 0; i < 25; i++) { 
    if(i === 1) { 
      array.push(`I am 1 strange loop.`) 
    } else { 
      array.push(`I am ${i} strange loops.`) 
    } 
  }
  return array 
}

function doWhileLoop(array) {
  function mayebTrue() {
  return Math.random() >= 0.5
  }
}
do {
  newArray = doWhileLoop(array)
    array.shift() > 0 && maybeTrue()
   return newArray
} while (maybeTrue()) 
