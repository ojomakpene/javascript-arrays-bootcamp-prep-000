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
function accessElementInArray(array, index) {
var array = [1, 2, 3]
 console.log(accessElementInArray[2])
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
 var array = [1, 2, 3]
 return  array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  var array = [1, 2, 3]
 array.pop()
  return array
}
