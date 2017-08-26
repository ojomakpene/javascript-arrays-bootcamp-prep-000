var array = [1]
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
console.log(chocolateBars)
function addElementToBeginningOfArray(array, element) {
  ['foo', ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift['foo']
  return array
}
function addElementToEndOfArray(array, element) {
  [...array, 1]
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push['foo']
  return array
}
