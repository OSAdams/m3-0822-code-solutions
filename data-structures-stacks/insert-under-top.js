/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) return;
  const lastIndex = stack.pop();
  stack.push(value);
  stack.push(lastIndex);
}
