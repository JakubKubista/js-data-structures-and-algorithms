/**
 * Pattern: Function composition
 * Source: https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
 * Description: Function that allows to combine two or more functions into a new function.
 */

function basicExample() {
  const add = x => y => x + y
  const multiply = x => y => x * y
  const addAndMultiply = compose(multiply(3), add(2))
  console.log(addAndMultiply);
}

// For both we read from right to left.
function anotherExample() {
  // Following functions can by composed.
  const listGroup = items =>
    listGroupTag(listGroupItems(items))

  // Function Composition.
  const listGroup = items =>
  compose(listGroupTag, listGroupItems)(items)
}