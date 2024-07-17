/* exported countValues */

function countValues(stack) {
  const keyValues = [];
  while (stack.peek() !== undefined) {
    keyValues.push(stack.pop());
  }
  return keyValues.length;
}
