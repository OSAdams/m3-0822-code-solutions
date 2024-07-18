/* exported isEmpty */

function isEmpty(queue) {
  const whatIsIt = queue.peek();
  const ourReturn = whatIsIt === undefined;
  return ourReturn;
}
