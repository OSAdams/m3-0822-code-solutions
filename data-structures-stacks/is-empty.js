/* exported isEmpty */

function isEmpty(stack) {
  const whatIsIt = stack.peek();
  const ourReturn = whatIsIt === undefined;
  return ourReturn;
}
