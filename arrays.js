var array = [1]
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
console.log(chocolateBars)
function addElementToBeginningOfArray(array, element) {
array = ['foo', ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
array = array.unshift["foo"]
  return array
}

