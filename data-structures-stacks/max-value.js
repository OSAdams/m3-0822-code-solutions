/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) return -Infinity;
  let ourStack = 0;
  while (stack.peek() !== undefined) {
    if (stack.peek() > ourStack) {
      ourStack = stack.pop();
    }
  }
  return ourStack;
}
