/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) return undefined;
  const lastIndex = stack.pop();
  const secondToLastIndex = stack.peek();
  stack.push(lastIndex);
  return secondToLastIndex;
}
