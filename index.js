var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

<<<<<<< HEAD
function add2() {
=======
function add2(n) {
>>>>>>> 51d398088fe8201d48eb494dcb4b5f4664d52c81
  const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()()
=======
var theFunk = funkyFunction(function())
>>>>>>> 51d398088fe8201d48eb494dcb4b5f4664d52c81
